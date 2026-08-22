import { validateInquiryForm, type InquirySubmission } from '../../src/lib/inquiry/validation';

type PagesContext<Env> = { request: Request; env: Env };
type PageHandler<Env> = (context: PagesContext<Env>) => Promise<Response>;

interface Env {
  INQUIRY_DRY_RUN?: string;
  INQUIRY_PROVIDER?: 'none' | 'webhook' | 'resend';
  INQUIRY_RECIPIENT?: string;
  INQUIRY_FROM?: string;
  INQUIRY_WEBHOOK_URL?: string;
  INQUIRY_WEBHOOK_TOKEN?: string;
  RESEND_API_KEY?: string;
  TURNSTILE_MODE?: 'none' | 'turnstile';
  TURNSTILE_SECRET_KEY?: string;
  TURNSTILE_ALLOWED_HOSTNAMES?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

async function verifyTurnstile(env: Env, token: string, ip: string) {
  if (env.TURNSTILE_MODE !== 'turnstile') return true;
  if (!env.TURNSTILE_SECRET_KEY || !token) return false;

  const body = new FormData();
  body.set('secret', env.TURNSTILE_SECRET_KEY);
  body.set('response', token);
  if (ip && ip !== 'unknown') body.set('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean; hostname?: string };
  if (!result.success) return false;

  const allowed = (env.TURNSTILE_ALLOWED_HOSTNAMES ?? '')
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  if (allowed.length > 0 && (!result.hostname || !allowed.includes(result.hostname.toLowerCase())))
    return false;
  return true;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char] ?? char,
  );
}

async function deliver(env: Env, input: InquirySubmission) {
  if (env.INQUIRY_DRY_RUN === 'true') return;
  const provider = env.INQUIRY_PROVIDER ?? 'none';
  if (provider === 'none') throw new Error('inquiry_provider_not_configured');

  if (provider === 'webhook') {
    if (!env.INQUIRY_WEBHOOK_URL) throw new Error('webhook_not_configured');
    const response = await fetch(env.INQUIRY_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(env.INQUIRY_WEBHOOK_TOKEN
          ? { authorization: `Bearer ${env.INQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        source: 'digvation-website',
        submittedAt: new Date().toISOString(),
        data: input,
      }),
    });
    if (!response.ok) throw new Error('webhook_delivery_failed');
    return;
  }

  if (!env.RESEND_API_KEY || !env.INQUIRY_FROM || !env.INQUIRY_RECIPIENT)
    throw new Error('resend_not_configured');
  const rows = Object.entries(input)
    .map(
      ([key, value]) =>
        `<p><strong>${escapeHtml(key)}</strong><br>${escapeHtml(String(value ?? '—'))}</p>`,
    )
    .join('');

  const send = async (to: string, subject: string, html: string, replyTo?: string) => {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: env.INQUIRY_FROM,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!response.ok) throw new Error('resend_delivery_failed');
  };

  await send(env.INQUIRY_RECIPIENT, `New Digvation inquiry — ${input.name}`, rows, input.email);

  try {
    const copy =
      input.locale === 'id'
        ? 'Terima kasih. Kami sudah menerima konteks yang Anda kirim dan akan meninjaunya sebelum melanjutkan percakapan.'
        : 'Thank you. We received the context you shared and will review it before continuing the conversation.';
    await send(
      input.email,
      input.locale === 'id' ? 'Inquiry diterima — Digvation' : 'Inquiry received — Digvation',
      `<p>${escapeHtml(copy)}</p>`,
    );
  } catch {
    console.error('[digvation.inquiry.acknowledgement_failed]');
  }
}

export const onRequestPost: PageHandler<Env> = async (context) => {
  const contentLength = Number(context.request.headers.get('content-length') ?? '0');
  if (contentLength > 64 * 1024) return json({ ok: false, message: 'Request too large.' }, 413);

  let form: FormData;
  try {
    form = await context.request.formData();
  } catch {
    return json({ ok: false, message: 'Invalid request.' }, 400);
  }

  const result = validateInquiryForm(form);
  if (!result.ok) return json({ ok: false, message: result.message }, 400);

  const { submission, honeypot, turnstileToken } = result.data;

  // Honeypot submissions are intentionally accepted without delivery so bots
  // receive no useful signal about the anti-abuse mechanism.
  if (honeypot) return json({ ok: true });

  const ip = context.request.headers.get('CF-Connecting-IP') ?? 'unknown';
  if (!(await verifyTurnstile(context.env, turnstileToken, ip))) {
    return json(
      {
        ok: false,
        message:
          submission.locale === 'id'
            ? 'Verifikasi anti-spam gagal. Silakan coba lagi.'
            : 'Anti-spam verification failed. Please try again.',
      },
      400,
    );
  }

  try {
    await deliver(context.env, submission);
    return json({ ok: true });
  } catch (error) {
    console.error('[digvation.inquiry.failed]', error instanceof Error ? error.message : 'unknown');
    return json(
      {
        ok: false,
        message:
          submission.locale === 'id'
            ? 'Inquiry belum dapat dikirim. Silakan coba lagi.'
            : 'Your inquiry could not be sent. Please try again.',
      },
      500,
    );
  }
};

export const onRequestGet: PageHandler<Env> = async () =>
  json({ ok: false, message: 'Method not allowed.' }, 405);

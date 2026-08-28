import { describe, expect, it } from 'vitest';
import { onRequestPost } from '../../functions/api/inquiry';

const makeRequest = (
  body: URLSearchParams | string,
  contentType = 'application/x-www-form-urlencoded',
) =>
  new Request('https://digvation.id/api/inquiry', {
    method: 'POST',
    headers: { 'content-type': contentType },
    body,
  });

const validBody = () =>
  new URLSearchParams({
    locale: 'id',
    name: 'Dicky',
    email: 'dicky@example.com',
    improvement: 'Saya ingin merapikan proses order dan pemantauan status bisnis.',
    consent: 'true',
  });

describe('inquiry handler', () => {
  it('accepts a valid same-format inquiry in dry-run mode', async () => {
    const response = await onRequestPost({
      request: makeRequest(validBody()),
      env: { INQUIRY_DRY_RUN: 'true', TURNSTILE_MODE: 'none' },
    });

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
  });

  it('rejects an oversized body even without a content-length header', async () => {
    const body = validBody();
    body.set('improvement', 'x'.repeat(70 * 1024));
    const request = makeRequest(body);
    request.headers.delete('content-length');

    const response = await onRequestPost({ request, env: {} });

    expect(response.status).toBe(413);
  });

  it('rejects unsupported content types before parsing', async () => {
    const response = await onRequestPost({
      request: makeRequest('{}', 'application/json'),
      env: {},
    });

    expect(response.status).toBe(415);
  });
});

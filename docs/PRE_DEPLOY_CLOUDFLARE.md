# First Production Deployment — Cloudflare Pages

Use this order. Do not launch ads before conversion measurement has been verified.

## 1. Prepare accounts first

Create/confirm access to:

1. Cloudflare account and the `digvation.id` zone.
2. GitHub/GitLab repository for this project.
3. Google Analytics 4 property + Web data stream for `https://digvation.id`.
4. Google Tag Manager **Web** container for Digvation.
5. Microsoft Clarity project (recommended, optional).
6. Resend account + verified sending domain, or a reliable inquiry webhook.
7. Cloudflare Turnstile widget for `digvation.id` and `www.digvation.id`.

Search Console, Google Ads, and Meta Ads can be created now, but their final verification/conversion configuration is easiest immediately after the production domain is live.

## 2. IDs/secrets you should have before deploy

```text
GA4 measurement ID             G-XXXXXXXXXX
GTM web container ID           GTM-XXXXXXX
Clarity project ID             xxxxxxxxxx        optional
Turnstile site key             public
Turnstile secret key           secret
Resend API key                 secret
Inquiry recipient              hello@digvation.id (or chosen inbox)
Verified Resend from address   e.g. website@digvation.id
```

## 3. Cloudflare Pages environment variables

In Cloudflare Dashboard → Workers & Pages → Digvation Pages project → Settings → Variables and Secrets.

### Public / build variables

```env
PUBLIC_ANALYTICS_MODE=consent
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_CLARITY_ID=xxxxxxxxxx
PUBLIC_TURNSTILE_SITEKEY=...
PUBLIC_GOOGLE_SITE_VERIFICATION=
```

Prefer Search Console DNS verification, so the HTML verification token may stay empty.

### Function variables / secrets

```env
INQUIRY_PROVIDER=resend
INQUIRY_RECIPIENT=hello@digvation.id
INQUIRY_FROM=Digvation <website@digvation.id>
RESEND_API_KEY=...

TURNSTILE_MODE=turnstile
TURNSTILE_SECRET_KEY=...
TURNSTILE_ALLOWED_HOSTNAMES=digvation.id,www.digvation.id
```

Store API/secret values as **Secrets**, not plaintext public variables.

For preview deployments, either configure a Turnstile testing key or use a separate preview configuration. Do not add random `*.pages.dev` hostnames to the production Turnstile hostname allowlist.

## 4. Configure GA4

Create a Web data stream for `https://digvation.id` and copy the `G-...` Measurement ID into `PUBLIC_GA_ID`.

After production deploy, verify:

- initial `page_view`
- route changes through Astro client navigation
- `cta_clicked`
- `portfolio_previewed`
- `inquiry_started`
- `inquiry_submitted`
- `generate_lead`

Mark one successful-lead event as the GA4 **key event**. `generate_lead` is the standard option; keep `inquiry_submitted` for Digvation's internal funnel analysis.

## 5. Configure Google Tag Manager

Create a Web container and set `PUBLIC_GTM_ID`.

The website pushes semantic events to `dataLayer` only after visitor consent. Do **not** duplicate GA4 in GTM while `PUBLIC_GA_ID` is enabled.

Initially GTM can remain almost empty. Its purpose is to make later ad tags deployable without changing source code.

When Google Ads is enabled later:

- add Conversion Linker on all pages after consent;
- create a Google Ads conversion action for a qualified website lead;
- fire its conversion tag on one successful-lead event (`generate_lead` is recommended);
- do not create a second primary conversion by also importing the same GA4 event as primary.

When Meta Ads is enabled later:

- add Meta Pixel through GTM after optional-measurement consent;
- map normal page tracking to PageView;
- map the chosen successful-lead event to Lead;
- test with Meta Events Manager before spending budget.

## 6. Configure Clarity

Create a Clarity project and put its project ID into `PUBLIC_CLARITY_ID`.

The inquiry form uses `data-clarity-mask="true"`. Confirm masking in an actual recording before considering the setup complete.

## 7. Configure Turnstile

Cloudflare Dashboard → Turnstile → Add widget.

Recommended:

```text
Widget name: Digvation Inquiry
Hostnames: digvation.id, www.digvation.id
Mode: Managed
```

Set the public site key and secret as described above. The Pages Function validates the token using Cloudflare Siteverify; client-side widget presence alone is not considered protection.

## 8. Configure Resend

Verify a Digvation-controlled sending domain in Resend. Prefer a dedicated sender such as:

```text
website@digvation.id
```

Then set the recipient and API secret. Test both:

1. internal inquiry reaches Digvation;
2. acknowledgement reaches the submitter;
3. Reply-To points to the submitter for the internal notification.

## 9. Connect repository to Cloudflare Pages

Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.

Use:

```text
Framework preset: Astro (or custom)
Build command: npm run build
Build output directory: dist
Node: 22
```

The repository-level `functions/api/inquiry.ts` becomes `/api/inquiry` automatically through Pages Functions.

## 10. Configure custom domain

Add:

```text
digvation.id
www.digvation.id
```

Choose `https://digvation.id` as canonical. Configure a Cloudflare redirect rule so `www.digvation.id/*` redirects permanently to `https://digvation.id/$1`.

## 11. Search Console after domain is connected

Create a **Domain property** for `digvation.id` and verify it using the DNS TXT record in Cloudflare.

Then submit the sitemap generated by Astro (confirm the exact sitemap URL from the production build/site before submission).

Verify indexing for:

- `/`
- `/solutions`
- important `/solutions/[slug]`
- `/work`
- case studies
- `/process`
- `/about`

## 12. Required live QA before ads

Do not launch paid campaigns until all of these pass:

```text
[ ] HTTPS + canonical domain correct
[ ] ID / EN routing works
[ ] mobile navigation works
[ ] animations do not break route changes
[ ] reduced-motion works
[ ] Work preview modal works
[ ] external project iframe fallback works
[ ] inquiry delivers a real email/webhook
[ ] Turnstile validation works
[ ] form failure state works
[ ] GA4 receives events once (no duplicates)
[ ] inquiry_submitted only fires after successful delivery
[ ] UTM/click ID appears in a test lead payload
[ ] Clarity masks the inquiry form
[ ] privacy consent can be accepted/rejected and reopened
[ ] sitemap and robots are reachable
[ ] 404 is noindex
```

## 13. Only then prepare ads

For the first ads iteration, use the existing measurement foundation instead of changing website code:

```text
Google Ads / Meta Ads
       ↓
GTM
       ↓
existing event: inquiry_submitted
       ↓
Lead conversion
```

Campaign copy, keyword/audience research, landing-page variants, and budget should be decided after the live baseline analytics is verified.

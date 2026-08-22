# Architecture

## Rendering

Digvation is a marketing/content website, so Astro prerenders the website to static HTML. There is no Node application server in production.

```text
Visitor
  ↓
Cloudflare Pages CDN
  ↓
Static Astro HTML / CSS / JS
```

The only request-time backend path required by the public website is inquiry delivery:

```text
InquiryForm.astro
  ↓ POST /api/inquiry
Cloudflare Pages Function
  ↓ server validation / honeypot / Turnstile
Resend or configured webhook
```

This keeps the website lightweight while keeping provider secrets and form delivery server-side.

## Content boundaries

- `src/pages/` — routing/composition only.
- `src/components/` — presentation and focused browser interaction.
- `src/content/` — Work and Solution source content.
- `src/config/` — brand/company/navigation/SEO/analytics decisions.
- `src/lib/` — focused reusable modules such as schema helpers, analytics events, and inquiry validation.
- `functions/` — Cloudflare Pages request-time code. Keep it small and provider-oriented.

## Analytics boundary

Application components emit semantic events such as `inquiry_submitted`; they do not know Google Ads or Meta implementation details.

```text
UI interaction
  ↓
Digvation semantic event
  ├─ GA4 direct measurement
  ├─ Clarity event
  └─ GTM dataLayer
        ├─ Google Ads later
        └─ Meta Pixel later
```

This means ad platforms can be changed in Tag Manager without spreading vendor-specific code throughout Astro components.

# Architecture

## Runtime

Digvation is an Astro static website deployed on Cloudflare Pages. HTML, CSS, JavaScript, images, sitemap, and robots output are generated at build time. The only request-time route is the inquiry handler.

```text
Browser -> Cloudflare Pages -> static Astro output
Inquiry form -> POST /api/inquiry -> Pages Function -> Resend or webhook
```

The inquiry handler owns server validation, payload limits, honeypot handling, optional Turnstile verification, escaping, and delivery. Provider credentials remain server-side.

## Source boundaries

- `src/pages/`: route composition, metadata, and structured data.
- `src/features/`: complete page experiences.
- `src/components/`: shared presentation and small browser interactions.
- `src/content/work/`: localized project and case-study data.
- `src/content/solutions/`: localized solution-directory data.
- `src/content/campaigns/`: paid-campaign entries. Draft entries do not build routes.
- `src/config/`: brand, navigation, contact, pricing, analytics, and SEO decisions.
- `src/lib/`: typed content queries, analytics events, SEO schemas, and inquiry validation.
- `functions/`: Cloudflare Pages request-time code.

## Content architecture

Projects, solutions, and campaigns use typed Astro Content Collections. Page components never hard-code an individual client project.

Solution details open inline on `/solutions` and `/en/solutions`. Historical detail URLs are permanently redirected to the matching fragment.

Campaign routes are `/campaign/[slug]` and `/en/campaign/[slug]`. They are not included in primary navigation. Each entry controls its publication status and `noindex` value.

## Analytics boundary

Components emit semantic Digvation events. `AnalyticsManager.astro` sends them to the configured consent-aware providers.

```text
UI event -> Digvation event -> GA4 direct / GTM dataLayer / Clarity
```

Vendor-specific conversion tags belong in GTM. Do not add a second GA4 implementation in GTM while direct GA4 is enabled.

## Visual evidence

Approved project screenshots live under `public/work/<slug>/`. Project lists, homepage proof, and case studies use these local optimized assets. Live project URLs remain available as outbound actions, not as fragile iframe previews.

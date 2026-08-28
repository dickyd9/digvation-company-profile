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

The homepage reads featured projects from the Work collection. Solution details can surface a related published project through the solution relationship in Work content, so proof stays content-driven and disappears cleanly when no valid match exists.

Solution details use a selectable horizontal rail with one active inline panel on `/solutions` and `/en/solutions`. Each panel presents a wide lead, three concise decision columns, and a separate examples row. Without JavaScript, selector links still lead to the complete stacked content. Historical detail URLs are permanently redirected to the matching fragment, which selects the corresponding panel when enhanced.

Campaign routes are `/campaign/[slug]` and `/en/campaign/[slug]`. They are not included in primary navigation. Each entry controls its publication status and `noindex` value.

## Analytics boundary

Components emit semantic Digvation events. `AnalyticsManager.astro` sends them to the configured consent-aware providers.

```text
UI event -> Digvation event -> GA4 direct / GTM dataLayer / Clarity
```

Vendor-specific conversion tags belong in GTM. Do not add a second GA4 implementation in GTM while direct GA4 is enabled.

## Visual evidence

Approved project screenshots live under `public/work/<slug>/`. Project lists, homepage proof, and case studies use these local optimized assets. Live project URLs remain available as outbound actions, not as fragile iframe previews.

## Experience primitives

- `PageIntro.astro` owns the shared opening rhythm for primary index pages.
- `PageClosing.astro` owns the shared conversation handoff used by Work, Solutions, Process, About, and case studies.
- `OpeningSequence.astro` owns the brief first-session brand reveal and remains disabled for reduced motion.
- `ChapterMarker.astro` provides the low-contrast homepage chapter accent without affecting document flow or accessibility.
- `BusinessShift.astro` visualizes operational before-and-after states without pretending to be a client product.
- `OperationalScene.astro` renders the three explanatory work surfaces inside Business Shift while keeping them separate from real project evidence.
- `PartnerSection.astro` communicates the ongoing relationship without a generic agency trust-card grid.

Page features remain responsible for their own narrative composition. The shared primitives must not turn every route into an identical template.

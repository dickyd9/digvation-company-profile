# Digvation Website QA Review

## Content and evidence

- Every primary page has one clear H1 and one dominant action.
- Homepage proof and Work use optimized screenshots from live projects.
- No generic dashboard fallback, invented result, fake testimonial, fake client, or fake price is published.
- Technology appears after the business context.
- Indonesian and English content remain aligned.

## Interaction and accessibility

- Skip link, semantic landmarks, native details/summary, labels, and visible focus remain available.
- Mobile navigation supports Escape and focus restoration.
- Inline solution details allow only one open item and support deep links.
- Content remains visible without JavaScript.
- Reduced motion removes non-essential animation.
- Form loading, validation, server error, and success states remain announced.

## Contact and attribution

- Client and server validation agree.
- Repeated submission is blocked while a request is active.
- Success appears only after delivery succeeds.
- UTM, click ID, landing page, and referrer reach the inquiry payload.
- `contact_success` fires only after server confirmation.
- Inquiry fields remain masked from Clarity.

## SEO

- Canonical, ID/EN alternates, sitemap, robots, OG/Twitter, and schemas are centralized.
- Work detail pages have independent metadata and breadcrumbs.
- Solution schemas point to inline fragments.
- Historical solution routes redirect permanently.
- Campaign pages can be `noindex` and do not appear in primary navigation.

## Automated gate

```bash
npm run format:check
npm run lint
npm run check
npm run test
npm run build
```

Corrective redesign result:

- Prettier: passed.
- ESLint: passed.
- Astro diagnostics: 73 files, 0 errors, 0 warnings, 0 hints.
- Vitest: 2 files and 6 tests passed, including actual-body inquiry size enforcement.
- Production build: 21 pages generated.
- Generated output: 21 valid JSON-LD blocks, 676 internal links, 99 local asset references, and no missing targets.
- Heading order, required image alt attributes, canonical tags, descriptions, locale alternates, and 404 noindex output passed the artifact audit.
- Sitemap: 20 indexable URLs.
- Source maps: none.
- Largest emitted JavaScript file: 16,075 bytes.
- Largest emitted CSS file: 39,567 bytes.

The local preview responded correctly through a local HTTP check. The isolated visual browser could not reach loopback and returned `ERR_BLOCKED_BY_CLIENT`, so final rendered viewport and console verification remains an explicit Cloudflare preview gate rather than a claimed local pass.

## Authorized production gate

- Test inquiry delivery and acknowledgement.
- Verify Turnstile hostname enforcement.
- Confirm CSP and security headers from the public response.
- Confirm analytics events do not duplicate.
- Verify mobile, tablet, desktop, keyboard, and reduced-motion behavior.
- Confirm sitemap, robots, redirects, 404, canonical domain, and hreflang.

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

## Authorized production gate

- Test inquiry delivery and acknowledgement.
- Verify Turnstile hostname enforcement.
- Confirm CSP and security headers from the public response.
- Confirm analytics events do not duplicate.
- Verify mobile, tablet, desktop, keyboard, and reduced-motion behavior.
- Confirm sitemap, robots, redirects, 404, canonical domain, and hreflang.

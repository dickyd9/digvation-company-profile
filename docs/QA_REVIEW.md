# Digvation website QA review

This checklist covers the current Astro implementation after the commercial copy and UI alignment pass.

## Content and visual consistency

- Every primary page has one clear `h1`, one main conversion action, and concise supporting copy.
- About, Solutions, Work, and Process use the shared `PageHero` system.
- Home, Contact, solution detail, and work detail keep purpose-built layouts while using the same type, spacing, colour, button, and motion tokens.
- Handwritten notes are supporting cues, not decoration that blocks content.
- The home hero uses a clearly labelled representative business-operations interface, not invented client proof.
- Poseidon Filter and Leaf Lab remain the only project proof; no fabricated client, testimonial, or performance metric is used.
- The process board explains five stages and separates the client's responsibility from Digvation's responsibility.

## Interaction and accessibility

- Reveal motion leaves content visible when JavaScript is unavailable and is disabled for `prefers-reduced-motion`.
- Hand-drawn arrows animate only when visible and respect reduced motion.
- FAQ remains usable as native `<details>` without custom animation.
- Mobile navigation supports Escape, focus restoration, and Astro route changes.
- Project preview returns focus to its opener and retains a direct link when embedding is blocked.
- Focus states, skip link, language switch, and semantic headings remain available.

## Contact and attribution

- Required fields are server validated through the Cloudflare Pages Function.
- Form success is shown only after delivery succeeds.
- Turnstile can be enabled in production and is verified server-side.
- UTM parameters, click ID, landing page, and referrer are carried into the lead payload.
- `inquiry_submitted` and `generate_lead` fire only after successful delivery.
- Inquiry fields are masked from Clarity.

## SEO and indexing

- Canonical, ID/EN alternates, sitemap, robots, Open Graph, and structured data are centralized.
- Each built HTML page has one title, description, canonical, and `h1`.
- The 404 page is `noindex`.
- Project and solution detail pages have their own metadata and structured data.

## Automated checks

```bash
npm run lint
npm run check
npm run test
npm run build
```

## Production checks before ads

- Verify the real enquiry delivery path and acknowledgement email.
- Confirm Turnstile on the production hostname.
- Confirm GA4/GTM events are not duplicated.
- Submit one test campaign lead and check UTM/click ID in the received payload.
- Verify Search Console ownership and submit the sitemap.
- Check mobile navigation, process board, notes, project preview, and form at 390px, tablet, and desktop widths.
- Check keyboard-only and reduced-motion modes.

An external client website may block iframe embedding through CSP or `X-Frame-Options`. Keep the original-site link and a local preview fallback available.

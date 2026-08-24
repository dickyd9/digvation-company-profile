# Content Management

## Work and case studies

Localized files live in `src/content/work/`. Use the same `routeSlug` for the Indonesian and English versions.

Important control fields:

```yaml
status: published # published or hidden
featured: true
draft: false
order: 1
```

- Add: create the two localized Markdown files and approved image assets.
- Edit: update the relevant Markdown fields.
- Hide: set `status: hidden`.
- Reorder: change `order`.
- Feature or unfeature: change `featured`.
- Remove: delete both localized files only after confirming no internal links depend on the slug.

A case study supports business context, problem, previous condition, requirement, approach, solution, capabilities, delivered features, integrations, technologies, qualitative or quantitative results, outcome, cover, gallery, browser/mobile screens, video, before/after images, testimonial, project URL, and SEO. Optional evidence must remain absent when it is not available. Never invent metrics or testimonials.

Use optimized local screenshots under:

```text
public/work/<routeSlug>/
```

## Solutions

Localized solution files live in `src/content/solutions/`. They feed one directory page per language. Details open inline and support deep links such as `/solutions#digital-build`.

Keep the closed-state title and summary brief. Put qualification, approach, outputs, and examples inside the expanded detail.

## Campaigns

Copy `src/content/campaigns/_template-id.md`, rename it, and complete every placeholder. Add the English pair only when required.

Publication rules:

```yaml
status: draft
noindex: true
```

Change `status` to `published` only when the audience, offer, proof, CTA, tracking name, and SEO copy are approved. Keep `noindex: true` for paid or duplicated campaign pages. A published entry automatically builds `/campaign/<routeSlug>` or `/en/campaign/<routeSlug>`.

Campaign pages may reference a real project with `proofProject`. Do not fabricate an offer, price, result, client, or testimonial.

## Pricing

Pricing is configured in `src/config/pricing.ts`. It is deliberately disabled until Digvation supplies approved values.

To activate it:

1. Add approved `items` with actual starting values.
2. Review Indonesian and English notes.
3. Set `enabled: true`.
4. Verify `pricing_view` and `pricing_cta_click`.

The public disclaimer must continue to explain that final investment follows scope, complexity, integrations, and business requirements.

## Contact and WhatsApp

The WhatsApp number is configured once through `PUBLIC_WHATSAPP_NUMBER`. Starter messages live in `src/config/contact.ts`. WhatsApp actions stay hidden when the number is empty.

## Client logos and FAQ

- Approved client relationships: `src/content/clients.ts`.
- Homepage FAQ and FAQ schema: `src/content/faq.ts`.

Client logos are relationship proof, not a duplicate portfolio. Add only approved clients and official logo assets.

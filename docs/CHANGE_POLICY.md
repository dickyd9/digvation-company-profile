# Change policy

This policy keeps Digvation's website commercially focused, visually consistent, and maintainable as it evolves. It applies to contributors, reviewers, and coding agents.

## Source-of-truth hierarchy

Use the most specific document for a decision. If two documents conflict, stop and resolve the conflict in the pull request instead of silently choosing one.

| Area                                         | Source of truth            |
| -------------------------------------------- | -------------------------- |
| Positioning, audience, voice, copy           | `CONTENT_STRATEGY.md`      |
| Homepage section order and purpose           | `HOMEPAGE_SECTIONS.md`     |
| Visual language and interaction              | `EXPERIENCE_STRATEGY.md`   |
| Routes, components, and technical boundaries | `ARCHITECTURE.md`          |
| Content schemas and publishing               | `CONTENT_MANAGEMENT.md`    |
| Conversion, SEO, ads, and launch readiness   | `COMMERCIAL_READINESS.md`  |
| Events and measurement                       | `MEASUREMENT.md`           |
| Deployment and environment configuration     | `PRE_DEPLOY_CLOUDFLARE.md` |
| Current QA status and limitations            | `QA_REVIEW.md`             |

Repository-wide instructions live in `../AGENTS.md`.

## Change classes

Identify the class before implementation. A change may belong to more than one class.

- **Content:** copy, labels, proof, FAQs, solution data, or project data.
- **Experience:** layout, typography, component styling, interaction, or animation.
- **Discovery:** route, metadata, canonical URL, language alternate, structured data, sitemap, or internal link.
- **Conversion:** CTA, form, attribution, consent, analytics, or ad landing behavior.
- **Platform:** dependency, build configuration, environment variable, server function, security control, or deployment behavior.

## Before implementation

1. State the business intent and the observable acceptance criteria.
2. Read the relevant source-of-truth documents from the table above.
3. Search for every usage before renaming, replacing, or deleting a route, event, component, token, or file.
4. Identify the affected Indonesian and English experiences.
5. Prefer the smallest coherent change. Keep unrelated cleanup in a separate pull request.

## Implementation requirements

### Content changes

- Use short, concrete language that sounds written by a person.
- Explain the operational problem and improvement before naming the technology.
- Do not use em dashes in public-facing copy. Rewrite the sentence with natural punctuation.
- Keep claims verifiable. Mark placeholders clearly and never present them as proof.
- Preserve intent between Indonesian and English; do not rely on literal translation when it weakens clarity.

### Experience changes

- Reuse existing tokens and components before adding new ones.
- Verify mobile, desktop, keyboard, focus, contrast, and reduced-motion behavior.
- Animation must explain state, sequence, hierarchy, or progress. It must not delay access to content or calls to action.
- Visual cues must support hierarchy or state and remain understandable without animation.

### Route and SEO changes

- Provide one descriptive H1, title, meta description, canonical URL, and language alternates where applicable.
- Update internal navigation only when the route belongs in the primary journey.
- Add appropriate structured data and confirm the sitemap behavior.
- Avoid duplicate intent across pages. Each indexable page needs a distinct commercial purpose.

### Conversion and measurement changes

- Keep one visually dominant primary CTA per decision point.
- Preserve campaign attribution from landing through successful inquiry delivery.
- Register new analytics events in `MEASUREMENT.md`; do not emit the same outcome from multiple handlers.
- Fire success events only after confirmed delivery, not on button click or attempted submission.
- Forms require client and server validation, privacy context, spam resistance, accessible errors, and a recoverable failure state.

### Platform changes

- Explain why an existing dependency or platform capability is insufficient before adding a production dependency.
- Document new environment variables in the example environment file and deployment guide.
- Keep secrets server-side and preserve existing security headers and inquiry safeguards.

## Definition of done

- `npm run format:check` passes.
- `npm run qa` passes.
- Affected Indonesian and English journeys have been checked.
- Responsive, keyboard, focus, and reduced-motion behavior have been checked for UI changes.
- Metadata, canonicals, language alternates, links, events, and form delivery have been checked when affected.
- Obsolete files are removed only after a reference search confirms they are unused.
- Relevant documentation is updated when the standard, contract, or behavior changed.
- The pull request template is completed with evidence and any known limitation.

## Exceptions and decisions

If a requirement cannot be met, explain the constraint, user impact, and follow-up in the pull request. Material changes to positioning, architecture, measurement, or deployment must update the corresponding source-of-truth document in the same pull request.

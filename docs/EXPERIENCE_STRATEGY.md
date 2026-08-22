# Digvation Experience Strategy: Current Direction

## Core UX goal

A prospective client should understand these ideas quickly:

1. Digvation is a **digital transformation partner**, not only a software vendor.
2. Digvation can help a business move from manual, repetitive, or disconnected ways of working toward better digital operations.
3. The conversation can start from a business process or problem; the client does not need technical requirements first.
4. Digvation helps decide what should be digitalized, designs the solution, builds and connects it, and can keep improving it after launch.
5. Different business problems may require different forms of technology: web, internal systems, automation, integration, data/AI, IoT, discovery, or a combination.
6. Real work and approved client evidence provide proof.

## Homepage priority

```text
Partner positioning
→ Recognize manual/disconnected work
→ See what can be digitalized
→ Understand why Digvation works as a partner
→ See how the work is delivered
→ See solution possibilities
→ See real work
→ Understand post-launch partnership
→ FAQ
→ Conversation
```

The homepage should feel commercially clear before it feels technically impressive.

## Visual direction

The design should be simple, mature, and confident.

Use:

- strong display typography,
- generous whitespace,
- clear grid and separators,
- restrained dark/light contrast,
- real project visuals,
- purposeful motion,
- limited brand accent colour.

Avoid:

- excessive cards and nested containers,
- decorative pills everywhere,
- many unrelated pastel blocks,
- generic SaaS dashboard aesthetics without a concrete business story,
- technology jargon before business context,
- fake metrics, fake testimonials, or fake proof.

## Signature Digvation components

1. **Digitalization-partner hero:** immediately communicates that the business becomes easier to run, monitor, and grow. A restrained word rotation adds rhythm while one concrete operational-flow illustration makes the promise tangible.
2. **What Can Be Digitalized?:** concrete day-to-day examples such as orders, approvals, and reporting.
3. **Why Partner With Digvation:** context, clear decisions, and continuity after launch.
4. **Working With Digvation:** understand the context → set the priority → design the solution → build and launch → monitor and improve. Present this as one connected journey with visible ownership, not a collection of decorative cards.
5. **Solution possibilities:** technology appears after the business need is understood.
6. **Selected Work:** real project proof with case-study/live-preview options. Published websites use a composed browser-stage presentation rather than raw iframe chrome.

## Typography

- Display: Manrope.
- Body/UI: Inter.
- Hero type is confident but no longer intentionally oversized; the business message and operational visual share the first viewport.
- Section headings should create hierarchy without making every section compete for attention.
- Body copy should remain easy to scan and use plain business language.

## Navigation

Primary navigation:

- Beranda / Home
- Solusi / Solutions
- Hasil Kerja / Work
- Cara Kerja / How We Work
- Tentang / About
- direct conversation CTA

The CTA should invite a business conversation, not imply that the visitor already knows what product or project they need.

## Process page

The Process page should reinforce the partnership model:

- the client brings business context and decisions,
- Digvation translates that context into digital scope and implementation,
- responsibilities are explicit,
- technical detail remains owned by Digvation,
- project duration follows scope and uncertainty,
- launch can continue into operation and improvement when needed.

## Motion direction

- Motion supports hierarchy and transformation; it does not run only for decoration.
- The hero may rotate a short outcome word only when the complete sentence remains available to assistive technology and the first phrase remains visible without JavaScript.
- The homepage opens directly on the commercial positioning; there is no blocking first-visit splash intro.
- Below-the-fold motion remains progressive and restrained.
- Continuous floating animation is not part of the core visual language.
- Astro route transitions remain subtle.
- `prefers-reduced-motion` removes non-essential motion.

## Horizontal content

- Use horizontal sliders only for long sequences that would otherwise create excessive page depth.
- Keep part of the next item visible so the interaction is discoverable before JavaScript runs.
- Always provide a current/total counter and accessible previous/next controls.
- Preserve native touch scrolling and scroll snapping.
- On desktop, keep enough of the next card visible to signal continuation without hiding the current card's content.

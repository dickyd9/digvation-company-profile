# Digvation Experience Strategy

## Positioning

Digvation is **Your Digitalization Partner**. The website must create this mental model:

> I have a business problem or need. Digvation can help understand it, shape the right digital decision, build the solution, connect what is needed, and improve it after launch.

Digvation is not positioned as a generic web agency, software outsourcing vendor, SaaS company, or AI automation shop.

## Visitor journey

1. **Clarity**: understand the proposition within the first screen.
2. **Curiosity**: see a memorable real product immediately after it.
3. **Proof**: understand the client context and what was built.
4. **Trust**: see a clear delivery model and honest evidence.
5. **Action**: start a low-friction conversation.

## Editorial direction

- Keep Indonesian as the primary language and English as a complete alternate.
- Write short, natural sentences without corporate filler.
- Vary section composition instead of repeating heading, description, and cards.
- Use real project screens as the main visual language.
- Let case studies carry depth; keep the homepage selective.
- Make mobile layouts intentional rather than stacked desktop leftovers.

## Typography and spacing

- Use one neutral variable grotesk family, Inter, across display and text roles.
- Create hierarchy through weight, width, line breaks, and whitespace before increasing size.
- Reserve the largest type for a small number of hero and case-study moments.
- Keep supporting copy narrow and normally limited to one or two short sentences.
- Avoid pills, bordered containers, and card grids unless the container communicates a real interaction or product frame.
- Allow large vertical gaps between ideas. Empty space is part of the narrative.

## Cross-page rhythm

- Primary index pages share one calm opening grammar: a thin context rail, one dominant headline, one short supporting paragraph, and enough height for the idea to land.
- Work, Solutions, Process, About, and Contact keep different content compositions. Consistency comes from scale, spacing, borders, type, and motion, not from repeating the same cards.
- Work, Solutions, Process, About, and case studies share one deliberate closing grammar when the next useful action is a conversation.
- Contact remains the conversion destination. It uses a separate form chapter and a short expectation-setting chapter instead of compressing the full page into one split layout.
- Solutions uses a horizontally scrollable need selector and one active detail panel. Selection changes animate height and direction without blocking content, while native links, keyboard navigation, deep links, and reduced motion remain supported.
- A first-session brand opening may run for about one second. It must never repeat during the same session, block reduced-motion users, or delay access for more than the stated opening.

## Navigation

- Beranda / Home
- Solusi / Solutions
- Hasil Kerja / Work
- Cara Kerja / How We Work
- Tentang / About
- Kontak / Contact

Campaign pages, Privacy, and Terms stay outside primary navigation.

The language control is visually separate from primary navigation. It uses a compact segmented
control with a clear active language, while the mobile version includes an explicit site-language
label. Language options must not look like additional page links.

## Inquiry affordance

The inquiry chapter is allowed to use a bounded panel and clearly outlined fields because the
surface communicates a real interaction. Labels remain visible, required fields are explained,
and representative placeholders help visitors understand what to enter. Email/form delivery and
WhatsApp are presented as distinct routes rather than visually ambiguous links.

## Motion

Motion has three levels:

1. **Micro**: link, button, navigation, input, and summary feedback.
2. **Section**: mask reveals, directional entrances, line wipes, and project-image expansion.
3. **Hero**: the staged opening and a small number of high-impact visual moments.

Route transitions use a brief masked reveal. Project scenes may use CSS scroll timelines where supported, with a stable non-animated fallback. Avoid continuous floating objects, blanket AOS-style movement, and effects without narrative value. All content remains usable without JavaScript and with `prefers-reduced-motion`.

Grouped section content may use short staggered delays. The delay is capped so related information never feels artificially slow or arrives all at once.

Reveal motion is progressive enhancement. Content is visible by default, only off-screen elements are enrolled in motion, scroll and resize provide an observer fallback, and every pending element is released automatically. A failed or delayed motion script must never leave an empty section.

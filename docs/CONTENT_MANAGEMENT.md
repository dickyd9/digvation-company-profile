# Content Management

The marketing site is intentionally content-driven without requiring a CMS for V1.

## Work / Hasil Kerja

Files live in:

```text
src/content/work/
```

Two modes are supported.

### Link-only / external project

Use `entryType: external` when the project only needs a live link and preview. Copy:

```text
docs/templates/work-external.md.example
```

Important fields:

```yaml
entryType: external
routeSlug: client-name
locale: id
title: Client Name
client: Client Name
industry: Retail
year: 2026
projectType: Website
summary: ...
featured: true
draft: false
order: 3
liveUrl: https://client.example/
showLiveInCard: false
preview:
  mode: live
  embedUrl: https://client.example/
```

No client source code is stored in this repository.

### Case study

Use `entryType: case-study` for selected projects that deserve a real `/work/[slug]` story. Copy:

```text
docs/templates/work-case-study.md.example
```

Add/edit the Markdown file only. Listing, route, SEO metadata, homepage featured work, and preview behavior are generated from content.

### Preview priority

A project may use:

1. `coverImage` / image preview — preferred for predictable visual quality.
2. live iframe preview — only when the client site allows framing.
3. Digvation-generated fallback — when no project asset is available.

External image/CDN URLs are supported to keep the repository small.

## Solutions

Solution content lives in:

```text
src/content/solutions/
```

Each localized file automatically feeds `/solutions` and `/solutions/[slug]`. Update frontmatter/body content; do not duplicate route components.

Homepage solution summaries are intentionally sales-oriented entries in `src/content/home.ts` and link into the deeper solution routes. The homepage presentation is editorial rather than card-driven.

## Homepage client logos

The homepage client wall is managed in:

```text
src/content/clients.ts
```

Add only approved, verifiable clients and use their official public logo asset. This section is relationship proof, not a second portfolio: it displays logos only and links each logo to the client's public website. Project summaries and case studies remain in `src/content/work/`. If the client array is empty, the logo wall does not render.

## FAQ

Edit:

```text
src/content/faq.ts
```

The FAQ UI and FAQPage JSON-LD use this same content.

## Why a build is still required

The public marketing pages are static-first. Content changes become live on the next build/deploy. If non-technical publishing without Git becomes important later, the Content Collection loader can be replaced by a CMS without rewriting the presentation layer.

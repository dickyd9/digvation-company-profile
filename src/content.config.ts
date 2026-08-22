import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workPreview = z.object({
  mode: z.enum(['live', 'image', 'default']).optional(),
  embedUrl: z.url().optional(),
  image: z.string().optional(),
});

const workBase = z.object({
  routeSlug: z.string(),
  locale: z.enum(['id', 'en']),
  title: z.string(),
  client: z.string(),
  industry: z.string(),
  year: z.number(),
  projectType: z.string(),
  summary: z.string(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  order: z.number().default(0),
  visualVariant: z.enum(['ink', 'navy', 'paper']).default('navy'),
  coverImage: z.string().optional(),
  showLiveInCard: z.boolean().default(false),
  preview: workPreview.optional(),
});

const workCaseStudy = workBase.extend({
  entryType: z.literal('case-study'),
  challenge: z.string(),
  context: z.string(),
  insight: z.string(),
  approach: z.string(),
  solution: z.string(),
  built: z.array(z.string()),
  technologies: z.array(z.string()),
  outcome: z.string(),
  nextStep: z.string(),
  relatedSolution: z.string().optional(),
  liveUrl: z.url().optional(),
  gallery: z.array(z.string()).optional(),
  seo: z.object({ title: z.string(), description: z.string(), ogImage: z.string().optional() }),
});

const workExternal = workBase.extend({
  entryType: z.literal('external'),
  liveUrl: z.url(),
  externalLabel: z.string().optional(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.discriminatedUnion('entryType', [workCaseStudy, workExternal]),
});

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
  schema: z.object({
    routeSlug: z.string(),
    locale: z.enum(['id', 'en']),
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    problem: z.string(),
    when: z.array(z.string()),
    whatWeDo: z.array(z.string()),
    outputs: z.array(z.string()),
    examples: z.array(z.string()),
    start: z.string(),
    order: z.number(),
    seo: z.object({ title: z.string(), description: z.string() }),
  }),
});

export const collections = { work, solutions };

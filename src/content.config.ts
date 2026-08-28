import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workBase = z.object({
  routeSlug: z.string(),
  locale: z.enum(['id', 'en']),
  title: z.string(),
  client: z.string(),
  industry: z.string(),
  year: z.number(),
  projectType: z.string(),
  summary: z.string(),
  status: z.enum(['published', 'hidden']).default('published'),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  order: z.number().default(0),
  visualVariant: z.enum(['ink', 'navy', 'paper']).default('navy'),
  coverImage: z.string().optional(),
});

const workCaseStudy = workBase.extend({
  entryType: z.literal('case-study'),
  challenge: z.string(),
  context: z.string(),
  insight: z.string(),
  approach: z.string(),
  solution: z.string(),
  previousCondition: z.string().optional(),
  businessRequirement: z.string().optional(),
  capabilities: z.array(z.string()).optional(),
  built: z.array(z.string()),
  deliveredFeatures: z.array(z.string()).optional(),
  integrations: z.array(z.string()).optional(),
  technologies: z.array(z.string()),
  results: z.array(z.string()).optional(),
  outcome: z.string(),
  nextStep: z.string(),
  relatedSolution: z.string().optional(),
  liveUrl: z.url().optional(),
  gallery: z.array(z.string()).optional(),
  browserScreenshots: z.array(z.string()).optional(),
  mobileScreenshots: z.array(z.string()).optional(),
  beforeImages: z.array(z.string()).optional(),
  afterImages: z.array(z.string()).optional(),
  videoUrl: z.url().optional(),
  testimonial: z
    .object({ quote: z.string(), name: z.string(), role: z.string().optional() })
    .optional(),
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

const campaigns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/campaigns' }),
  schema: z.object({
    routeSlug: z.string(),
    locale: z.enum(['id', 'en']),
    status: z.enum(['draft', 'published']).default('draft'),
    audience: z.string(),
    source: z.string(),
    eyebrow: z.string(),
    headline: z.string(),
    description: z.string(),
    problem: z.array(z.string()),
    solution: z.array(z.string()),
    proofProject: z.string().optional(),
    visual: z.string().optional(),
    pricingAnchor: z.string().optional(),
    primaryCta: z.string(),
    secondaryCta: z.string().optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    noindex: z.boolean().default(true),
    tracking: z.object({ campaignName: z.string(), conversionLabel: z.string().optional() }),
    seo: z.object({ title: z.string(), description: z.string(), ogImage: z.string().optional() }),
  }),
});

export const collections = { work, solutions, campaigns };

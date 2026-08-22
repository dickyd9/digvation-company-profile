import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/config/site';

type WorkEntry = CollectionEntry<'work'>;
export type CaseStudyWorkEntry = WorkEntry & {
  data: Extract<WorkEntry['data'], { entryType: 'case-study' }>;
};

function isCaseStudyWorkEntry(entry: WorkEntry): entry is CaseStudyWorkEntry {
  return entry.data.entryType === 'case-study';
}

export async function getWorkEntries(locale: Locale) {
  return (await getCollection('work'))
    .filter((entry) => entry.data.locale === locale && (!import.meta.env.PROD || !entry.data.draft))
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getCaseStudyWorkEntries(locale: Locale) {
  return (await getWorkEntries(locale)).filter(isCaseStudyWorkEntry);
}

export async function getFeaturedWorkEntries(locale: Locale, limit = 2) {
  return (await getWorkEntries(locale)).filter((entry) => entry.data.featured).slice(0, limit);
}

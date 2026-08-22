import type { CollectionEntry } from 'astro:content';

type WorkData = CollectionEntry<'work'>['data'];

export type WorkPreviewMode = 'live' | 'image' | 'default';

export type ResolvedWorkPreview = {
  mode: WorkPreviewMode;
  liveUrl?: string | undefined;
  embedUrl?: string | undefined;
  image?: string | undefined;
};

/**
 * Resolves a predictable project preview without coupling UI components to the
 * content source. A content entry can explicitly override the mode when a
 * client site blocks iframe embedding.
 */
export function resolveWorkPreview(data: WorkData): ResolvedWorkPreview {
  const liveUrl = 'liveUrl' in data ? data.liveUrl : undefined;
  const image = data.preview?.image ?? data.coverImage;
  const explicitMode = data.preview?.mode;

  const mode: WorkPreviewMode = explicitMode ?? (liveUrl ? 'live' : image ? 'image' : 'default');

  return {
    mode,
    liveUrl,
    embedUrl: data.preview?.embedUrl ?? liveUrl,
    image,
  };
}

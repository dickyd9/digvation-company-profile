import { brandConfig } from './brand';
import { siteConfig, type Locale } from './site';

export const seoConfig = {
  defaultTitle: 'Digvation | Your Digitalization Partner',
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: siteConfig.description,
  ogImage: brandConfig.assets.defaultOgImage,
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
} as const;

export function resolvePageTitle(title?: string) {
  if (!title) return seoConfig.defaultTitle;
  if (title.toLocaleLowerCase().includes(siteConfig.name.toLocaleLowerCase())) return title;
  return seoConfig.titleTemplate.replace('%s', title);
}

export function localeToOpenGraph(locale: Locale) {
  return locale === 'id' ? 'id_ID' : 'en_US';
}

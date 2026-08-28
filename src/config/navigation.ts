import type { Locale } from './site';

export type NavigationItem = { label: string; href: string };

export function getLocalizedPath(locale: Locale, path: string): string {
  if (locale === 'id') return path;
  if (path === '/') return '/en';
  return `/en${path}`;
}

export function getNavigation(locale: Locale): NavigationItem[] {
  const items: Array<[string, string]> =
    locale === 'id'
      ? [
          ['Beranda', '/'],
          ['Solusi', '/solutions'],
          ['Hasil Kerja', '/work'],
          ['Cara Kerja', '/process'],
          ['Tentang', '/about'],
          ['Kontak', '/contact'],
        ]
      : [
          ['Home', '/'],
          ['Solutions', '/solutions'],
          ['Work', '/work'],
          ['How We Work', '/process'],
          ['About', '/about'],
          ['Contact', '/contact'],
        ];

  return items.map(([label, path]) => ({ label, href: getLocalizedPath(locale, path) }));
}

import { businessConfig } from '@/config/business';
import { brandConfig } from '@/config/brand';
import { siteConfig } from '@/config/site';
import { socialProfiles } from '@/config/social';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: businessConfig.email,
    logo: new URL(brandConfig.assets.lockupIndigo, siteConfig.url).toString(),
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
  };
}
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ['id-ID', 'en-US'],
  };
}
export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
export function serviceSchema(input: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    url: new URL(input.path, siteConfig.url).toString(),
  };
}
export function creativeWorkSchema(input: {
  name: string;
  description: string;
  path: string;
  dateCreated?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: input.name,
    description: input.description,
    creator: { '@type': 'Organization', name: siteConfig.name },
    url: new URL(input.path, siteConfig.url).toString(),
    ...(input.dateCreated ? { dateCreated: String(input.dateCreated) } : {}),
  };
}
export function localBusinessSchema() {
  if (!businessConfig.address || !businessConfig.city || !businessConfig.phone) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: businessConfig.businessName,
    url: siteConfig.url,
    email: businessConfig.email,
    telephone: businessConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address,
      addressLocality: businessConfig.city,
      addressRegion: businessConfig.province,
      postalCode: businessConfig.postalCode,
      addressCountry: businessConfig.country,
    },
    ...(businessConfig.coordinates
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: businessConfig.coordinates.latitude,
            longitude: businessConfig.coordinates.longitude,
          },
        }
      : {}),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

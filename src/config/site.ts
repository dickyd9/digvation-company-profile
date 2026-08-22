import { brandConfig } from './brand';
import { businessConfig } from './business';
import { socialProfiles } from './social';

export const siteConfig = {
  name: brandConfig.name,
  legalName: businessConfig.legalName || brandConfig.name,
  category: 'Digitalization Partner',
  tagline: brandConfig.tagline,
  supportingLine: brandConfig.supportingLine,
  description:
    'Digvation membantu bisnis membangun website, sistem, automation, integration, AI, dan IoT dari masalah nyata sampai siap digunakan.',
  url: import.meta.env.SITE ?? 'https://digvation.id',
  locale: { default: 'id', supported: ['id', 'en'] as const },
  contact: { email: businessConfig.email, phone: businessConfig.phone },
  socialProfiles,
} as const;

export type Locale = (typeof siteConfig.locale.supported)[number];

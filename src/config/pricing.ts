import type { Locale } from './site';

export type PricingItem = {
  id: string;
  label: Record<Locale, string>;
  startingFrom: string;
  note: Record<Locale, string>;
};

export const pricingConfig: {
  enabled: boolean;
  eyebrow: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  disclaimer: Record<Locale, string>;
  items: PricingItem[];
} = {
  enabled: false,
  eyebrow: { id: 'Investasi project', en: 'Project investment' },
  title: {
    id: 'Titik awal yang jelas, tetap fleksibel mengikuti kebutuhan.',
    en: 'A clear starting point that remains flexible to the need.',
  },
  description: {
    id: 'Aktifkan bagian ini setelah nilai komersial Digvation ditetapkan.',
    en: 'Enable this section once Digvation has approved its commercial anchors.',
  },
  disclaimer: {
    id: 'Nilai akhir mengikuti batas kebutuhan, kompleksitas, integrasi, dan kondisi bisnis.',
    en: 'Final investment depends on the need, complexity, integrations, and business conditions.',
  },
  items: [],
};

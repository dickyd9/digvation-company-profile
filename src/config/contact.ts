import { PUBLIC_WHATSAPP_NUMBER } from 'astro:env/client';
import type { Locale } from './site';

const starterMessage: Record<Locale, string> = {
  id: 'Halo Digvation, saya ingin berdiskusi mengenai kebutuhan digital untuk bisnis saya.',
  en: 'Hello Digvation, I would like to discuss a digital need for my business.',
};

export const contactConfig = {
  whatsappNumber: (PUBLIC_WHATSAPP_NUMBER ?? '').replace(/[^0-9]/g, ''),
  starterMessage,
} as const;

export function getWhatsAppUrl(locale: Locale) {
  if (!contactConfig.whatsappNumber) return null;
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(starterMessage[locale])}`;
}

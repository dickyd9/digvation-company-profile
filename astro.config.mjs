import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://digvation.id',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (page) => !page.includes('/campaign/') })],
  vite: { plugins: [tailwindcss()] },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: { prefixDefaultLocale: false },
  },
  env: {
    schema: {
      PUBLIC_TURNSTILE_SITEKEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_ANALYTICS_MODE: envField.enum({
        context: 'client',
        access: 'public',
        values: ['off', 'consent', 'always'],
        default: 'consent',
      }),
      PUBLIC_GA_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_GTM_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_CLARITY_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_WHATSAPP_NUMBER: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
});

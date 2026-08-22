import {
  PUBLIC_ANALYTICS_MODE,
  PUBLIC_CLARITY_ID,
  PUBLIC_GA_ID,
  PUBLIC_GTM_ID,
} from 'astro:env/client';

export const analyticsConfig = {
  mode: PUBLIC_ANALYTICS_MODE,
  googleAnalyticsId: PUBLIC_GA_ID ?? '',
  googleTagManagerId: PUBLIC_GTM_ID ?? '',
  clarityProjectId: PUBLIC_CLARITY_ID ?? '',
  enabled:
    PUBLIC_ANALYTICS_MODE !== 'off' && Boolean(PUBLIC_GA_ID || PUBLIC_GTM_ID || PUBLIC_CLARITY_ID),
} as const;

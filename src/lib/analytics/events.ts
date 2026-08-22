export const analyticsEvents = [
  'page_view',
  'section_viewed',
  'cta_clicked',
  'portfolio_opened',
  'portfolio_previewed',
  'portfolio_completed',
  'service_viewed',
  'inquiry_started',
  'inquiry_submitted',
  'generate_lead',
  'email_clicked',
  'language_switched',
  'scroll_depth_50',
  'scroll_depth_90',
  'outbound_clicked',
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];

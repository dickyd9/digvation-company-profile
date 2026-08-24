export const analyticsEvents = [
  'page_view',
  'section_view',
  'project_view',
  'case_study_view',
  'service_view',
  'cta_click',
  'contact_start',
  'contact_submit',
  'contact_success',
  'whatsapp_click',
  'email_click',
  'pricing_view',
  'pricing_cta_click',
  'language_change',
  'outbound_project_click',
  'scroll_depth_50',
  'scroll_depth_90',
  'outbound_click',
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];

import type { AnalyticsEvent } from './events';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function track(event: AnalyticsEvent, data: Record<string, unknown> = {}) {
  window.dispatchEvent(
    new CustomEvent('digvation:analytics', {
      detail: {
        event,
        ...data,
        page_path: window.location.pathname,
        page_location: window.location.href,
      },
    }),
  );
}

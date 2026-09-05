/**
 * GA4 イベント送信ヘルパー
 * タグ未読込時は何もしない（本番以外でも安全）
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

/** スクール公式LINE / 会社公式LINE を区別する */
export type LineDestination = "school" | "company";

export function trackLineCtaClick(options: {
  destination: LineDestination;
  location: string;
  label: string;
  url: string;
}) {
  trackEvent("line_cta_click", {
    line_destination: options.destination,
    cta_location: options.location,
    button_label: options.label,
    link_url: options.url,
  });
}

export function trackWorkWhileLearningClick(location: string) {
  trackEvent("work_while_learning_click", {
    cta_location: location,
  });
}

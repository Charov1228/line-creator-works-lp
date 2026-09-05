"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

/**
 * Line Creator Works 専用 GA4 測定ID
 * 環境変数があれば優先（ローカル／デプロイ先での上書き用）
 */
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-R7XC0DE77T";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function pageview(url: string) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** 初回は gtag config の自動 page_view、以降のSPA遷移だけ手動送信 */
function AnalyticsPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

/**
 * GA4 計測タグ（採用LP・不動産買取LPとは別プロパティ）
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsPageViews />
      </Suspense>
    </>
  );
}

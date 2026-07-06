import { siteConfig } from "@/data/site-config";

/**
 * 構造化データ（JSON-LD）
 * 検索エンジン向けのコース情報
 */
export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: siteConfig.name,
    description: siteConfig.seo.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.brand,
    },
    offers: {
      "@type": "Offer",
      category: "動画編集スクール",
      price: "0",
      priceCurrency: "JPY",
      description: "公式LINE登録後、無料個別面談をご案内",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "P2M",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

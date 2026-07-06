/**
 * サイト全体の設定値
 * 公開前にここを更新するだけで差し替え可能
 */
export const siteConfig = {
  /** スクール名 */
  name: "Line Creator Works",
  /** 運営ブランド名 */
  brand: "けーさんとたろー",
  /** 公式LINE登録URL（公開時に差し替え） */
  lineUrl: "https://lin.ee/placeholder",
  /** OGP・SEO用 */
  seo: {
    title:
      "Line Creator Works | けーさんとたろー公式 動画編集スクール",
    description:
      "けーさんとたろーが運営する動画編集スクール。現役編集者が教え、卒業後も案件紹介制度でキャリアをサポート。完全オンライン・約2ヶ月集中プログラム。まずは公式LINEに登録。",
    ogImage: "/og-image.jpg",
    url: "https://line-creator-works.example.com",
  },
} as const;

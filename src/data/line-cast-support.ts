/**
 * LINE CAST SUPPORT ページ用コンテンツ
 * 株式会社LINE CAST SUPPORT 事業概要
 */

export const lineCastSupport = {
  companyName: "株式会社LINE CAST SUPPORT",
  name: "LINE CAST SUPPORT",
  tagline: "人材・クリエイティブ・集客・営業まで、成長をトータルで支援",
  description:
    "人材採用・派遣、動画編集スクール運営、SNS運用コンサルティング、映像制作、営業代行まで。企業とクリエイター双方の成長をサポートする事業を展開しています。",
  /**
   * 会社ページ用の公式LINE URL（スクール用とは別）
   * 確定後に差し替え
   */
  lineUrl: "https://lin.ee/9601tvM",

  /**
   * 人材派遣事業における福利厚生・キャリア支援制度
   * ※有料のLine Creator Worksとは別契約・別制度（スクールの延長ではない）
   */
  freeProgram: {
    label: "Career Support",
    title: "働きながら、学び始められる無償制度",
    lead:
      "これは有料のLine Creator Works（動画編集スクール）ではありません。人材派遣事業において当社で稼働する方向けの、福利厚生・キャリア支援としての無償制度です。",
    separationNote:
      "本制度は有料スクール（Line Creator Works）とは別契約・別制度です。有料スクールの延長、割引コース、継続コースではありません。",
    target:
      "まずは仕事と生活を安定させつつ、将来の選択肢として動画編集に触れたい方を想定しています。",
    includes: [
      "動画編集の基礎教材",
      "入門ノウハウ",
      "初級レベルの課題",
      "相談・フィードバック会への参加",
    ],
    excludes: [
      "有料スクール（Line Creator Works）同等の個別伴走サポート",
      "継続的で細かい添削・フィードバック",
      "案件獲得・営業サポート",
    ],
    purpose:
      "給与以外の価値を届け、これからの働き方の選択肢を増やすこと。一緒に未来をつくる仲間を増やしていくことも、この制度の狙いです。",
    comparison: [
      {
        item: "位置づけ",
        paid: "有料の別サービス（Line Creator Works）",
        free: "人材派遣事業の福利厚生・キャリア支援",
      },
      {
        item: "契約",
        paid: "スクール受講契約（有料・2か月以内）",
        free: "人材派遣に伴う別制度（無償）",
      },
      {
        item: "目的",
        paid: "短期間で編集を仕事にする",
        free: "生活を安定させながら、まず触れる",
      },
      {
        item: "対象",
        paid: "有料スクールへの申込みを検討する方",
        free: "人材事業などで週5勤務の方",
      },
      {
        item: "内容",
        paid: "体系的・実践的なカリキュラム",
        free: "基礎・入門中心の教材提供",
      },
      {
        item: "サポート",
        paid: "伴走・添削あり",
        free: "限定的／基本なし",
      },
      {
        item: "案件支援",
        paid: "紹介の可能性あり（保証なし）",
        free: "原則なし",
      },
    ],
    closing:
      "未経験の方のご相談も歓迎です。無理な勧誘はしません。まずは状況や目標をお聞きし、動画編集が合うかどうかを一緒に見極めます。",
  },

  services: [
    {
      title: "人材採用・派遣支援事業",
      subtitle: "HR事業",
      description:
        "企業の人材不足や採用課題を解決するため、人材派遣・人材紹介を行う事業です。企業と求職者を最適にマッチングし、双方の成長をサポートします。",
      icon: "users" as const,
    },
    {
      title: "動画編集スクール運営事業",
      subtitle: "クリエイター育成事業",
      description:
        "未経験から実践的な動画編集スキルを学び、プロとして活躍できるデジタルクリエイターを育成・輩出する教育事業です。",
      icon: "graduationCap" as const,
    },
    {
      title: "SNS運用・集客コンサルティング事業",
      subtitle: "SNSマーケティング・ブランディング事業",
      description:
        "TikTokやYouTubeなどのSNSアカウント運用・コンサルティングを行い、戦略的な企画・プロデュースによって企業の認知拡大、ブランディング、集客力向上を支援します。",
      icon: "megaphone" as const,
    },
    {
      title: "映像・動画制作受託事業",
      subtitle: "映像コンテンツ制作事業",
      description:
        "YouTube動画の編集から企業のプロモーション映像（PV）、広告動画まで、目的に応じた高品質な映像コンテンツを企画・制作する事業です。",
      icon: "film" as const,
    },
    {
      title: "営業代行・販売促進事業",
      subtitle: "Sales Outsourcing事業",
      description:
        "専門チームが企業に代わって営業活動を行い、ターゲット選定からアプローチ、商談までを支援することで、成約率向上と売上最大化に貢献する事業です。",
      icon: "handshake" as const,
    },
  ],
} as const;

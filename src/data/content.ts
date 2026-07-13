/**
 * LPコンテンツデータ
 * コピー・数値・画像パスはすべてここで一元管理
 */

export const stats = [
  { value: "150万+", label: "YouTube登録者", note: "関連チャンネル合計" },
  { value: "39億+", label: "YouTube総再生数", note: "関連チャンネル合計" },
  { value: "10+", label: "関連チャンネル", note: "けーさんとたろー関連" },
] as const;

export const channels = [
  {
    name: "けーさんとたろー",
    description: "メインチャンネル",
    image: "/images/channels/main.png",
    url: "https://youtube.com/@kesantotaro",
  },
  {
    name: "けーさんとたろーの土曜日",
    description: "関連チャンネル",
    image: "/images/channels/saturday.png",
    url: "https://youtube.com/channel/UCU-teYyHjG28Ih8GAIse3oA",
  },
  {
    name: "元気マンTV",
    description: "関連チャンネル",
    image: "/images/channels/genkiman.png",
    url: "https://www.youtube.com/@TV-se5vj",
  },
  {
    name: "けーさんとたろーの不動産",
    description: "関連チャンネル",
    image: "/images/channels/realestate.png",
    url: "https://youtube.com/@ketarofudosan",
  },
  {
    name: "いただきますっ。",
    description: "関連チャンネル",
    image: "/images/channels/itadakimasu.png",
    url: "https://youtube.com/@itadakimasu_thank",
  },
  {
    name: "Mr.蛙化キリュウのゲロゲロチャンネル",
    description: "関連チャンネル",
    image: "/images/channels/gerogero.png",
    url: "https://youtube.com/channel/UC-ZuCG8ALlNoc7LnukJ-i6Q",
  },
  {
    name: "けーさんが休みの日。",
    description: "関連チャンネル",
    image: "/images/channels/holiday.png",
    url: "https://youtube.com/channel/UCZOPwy5luJvWuLTBY-wISIA",
  },
  {
    name: "Mニキ日記",
    description: "関連チャンネル",
    image: "/images/channels/mniki.png",
    url: "https://youtube.com/channel/UCAZ7ubYbQSi9z5V3ZW-5d-Q",
  },
  {
    name: "プリンス稲葉の台所",
    description: "関連チャンネル",
    image: "/images/channels/inaba.png",
    url: "https://youtube.com/@princeinabakitchen",
  },
  {
    name: "見習い画伯まーちゃん",
    description: "関連チャンネル",
    image: "/images/channels/marchan.png",
    url: "https://youtube.com/@oekakitanoc-masato",
  },
] as const;

export const problems = [
  {
    title: "独学のまま、正しい方向かわからない",
    description:
      "YouTubeやSNSで情報を集めても、何から手をつければいいか迷う。テロップの入れ方、カットのテンポ、音の設計——「これで合ってるのか」がいつまでも判断できない。",
  },
  {
    title: "スクールに通ったのに、仕事につながらなかった",
    description:
      "動画編集スクールは世の中にたくさんある。でも卒業後、実際に案件をもらえた人はどれだけいるだろう。学んだ内容と、現場で求められるスキルにギャップがある——そう感じたことはありませんか。",
  },
  {
    title: "副業・キャリアチェンジを本気で考えているのに、一歩踏み出せない",
    description:
      "「動画編集で稼ぎたい」「会社員のまま副業を始めたい」。意欲はあるのに、どのスクールを選べばいいか、本当に仕事につながるのか——判断材料が足りなくて、ずっと迷っている。",
  },
] as const;

export const testimonials = [
  {
    name: "受講生 A",
    role: "会社員・副業希望",
    comment:
      "（受講者の声は後日掲載予定です。実際の受講体験・成果について、リアルな声をお届けします。）",
    highlight: "準備中",
  },
  {
    name: "受講生 B",
    role: "フリーランス志望",
    comment:
      "（受講者の声は後日掲載予定です。実際の受講体験・成果について、リアルな声をお届けします。）",
    highlight: "準備中",
  },
  {
    name: "受講生 C",
    role: "未経験からスタート",
    comment:
      "（受講者の声は後日掲載予定です。実際の受講体験・成果について、リアルな声をお届けします。）",
    highlight: "準備中",
  },
] as const;

export const differences = [
  {
    title: "学んで終わりにしない",
    description:
      "一般的なスクールはカリキュラム修了で卒業。私たちは動画編集会社として案件を受注しており、卒業後もコミュニティを通じて実務につなげる環境があります。",
    icon: "target" as const,
  },
  {
    title: "現場で使われるノウハウ",
    description:
      "教材はけーさんとたろーの編集チームが制作。YouTubeで毎日使われているワークフロー・テロップ・カット設計を、そのまま学べます。",
    icon: "video" as const,
  },
  {
    title: "現役クリエイターが指導",
    description:
      "講師はチャンネルを支える編集スタッフや制作メンバー。教科書的な知識ではなく、「今、現場で何をしているか」を教えます。",
    icon: "users" as const,
  },
  {
    title: "案件紹介制度",
    description:
      "弊社が受注した案件を、スキルと意欲に応じてコミュニティ内で紹介。採用・収入の保証ではありませんが、仕事につながる道筋は用意しています。",
    icon: "briefcase" as const,
  },
] as const;

export const curriculum = [
  {
    phase: "Phase 1",
    title: "基礎編集スキル",
    duration: "Week 1-2",
    items: [
      "Premiere Pro / DaVinci Resolve の基本操作",
      "カット編集・テンポ設計の基礎",
      "テロップ・SE・BGMの基本設計",
      "YouTube動画の構成理解",
    ],
  },
  {
    phase: "Phase 2",
    title: "実践編集スキル",
    duration: "Week 3-5",
    items: [
      "けーさんとたろー流の編集ワークフロー",
      "視聴維持率を意識したカット設計",
      "テロップデザイン・モーショングラフィックス入門",
      "実案件を想定した課題制作",
    ],
  },
  {
    phase: "Phase 3",
    title: "仕事につなげる",
    duration: "Week 6-8",
    items: [
      "ポートフォリオ制作・添削",
      "クライアントワークの進め方",
      "単価設定・案件獲得の基礎",
      "コミュニティ参加・案件紹介制度の案内",
    ],
  },
] as const;

export const feedbackFeatures = [
  "受講期間中、無料オンラインフィードバック会を定期開催",
  "提出した課題に対し、現役編集者が直接フィードバック",
  "質問し放題のサポート体制",
  "他の受講生の作品も見られる学びの場",
] as const;

export const communityFeatures = [
  {
    title: "受講生コミュニティ",
    description: "同期の受講生と切磋琢磨。課題の進捗共有や情報交換ができます。",
  },
  {
    title: "案件募集ボード",
    description: "コミュニティ内で案件の募集・応募が行われます。スキルに応じた機会にアクセスできます。",
  },
  {
    title: "卒業後も継続参加",
    description: "卒業後もコミュニティに残れるため、キャリアを続けながら学びを深められます。",
  },
] as const;

export const careerPoints = [
  {
    title: "案件紹介制度",
    description:
      "弊社が受注した動画編集案件を、スキルと意欲を評価した上でコミュニティ内で紹介。案件の内容・報酬・条件は案件ごとに異なります。",
  },
  {
    title: "コミュニティ内キャリア支援",
    description:
      "フリーランスとして独立する方、副業で始める方、それぞれのステージに合わせた情報共有とサポートがあります。",
  },
  {
    title: "現場との接点を維持",
    description:
      "けーさんとたろーの編集チームと同じコミュニティにいることで、業界の最新トレンドや実務の変化を継続的にキャッチアップできます。",
  },
] as const;

export const instructors = [
  {
    name: "けーさん",
    role: "運営・講師",
    description: "サラリーマンYouTuber。けーさんとたろーチャンネル運営。編集チーム統括。",
    image: "/images/instructors/ke.png",
  },
  {
    name: "みなと",
    role: "編集講師",
    description: "けーさんとたろーチャンネルの編集長。Mニキ日記も運営。",
    image: "/images/instructors/minato.png",
  },
  {
    name: "きりゅう",
    role: "編集講師",
    description: "けーさんとたろーのメンバー。Mr.蛙化キリュウのゲロゲロチャンネルも運営。",
    image: "/images/instructors/kiryu.png",
  },
  {
    name: "こうた",
    role: "編集講師",
    description: "元スクワッド所属。現場経験豊富なクリエイター。",
    image: "/images/instructors/kota.jpg",
  },
  {
    name: "りょうたろう",
    role: "運営",
    description: "けーさんとたろーチャンネルの企画・編集を担当。",
    image: "/images/instructors/staff.jpg",
  },
] as const;

export const advisor = {
  name: "青笹 雅史",
  role: "公式アドバイザー",
  title: "動画編集キャンプ 代表",
  comment:
    "動画編集の需要は今後も拡大し続けます。けーさんとたろーさんのチームは、実際に大量の動画を制作しながら人材を育てるという、非常に実践的なアプローチを取っています。現場で使えるスキルを身につけ、キャリアにつなげたい方にとって、心強い環境だと思います。",
  image: "/images/instructors/aosasa.jpg",
} as const;

export const faqs = [
  {
    question: "初心者でも大丈夫ですか？",
    answer:
      "はい、前提知識は不要です。PCの基本操作ができれば受講可能です。ただし、動画編集は継続的な練習が必要なスキルです。課題に取り組む時間を確保できる方を歓迎します。",
  },
  {
    question: "案件は必ずもらえますか？",
    answer:
      "いいえ、案件の紹介を保証するものではありません。スキルレベル・意欲・案件の条件により、紹介の有無や内容は異なります。案件紹介制度は、仕事につながる機会を提供する仕組みです。",
  },
  {
    question: "無料受講制度とは何ですか？",
    answer:
      "けーさんとたろーでは人材派遣事業も行っています。一定の条件を満たし、人材派遣スタッフとして長期的に稼働いただける方を対象に、受講料を実質負担なく学べる制度を検討しています。詳細は無料個別面談にてご説明します。",
  },
  {
    question: "通常コースと人材育成コースの違いは？",
    answer:
      "通常コースは約2ヶ月の集中プログラムです。人材育成コースは約4〜5ヶ月かけて、実務レベルまで丁寧に育成する長期プログラムです。ご自身の目標や生活スタイルに合わせて、面談時にご提案します。",
  },
  {
    question: "必要な機材はありますか？",
    answer:
      "編集ソフトが動作するPCが必要です。Premiere Pro または DaVinci Resolve（無料版可）を推奨しています。詳細な推奨スペックはLINE登録後にご案内します。",
  },
  {
    question: "卒業後もサポートはありますか？",
    answer:
      "はい。卒業後もコミュニティへの参加を継続でき、案件情報の共有やキャリアに関する情報交換が可能です。",
  },
] as const;

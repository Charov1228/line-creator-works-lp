"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/data/site-config";

/**
 * スクールを作った理由
 * 共感 → 問題提起 → 解決策のストーリー
 */
export function WhySection() {
  const reasons = [
    {
      number: "01",
      title: "編集者が足りない",
      description: `毎月50本以上の動画を制作する${siteConfig.brand}ですが、優秀な編集者の確保は常に課題でした。市場には「動画編集を教えるスクール」は溢れていますが、実際に現場で通用する人材を育てる場所は少ない。`,
    },
    {
      number: "02",
      title: "本気で育てたい",
      description:
        "だから私たちは自分たちでスクールを作ることにしました。けーさんとたろーの編集チームが教材を作り、現役の編集者が直接指導する。外部に委ねるのではなく、自分たちのノウハウを直接伝える。",
    },
    {
      number: "03",
      title: "学ぶだけで終わらせない",
      description:
        "動画編集会社として案件を受注しているからこそ、卒業後に仕事につなげる環境を用意できます。コミュニティへの参加、案件紹介制度——「学んで終わり」ではなく、「働けるようになる」までを見据えた設計です。",
    },
  ];

  return (
    <SectionWrapper id="about">
      <AnimatedSection>
        <SectionHeader
          label="Our Story"
          title="なぜ、このスクールを作ったのか"
          description="YouTubeチャンネルを運営し、動画編集会社として案件を受注する——その現場から生まれたスクールです。"
        />
      </AnimatedSection>

      <div className="space-y-6">
        {reasons.map((reason, index) => (
          <AnimatedSection key={reason.number} delay={index * 0.1}>
            <div className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-card p-8 transition hover:border-line-green/20 md:flex-row md:items-start md:gap-10 md:p-10">
              <div className="shrink-0">
                <span className="text-5xl font-bold text-line-green/20 transition group-hover:text-line-green/40">
                  {reason.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/60">
                  {reason.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 flex justify-center">
        <LineCtaButton
          label="まずは無料個別相談で詳しく聞いてみる"
          sublabel="まずは公式LINEで詳細を確認"
        />
      </AnimatedSection>
    </SectionWrapper>
  );
}

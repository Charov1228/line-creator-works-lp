"use client";

import { LineCtaButton } from "@/components/shared/LineCtaButton";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { StrikeLine } from "@/components/shared/StrikeLine";
import { siteConfig } from "@/data/site-config";

/**
 * 最終CTAセクション
 * 読了後のコンバージョンポイント
 */
export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <AmbientBackground atmosphere="final" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest text-line-green uppercase">
            Get Started
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            <StrikeLine>
              まずは無料個別相談で、
              <br />
              詳しく聞いてみませんか。
            </StrikeLine>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            公式LINEから無料面談を予約できます。
            {siteConfig.brand}の編集チームが直接お話を伺い、
            あなたに合う学び方をご案内します。未経験の方もお気軽にご相談ください。
          </p>

          <div className="mt-10">
            <LineCtaButton
              size="xl"
              label="公式LINEから無料面談を予約する"
              sublabel="公式LINE限定でスクールの詳細をご案内"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/30">
            <span>✓ 完全オンライン</span>
            <span>✓ 初心者歓迎</span>
            <span>✓ 無料個別相談あり</span>
            <span>✓ しつこい勧誘なし</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

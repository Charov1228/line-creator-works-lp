"use client";

import { benefits, targetAudiences } from "@/data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import { LineCtaButton } from "@/components/shared/LineCtaButton";

/**
 * 受講メリット・ターゲット具体化
 * スクール特徴は維持しつつ、受講後の変化と向き先を補強
 */
export function BenefitsSection() {
  return (
    <SectionWrapper id="benefits" variant="card">
      <AnimatedSection>
        <SectionHeader
          label="Your Future"
          title="受講後に、目指せる未来"
          description="断定や収入保証はありません。それでも、未経験から動画編集を仕事にする第一歩として、次のような変化を目指せます。"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <StaggerItem key={benefit.title}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/50 p-6 transition hover:border-line-green/25 md:p-7">
              <span className="text-sm font-medium text-line-green/50">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">
                {benefit.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                {benefit.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection className="mt-16">
        <div className="rounded-3xl border border-white/10 bg-black/40 px-6 py-10 md:px-10 md:py-12">
          <p className="text-center text-sm font-medium tracking-widest text-line-green uppercase">
            For Whom
          </p>
          <h3 className="mt-3 text-center text-2xl font-bold text-white md:text-3xl">
            こんな方に向いています
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/50 md:text-base">
            初心者・未経験の方を歓迎しています。特に、次のような目標をお持ちの方にフィットしやすいスクールです。
          </p>
          <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 md:grid-cols-3">
            {targetAudiences.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-card/80 px-4 py-3 text-sm text-white/70"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-line-green" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <LineCtaButton
              label="まずは無料個別相談で詳しく聞いてみる"
              sublabel="公式LINE限定でスクールの詳細をご案内"
            />
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

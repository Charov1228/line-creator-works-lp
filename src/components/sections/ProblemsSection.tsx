"use client";

import { problems } from "@/data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

/**
 * 課題定義セクション
 * ターゲットの悩みに共感し、スクールへの関心を喚起
 */
export function ProblemsSection() {
  return (
    <SectionWrapper id="problems">
      <AnimatedSection>
        <SectionHeader
          label="For You"
          title="こんな悩み、ありませんか？"
          description="動画編集を学びたい。でも、何から始めればいいかわからない。副業や在宅での働き方を本気で考えている方のために、このスクールは作られました。"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {problems.map((problem, index) => (
          <StaggerItem key={problem.title}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card p-6 transition hover:border-line-green/20 md:p-8">
              <span className="mb-4 text-sm font-medium text-line-green/60">
                0{index + 1}
              </span>
              <h3 className="text-lg font-bold text-white md:text-xl">
                {problem.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60 md:text-base">
                {problem.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection className="mt-12 text-center">
        <p className="text-base text-white/50 md:text-lg">
          その悩み、
          <span className="font-semibold text-white">
            けーさんとたろーの動画編集スクール
          </span>
          なら解決の糸口があります。
        </p>
      </AnimatedSection>
    </SectionWrapper>
  );
}

"use client";

import { problems } from "@/data/content";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";
import { useSectionReveal } from "@/hooks/useSectionReveal";

/**
 * 課題定義セクション
 * ヒーロー直後は「見出しブロック」ではなくセクション先頭を基準に発火させる。
 * （内側の AnimatedSection だと余白の分だけ基準が下がり、遅く見える）
 */
export function ProblemsSection() {
  const { ref, revealed } = useSectionReveal("0px 0px -30% 0px");

  return (
    <SectionWrapper
      id="problems"
      atmosphere="glow-left"
      className="pt-8 md:pt-32"
    >
      {/* セクション上端＝発火基準（pt 分だけ負の top で合わせる） */}
      <div
        ref={ref}
        className="pointer-events-none absolute -top-8 right-0 left-0 h-px md:-top-32"
        aria-hidden
      />

      <div
        className={cn(
          "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          revealed
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        )}
      >
        <SectionHeader
          label="For You"
          title="こんな悩み、ありませんか？"
          description={
            <>
              動画編集を学びたい。
              <br className="md:hidden" />
              でも、何から始めればいいかわからない。
              <br />
              新しい働き方を本気で考えている方のために、
              <br className="md:hidden" />
              このスクールは作られました。
            </>
          }
        />
      </div>

      {revealed ? (
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <StaggerItem key={problem.title}>
              <div
                className="card-border-flow flex h-full flex-col rounded-3xl border border-white/10 bg-card p-6 transition hover:border-line-green/20 md:p-8"
                style={{ animationDelay: `${index * 1.3}s` }}
              >
                <span className="mb-4 text-sm font-medium text-line-green/60">
                  0{index + 1}
                </span>
                <h3 className="whitespace-pre-line text-lg font-bold text-white md:text-xl">
                  {problem.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60 md:text-base">
                  {problem.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="grid gap-6 opacity-0 md:grid-cols-3" aria-hidden>
          {problems.map((problem) => (
            <div key={problem.title} className="h-40" />
          ))}
        </div>
      )}

      <div
        className={cn(
          "mt-12 text-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          revealed
            ? "translate-y-0 opacity-100 delay-150"
            : "translate-y-6 opacity-0"
        )}
      >
        <p className="text-base text-white/50 md:text-lg">
          その悩み、
          <span className="font-semibold text-white">
            けーさんとたろーの動画編集スクール
          </span>
          なら
          <br className="md:hidden" />
          解決の糸口があります。
        </p>
      </div>
    </SectionWrapper>
  );
}

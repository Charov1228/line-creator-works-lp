"use client";

import { ArrowRight } from "lucide-react";
import { careerPoints } from "@/data/content";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { AnimatedStraightLines } from "@/components/shared/AnimatedStraightLines";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

const careerFlowSteps = [
  "公式LINEで面談予約",
  "無料個別面談",
  "スクール受講",
  "卒業",
  "コミュニティ継続",
  "スキルに応じた案件紹介",
] as const;

/**
 * 卒業後のキャリアセクション
 * 案件紹介制度を自然な表現で訴求（保証表現は避ける）
 */
export function CareerSection() {
  return (
    <SectionWrapper
      variant="gradient"
      id="career"
      atmosphere="none"
      ambient={<AnimatedStraightLines variant="career" />}
    >
      <AnimatedSection>
        <SectionHeader
          label="After Graduation"
          title="卒業は、スタート地点"
          description={
            <>
              私たちは卒業後も、
              <br />
              スキルに応じた案件紹介や、
              <br />
              けーさんとたろー関連の案件に
              <br className="md:hidden" />
              携われるチャンスまで見据えています。
            </>
          }
        />
      </AnimatedSection>

      <div className="space-y-6">
        {careerPoints.map((point, index) => (
          <AnimatedSection key={point.title} delay={index * 0.1}>
            <div
              className="card-border-flow flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/50 p-8 md:flex-row md:items-center md:gap-8"
              style={{ animationDelay: `${index * 1.6}s` }}
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-line-green/10 text-2xl font-bold text-line-green">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">
                  {point.description}
                </p>
              </div>
              <ArrowRight className="hidden size-5 shrink-0 text-white/20 md:block" />
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-16">
        <div className="rounded-3xl border border-white/10 bg-card p-8 md:p-12">
          <h3 className="mb-8 text-center text-lg font-semibold text-white">
            受講からキャリアまでの流れ
          </h3>
          <div className="flex flex-col items-stretch gap-3 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-2">
            {careerFlowSteps.map((step, index, arr) => (
              <div key={step} className="flex items-center lg:contents">
                <div
                  className="step-highlight flex-1 rounded-xl border border-line-green/30 bg-line-green/10 px-3 py-3 text-center lg:w-auto lg:min-w-0 lg:flex-none lg:px-3.5"
                  style={{ animationDelay: `${index * 1.5}s` }}
                >
                  <p className="text-[10px] font-medium text-line-green sm:text-xs">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold whitespace-nowrap text-white sm:text-xs">
                    {step}
                  </p>
                </div>
                {index < arr.length - 1 && (
                  <ArrowRight className="mx-1 hidden size-4 shrink-0 text-line-green/40 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12 flex justify-center">
        <LineCtaButton
          label="キャリアの相談は無料説明会で"
          sublabel="案件紹介の仕組みも個別にご説明"
          location="career"
        />
      </AnimatedSection>
    </SectionWrapper>
  );
}

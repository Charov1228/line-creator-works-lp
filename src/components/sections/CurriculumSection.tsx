"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { curriculum } from "@/data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

/**
 * カリキュラムセクション
 * 約2ヶ月の学習ロードマップを提示
 */
export function CurriculumSection() {
  return (
    <SectionWrapper id="curriculum">
      <AnimatedSection>
        <SectionHeader
          label="Curriculum"
          title="約2ヶ月で、現場レベルの編集スキルを"
          description="基礎から実践、そして仕事につなげるまで。段階的にスキルを積み上げるカリキュラムです。"
        />
      </AnimatedSection>

      <AnimatedSection className="mb-12 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-card px-6 py-5">
        <Image
          src="/images/icons/premiere.png"
          alt="Adobe Premiere Pro"
          width={48}
          height={48}
          className="size-12 rounded-xl"
        />
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">
            メインツールは Adobe Premiere Pro
          </p>
          <p className="mt-1 text-xs text-white/50">
            現場で最も使われる編集ソフトを、実践形式で習得します（DaVinci Resolve にも対応）
          </p>
        </div>
      </AnimatedSection>

      <div className="relative">
        {/* タイムライン縦線 */}
        <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b from-line-green/50 via-line-green/20 to-transparent md:left-1/2 md:block md:-translate-x-px" />

        <StaggerContainer className="space-y-8">
          {curriculum.map((phase, index) => (
            <StaggerItem key={phase.phase}>
              <div
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* タイムラインドット */}
                <div className="absolute left-8 hidden size-4 -translate-x-1/2 rounded-full border-2 border-line-green bg-black md:left-1/2 md:block" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="ml-16 rounded-3xl border border-white/10 bg-card p-8 md:ml-0">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full bg-line-green/10 px-3 py-1 text-xs font-semibold text-line-green">
                        {phase.phase}
                      </span>
                      <span className="text-xs text-white/40">{phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="mt-0.5 size-4 shrink-0 text-line-green" />
                          <span className="text-sm text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AnimatedSection className="mt-12 flex justify-center">
        <LineCtaButton sublabel="カリキュラム詳細はLINEでご案内" />
      </AnimatedSection>
    </SectionWrapper>
  );
}

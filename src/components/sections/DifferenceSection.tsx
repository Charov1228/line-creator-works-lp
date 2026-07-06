"use client";

import { Target, Video, Users, Briefcase } from "lucide-react";
import { differences } from "@/data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

const iconMap = {
  target: Target,
  video: Video,
  users: Users,
  briefcase: Briefcase,
};

/**
 * 他スクールとの違い
 * 差別化ポイントを明確に訴求
 */
export function DifferenceSection() {
  return (
    <SectionWrapper variant="gradient">
      <AnimatedSection>
        <SectionHeader
          label="Why Us"
          title="一般的なスクールとの違い"
          description="「動画編集を教える」だけの場所は、たくさんあります。私たちは「仕事につなげる」まで設計しています。"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-6 md:grid-cols-2">
        {differences.map((diff) => {
          const Icon = iconMap[diff.icon];
          return (
            <StaggerItem key={diff.title}>
              <div className="h-full rounded-3xl border border-white/10 bg-black/60 p-8 transition hover:border-line-green/30 hover:bg-card">
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-line-green/10">
                  <Icon className="size-6 text-line-green" />
                </div>
                <h3 className="text-xl font-bold text-white">{diff.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {diff.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* 比較表 */}
      <AnimatedSection className="mt-16">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-card">
                <th className="p-4 text-left font-medium text-white/50" />
                <th className="p-4 text-center font-medium text-white/50">
                  一般的なスクール
                </th>
                <th className="p-4 text-center font-bold text-line-green">
                  Line Creator Works
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["教材の質", "汎用的なカリキュラム", "現場で使われるノウハウ"],
                ["講師", "専業講師が中心", "現役編集者・制作スタッフ"],
                ["卒業後", "修了で終了", "コミュニティ継続・案件紹介"],
                ["運営", "教育会社", "動画編集会社が直接運営"],
              ].map(([item, general, ours]) => (
                <tr key={item} className="border-b border-white/5">
                  <td className="p-4 font-medium text-white">{item}</td>
                  <td className="p-4 text-center text-white/40">{general}</td>
                  <td className="p-4 text-center font-medium text-white">
                    {ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

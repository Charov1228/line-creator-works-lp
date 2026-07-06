"use client";

import { Mic, Users, MessageSquare, Eye } from "lucide-react";
import { feedbackFeatures } from "@/data/content";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

const featureIcons = [Mic, Users, MessageSquare, Eye];

/**
 * フィードバック会セクション
 * 現役クリエイターによる直接指導を訴求
 */
export function FeedbackSection() {
  return (
    <SectionWrapper variant="card">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimatedSection>
          <SectionHeader
            label="Feedback Session"
            title="現役編集者が、あなたの作品に直接フィードバック"
            description="教科書を読むだけじゃない。普段実際に動画を作っているクリエイターが、あなたの課題を見て、具体的にアドバイスします。"
            align="left"
          />

          <ul className="space-y-4">
            {feedbackFeatures.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <li
                  key={feature}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/40 p-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-line-green/10">
                    <Icon className="size-5 text-line-green" />
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">{feature}</p>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 rounded-2xl border border-line-green/20 bg-line-green/5 p-6">
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-semibold text-line-green">講師陣：</span>
              けーさんとたろーのメンバー、チャンネルを支える編集者、制作スタッフ、元スクワッドの「こうた」など、現場の第一線で活躍するクリエイターが担当します。
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PlaceholderImage
            src="/images/feedback-session.jpg"
            alt="オンラインフィードバック会の様子"
            aspectRatio="aspect-[4/5]"
          />
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

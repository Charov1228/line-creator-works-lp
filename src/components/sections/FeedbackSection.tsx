"use client";

import { Mic, Users, MessageSquare, Eye, Monitor } from "lucide-react";
import { feedbackFeatures } from "@/data/content";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

const featureIcons = [Mic, Monitor, MessageSquare, Users, Eye];

/**
 * フィードバック会セクション
 * 現役クリエイターによる直接指導を訴求
 */
export function FeedbackSection() {
  return (
    <SectionWrapper variant="card" atmosphere="glow-left">
      <AnimatedSection>
        <SectionHeader
          label="Feedback Session"
          title={
            <>
              現役編集者による
              <br />
              フィードバック
            </>
          }
          description={
            <>
              教科書を読むだけじゃない。
              <br />
              普段実際に動画を作っているクリエイターが、
              <br />
              あなたの課題に具体的にアドバイスします。
            </>
          }
        />
      </AnimatedSection>

      <AnimatedSection className="mt-10 md:mt-12">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
          <PlaceholderImage
            src="/images/feedback-session.jpg"
            alt="対面フィードバック会の様子"
            aspectRatio="aspect-video"
            rounded="none"
            className="w-full"
          />
        </div>
        <p className="mt-3 text-center text-xs text-white/40">
          対面フィードバック会の様子
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <AnimatedSection>
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
        </AnimatedSection>

        <AnimatedSection>
          <div className="h-full rounded-2xl border border-line-green/20 bg-line-green/5 p-6 lg:p-8">
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-semibold text-line-green">講師陣：</span>
              けーさんとたろーのメンバー、チャンネルを支える編集者、制作スタッフ、元スクワッドの「こうた」など、現場の第一線で活躍するクリエイターが担当します。
            </p>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

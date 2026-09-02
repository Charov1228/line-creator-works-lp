"use client";

import Image from "next/image";
import { Mic, Users, MessageSquare, Eye, Monitor } from "lucide-react";
import { feedbackFeatures } from "@/data/content";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

const featureIcons = [Mic, Monitor, MessageSquare, Users, Eye];

const instructorNote =
  "けーさんとたろーのメンバー、チャンネルを支える編集者、制作スタッフ、元スクワッドの「こうた」など、現場の第一線で活躍するクリエイターが担当します。";

function FeedbackSessionVisual() {
  return (
    <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
      <div className="glow-green relative overflow-hidden rounded-2xl border border-white/10 bg-card p-1.5 sm:rounded-3xl sm:p-2">
        <div className="relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl">
          <Image
            src="/images/feedback-session.jpg"
            alt="対面フィードバック会の様子"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-16">
            <p className="text-sm font-semibold text-white sm:text-base">
              対面フィードバック会の様子
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-line-green/20 bg-line-green/5 p-4 sm:mt-5 sm:p-5">
        <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
          <span className="font-semibold text-line-green">講師陣：</span>
          {instructorNote}
        </p>
      </div>
    </div>
  );
}

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

      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-x-14">
        <AnimatedSection className="order-2 lg:order-1">
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

        <AnimatedSection className="order-1 lg:order-2 lg:pt-2">
          <FeedbackSessionVisual />
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}

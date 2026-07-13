"use client";

import { instructors, advisor } from "@/data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

/**
 * 講師紹介セクション
 * 青笹社長は後半で公式アドバイザーとして掲載
 */
export function InstructorsSection() {
  return (
    <SectionWrapper id="instructors" variant="card">
      <AnimatedSection>
        <SectionHeader
          label="Instructors"
          title="現場で動画を作っている人が、教える"
          description="専業講師ではありません。けーさんとたろーのチャンネルを毎日支えている、現役のクリエイターたちです。"
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {instructors.map((instructor) => (
          <StaggerItem key={instructor.name}>
            <div className="text-center">
              <div className="mx-auto max-w-[160px] overflow-hidden rounded-full bg-gradient-to-br from-line-green via-[#c9a227]/60 to-line-green/40 p-[3px]">
                <div className="overflow-hidden rounded-full bg-black p-1">
                  <div
                    className={
                      instructor.name === "けーさん"
                        ? "overflow-hidden rounded-full [&_img]:!scale-[1.55] [&_img]:origin-[center_18%]"
                        : "overflow-hidden rounded-full"
                    }
                  >
                    <PlaceholderImage
                      src={instructor.image}
                      alt={instructor.name}
                      aspectRatio="aspect-square"
                      rounded="full"
                      objectPosition={instructor.objectPosition}
                    />
                  </div>
                </div>
              </div>
              <h4 className="mt-4 font-semibold text-white">{instructor.name}</h4>
              <p className="mt-1 text-xs text-line-green">{instructor.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                {instructor.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* 公式アドバイザー：青笹社長 */}
      <AnimatedSection className="mt-20">
        <div className="section-divider mb-12" />
        <p className="mb-8 text-center text-sm font-medium tracking-widest text-white/40 uppercase">
          Official Advisor
        </p>
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/60 p-8 md:p-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <PlaceholderImage
              src={advisor.image}
              alt={advisor.name}
              aspectRatio="aspect-square"
              rounded="full"
              className="w-32 shrink-0 md:w-40"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold text-white">{advisor.name}</h3>
                <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs text-white/60">
                  {advisor.role}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/50">{advisor.title}</p>
              <blockquote className="mt-5 border-l-2 border-line-green/50 pl-4 text-sm leading-relaxed text-white/70 italic">
                「{advisor.comment}」
              </blockquote>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

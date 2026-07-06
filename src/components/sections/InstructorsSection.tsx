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
 * けーさんを最上位に、青笹社長は後半で公式アドバイザーとして掲載
 */
export function InstructorsSection() {
  const featured = instructors.filter((i) => i.featured);
  const others = instructors.filter((i) => !i.featured);

  return (
    <SectionWrapper id="instructors" variant="card">
      <AnimatedSection>
        <SectionHeader
          label="Instructors"
          title="現場で動画を作っている人が、教える"
          description="専業講師ではありません。けーさんとたろーのチャンネルを毎日支えている、現役のクリエイターたちです。"
        />
      </AnimatedSection>

      {/* けーさん（大きく表示） */}
      <StaggerContainer className="mb-12 grid gap-6 md:max-w-xl md:mx-auto">
        {featured.map((instructor) => (
          <StaggerItem key={instructor.name}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/50 transition hover:border-line-green/30">
              <PlaceholderImage
                src={instructor.image}
                alt={instructor.name}
                aspectRatio="aspect-[3/2]"
                rounded="none"
              />
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <span className="rounded-full bg-line-green/10 px-2 py-0.5 text-xs text-line-green">
                    {instructor.role}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {instructor.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* その他講師 */}
      <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {others.map((instructor) => (
          <StaggerItem key={instructor.name}>
            <div className="text-center">
              <PlaceholderImage
                src={instructor.image}
                alt={instructor.name}
                aspectRatio="aspect-square"
                rounded="full"
                className="mx-auto max-w-[160px]"
              />
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

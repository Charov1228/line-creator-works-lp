"use client";

import { communityFeatures } from "@/data/content";
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
 * コミュニティセクション
 */
export function CommunitySection() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <SectionHeader
          label="Community"
          title={
            <>
              一人じゃない。
              <br className="md:hidden" />
              仲間と一緒に成長する
            </>
          }
          description={
            <>
              受講期間中も卒業後も、
              <br className="md:hidden" />
              コミュニティに参加し続けられます。
              <br />
              案件情報の共有、スキルアップの情報交換、
              <br className="md:hidden" />
              切磋琢磨の場。
            </>
          }
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {communityFeatures.map((feature, index) => (
          <StaggerItem key={feature.title}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card p-8">
              <span className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                0{index + 1}
              </span>
              <h3 className="relative text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="relative mt-4 leading-relaxed text-white/60">
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

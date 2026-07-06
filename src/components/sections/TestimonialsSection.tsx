"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
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
 * 受講者の声セクション
 * 文言は後日差し替え予定（プレースホルダー構成）
 */
export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" variant="card">
      <AnimatedSection>
        <SectionHeader
          label="Voice"
          title="受講者の声"
          description="実際にスクールで学んだ方の体験談をお届けします。（文言は後日掲載予定）"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <StaggerItem key={item.name}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/50 p-6 md:p-8">
              <Quote className="size-8 text-line-green/30" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/60 italic md:text-base">
                {item.comment}
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="mt-1 text-xs text-white/50">{item.role}</p>
                  </div>
                  <span className="rounded-full bg-line-green/10 px-2 py-0.5 text-xs text-line-green">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

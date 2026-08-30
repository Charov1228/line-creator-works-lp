"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { HorizontalMarquee } from "@/components/shared/HorizontalMarquee";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

function TestimonialCard({
  item,
}: {
  item: (typeof testimonials)[number];
}) {
  return (
    <div className="card-border-flow flex h-full w-[min(85vw,320px)] shrink-0 flex-col rounded-3xl border border-white/10 bg-black/50 p-6 md:w-80 md:p-8">
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
  );
}

/**
 * 受講者の声セクション
 * 関連チャンネル同型の横スクロールマーキー
 */
export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" variant="card" atmosphere="glow-right">
      <AnimatedSection>
        <SectionHeader
          label="Voice"
          title="受講者の声"
          description="実際にスクールで学んだ方の体験談をお届けします。"
        />
      </AnimatedSection>

      <AnimatedSection>
        <HorizontalMarquee speedClass="channel-marquee-slow" className="gap-5">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </HorizontalMarquee>
      </AnimatedSection>
    </SectionWrapper>
  );
}

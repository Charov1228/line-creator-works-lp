"use client";

import { stats, channels } from "@/data/content";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/AnimatedSection";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

/**
 * 実績紹介セクション
 * 数字で信頼性・権威性を訴求
 */
export function StatsSection() {
  return (
    <SectionWrapper id="stats" variant="card">
      <AnimatedSection>
        <SectionHeader
          label="Track Record"
          title="けーさんとたろー関連の実績"
          description="YouTubeで培った編集ノウハウと、大量の動画制作実績。だからこそ、現場で通用するスクールが作れます。"
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="rounded-2xl border border-white/10 bg-black/50 p-6 text-center transition hover:border-line-green/30 hover:bg-card-hover">
              <p className="text-3xl font-bold text-line-green md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-white/40">{stat.note}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* 運営チャンネル */}
      <AnimatedSection className="mt-16">
        <h3 className="mb-8 text-center text-lg font-semibold text-white">
          関連チャンネル（10チャンネル以上）
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/50 transition hover:border-white/20"
            >
              <PlaceholderImage
                src={channel.image}
                alt={channel.name}
                aspectRatio="aspect-video"
                rounded="none"
              />
              <div className="p-4">
                <p className="font-semibold text-white group-hover:text-line-green transition">
                  {channel.name}
                </p>
                <p className="mt-1 text-sm text-white/50">{channel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

"use client";

import Image from "next/image";
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

/**
 * 実績紹介セクション
 * 数字で信頼性・権威性を訴求
 */
export function StatsSection() {
  const loopChannels = [...channels, ...channels];

  return (
    <SectionWrapper id="stats" variant="card">
      <AnimatedSection>
        <SectionHeader
          label="Track Record"
          title="けーさんとたろー関連の実績"
          description="YouTubeで培った編集ノウハウと、大量の動画制作実績。だからこそ、現場で通用するスクールが作れます。"
        />
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
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

      {/* 関連チャンネル：横一列を常時スクロール */}
      <AnimatedSection className="mt-16">
        <h3 className="mb-8 text-center text-lg font-semibold text-white">
          関連チャンネル（{channels.length}チャンネル）
        </h3>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card to-transparent md:w-16" />
          <div className="channel-marquee flex w-max gap-4 py-2">
            {loopChannels.map((channel, index) => (
              <a
                key={`${channel.name}-${index}`}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-40 shrink-0 flex-col items-center rounded-2xl border border-white/15 bg-black/40 px-3 py-5 text-center transition hover:border-line-green/40 hover:bg-card-hover sm:w-44 md:w-48 md:px-4 md:py-6"
              >
                <div className="relative size-20 overflow-hidden rounded-full sm:size-24">
                  <Image
                    src={channel.image}
                    alt={channel.name}
                    fill
                    sizes="96px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 line-clamp-2 text-sm font-semibold leading-snug text-white transition group-hover:text-line-green">
                  {channel.name}
                </p>
                <p className="mt-1 text-xs text-white/40">{channel.description}</p>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

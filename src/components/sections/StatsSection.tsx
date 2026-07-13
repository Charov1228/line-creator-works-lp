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

      {/* 関連チャンネル */}
      <AnimatedSection className="mt-16">
        <h3 className="mb-10 text-center text-lg font-semibold text-white">
          関連チャンネル（10チャンネル以上）
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-white/15 bg-black/40 px-3 py-5 text-center transition hover:border-line-green/40 hover:bg-card-hover md:px-4 md:py-6"
            >
              <div className="relative size-20 overflow-hidden rounded-full sm:size-24 md:size-28">
                <Image
                  src={channel.image}
                  alt={channel.name}
                  fill
                  sizes="112px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-sm font-semibold leading-snug text-white transition group-hover:text-line-green md:text-base">
                {channel.name}
              </p>
              <p className="mt-1 text-xs text-white/40">{channel.description}</p>
            </a>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}

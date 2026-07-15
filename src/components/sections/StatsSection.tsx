"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, List, X } from "lucide-react";
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
  const [listOpen, setListOpen] = useState(false);

  useEffect(() => {
    if (!listOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setListOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [listOpen]);

  return (
    <SectionWrapper id="stats" variant="card">
      <AnimatedSection>
        <SectionHeader
          label="Track Record"
          title="けーさんとたろー関連の実績"
          description={
            <>
              YouTubeで培った編集ノウハウと、大量の動画制作実績。
              <br />
              だからこそ現場で通用するスクールが作れます。
            </>
          }
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
          関連チャンネル
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
                <p className="mt-1 text-xs font-medium text-line-green/80">
                  登録者 {channel.subscribers}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setListOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-line-green/40 hover:bg-line-green/10 hover:text-line-green"
          >
            <List className="size-4" />
            一覧を確認する
          </button>
        </div>
      </AnimatedSection>

      {listOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setListOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="channel-list-title"
            className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-6">
              <div>
                <p className="text-xs font-medium tracking-widest text-line-green uppercase">
                  Channels
                </p>
                <h4
                  id="channel-list-title"
                  className="mt-1 text-lg font-bold text-white"
                >
                  関連チャンネル一覧
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setListOpen(false)}
                className="rounded-full border border-white/15 p-2 text-white/60 transition hover:border-white/30 hover:text-white"
                aria-label="閉じる"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="max-h-[calc(85vh-5rem)] overflow-y-auto px-5 py-4 md:px-6">
              <ul className="space-y-3">
                {channels.map((channel) => (
                  <li key={channel.name}>
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-3 transition hover:border-line-green/30 hover:bg-card-hover"
                    >
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={channel.image}
                          alt={channel.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-white group-hover:text-line-green">
                          {channel.name}
                        </p>
                        <p className="mt-1 text-xs text-white/45">
                          {channel.description}
                        </p>
                        <p className="mt-1 text-sm font-medium text-line-green/90">
                          登録者 {channel.subscribers}
                        </p>
                      </div>
                      <ExternalLink className="size-4 shrink-0 text-white/30 transition group-hover:text-line-green" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}

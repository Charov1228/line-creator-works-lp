"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import { Logo } from "@/components/shared/Logo";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import {
  OPENING_DONE_EVENT,
  OPENING_DURATION_DESKTOP_MS,
  OPENING_DURATION_MOBILE_MS,
} from "@/components/shared/OpeningAnimation";
import { TypewriterHeadline } from "@/components/shared/TypewriterHeadline";
import { siteConfig } from "@/data/site-config";
import { useIsMobile } from "@/hooks/useIsMobile";

/**
 * ファーストビュー
 * OPのフェード完了後に演出開始（同時始動によるカクつきを避ける）
 */
export function HeroSection() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [openingDone, setOpeningDone] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setOpeningDone(true);
      return;
    }

    const done = () => setOpeningDone(true);
    const fallbackMs = isMobile
      ? OPENING_DURATION_MOBILE_MS + 400
      : OPENING_DURATION_DESKTOP_MS + 550;
    const timer = window.setTimeout(done, fallbackMs);
    window.addEventListener(OPENING_DONE_EVENT, done);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPENING_DONE_EVENT, done);
    };
  }, [reduce, isMobile]);

  // 画像とCTAは同じ尺・同じ遅延。タイピング直後から順に出す
  const copyDelay = reduce ? 0 : isMobile ? 0.85 : 2.4;
  const badgeDelay = reduce ? 0 : isMobile ? 0.98 : 2.55;
  const ctaDelay = reduce ? 0 : isMobile ? 1.1 : 2.7;
  const enterDuration = isMobile ? 0.45 : 0.6;
  const enterTransition = {
    duration: enterDuration,
    delay: openingDone ? ctaDelay : 0,
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black pt-14 md:pt-20">
      <AmbientBackground atmosphere="hero" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-5 py-3 pb-5 md:justify-center md:px-8 md:py-16 lg:max-w-7xl lg:py-20">
        <div className="grid min-h-0 flex-1 items-stretch gap-3 md:flex-none md:items-center md:gap-6 lg:grid-cols-[0.9fr_1.25fr] lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-8">
          <div className="min-w-0 shrink-0">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={
                openingDone || reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: reduce ? 0 : 0.05 }}
              className="mb-6 hidden items-center gap-4 md:flex"
            >
              <Logo size="lg" />
              <div className="min-w-0">
                <p className="text-sm font-medium tracking-wider text-line-green">
                  {siteConfig.brand} 公式
                </p>
                <p className="text-xl font-bold text-white">
                  Line Creator Works
                </p>
              </div>
            </motion.div>

            {openingDone || reduce ? (
              <TypewriterHeadline
                startDelayMs={reduce ? 0 : isMobile ? 40 : 400}
                className="text-[clamp(1.9rem,7.2vw,2.65rem)] md:text-[clamp(1.55rem,5.4vw,2.65rem)]"
              />
            ) : (
              <h1
                aria-hidden
                className="invisible text-[clamp(1.9rem,7.2vw,2.65rem)] leading-[1.3] font-bold tracking-tight md:text-[clamp(1.55rem,5.4vw,2.65rem)]"
              >
                <span className="block whitespace-nowrap">
                  学ぶだけで終わらない。
                </span>
                <span className="mt-0.5 block md:mt-1">仕事で使えるスキルへ。</span>
              </h1>
            )}

            <motion.p
              initial={false}
              animate={
                openingDone || reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: isMobile ? 16 : 24 }
              }
              transition={{
                duration: enterDuration,
                delay: openingDone ? copyDelay : 0,
              }}
              className="mt-3 max-w-lg text-[0.875rem] leading-[1.7] text-white/60 sm:text-[0.9375rem] md:mt-6 md:text-lg md:leading-[1.8]"
            >
              現役編集者が教え、
              <br />
              卒業後はスキルに応じた案件紹介が出来ます。
            </motion.p>

            <motion.div
              initial={false}
              animate={
                openingDone || reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: isMobile ? 16 : 24 }
              }
              transition={{
                duration: enterDuration,
                delay: openingDone ? badgeDelay : 0,
              }}
              className="mt-3 flex flex-nowrap gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-8 md:gap-3 [&::-webkit-scrollbar]:hidden"
            >
              {[
                "初心者・未経験歓迎",
                "完全オンライン",
                "現役編集者が指導",
                "案件紹介",
              ].map((badge) => (
                <span
                  key={badge}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] whitespace-nowrap text-white/70 md:px-3 md:py-1.5 md:text-xs"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={false}
              animate={
                openingDone || reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={enterTransition}
              className="mt-10 hidden md:block"
            >
              <LineCtaButton
                size="lg"
                className="md:h-14 md:px-10 md:text-lg"
                label="公式LINEから無料面談を予約する"
                sublabel="個別相談で詳しくご案内"
              />
            </motion.div>
          </div>

          {/* 画像: CTAと同じ timing / opacity+y で登場 */}
          <motion.div
            initial={false}
            animate={
              openingDone || reduce
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: isMobile ? 16 : 24 }
            }
            transition={enterTransition}
            className="relative mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col lg:row-span-2 lg:mx-0 lg:max-w-none lg:flex-none"
          >
            <div className="absolute -top-1.5 right-1 z-10 sm:-top-3 sm:right-2">
              <div className="rounded-full border border-line-green/30 bg-black/85 px-2.5 py-1 backdrop-blur-md sm:px-4 sm:py-2">
                <p className="text-[9px] font-medium tracking-wider text-line-green sm:text-xs">
                  {siteConfig.brand} 運営
                </p>
              </div>
            </div>

            <div className="glow-green relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-card p-1.5 sm:rounded-3xl sm:p-2 md:block md:flex-none">
              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-xl sm:aspect-[4/3] sm:min-h-0 sm:flex-none sm:rounded-2xl lg:aspect-[5/4] lg:min-h-[420px]">
                <Image
                  src="/images/hero.png"
                  alt="けーさんとたろー —— 動画編集を仕事にする第一歩"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2.5 pt-10 sm:px-5 sm:pb-5 sm:pt-16">
                  <p className="text-xs font-semibold text-white sm:text-base md:text-lg">
                    未来を一緒に編集しよう。
                  </p>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-sm">
                    現場の編集チームが、あなたの成長をサポートします。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={
              openingDone || reduce
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={enterTransition}
            className="md:hidden"
          >
            <LineCtaButton
              size="lg"
              label="公式LINEから無料面談を予約する"
              sublabel="個別相談で詳しくご案内"
            />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: openingDone || reduce ? 1 : 0 }}
          transition={{ delay: openingDone ? 0.6 : 0 }}
          className="mt-3 hidden justify-center md:mt-12 md:flex"
        >
          <a
            href="#problems"
            className="flex flex-col items-center gap-2 text-white/30 transition hover:text-white/60"
            aria-label="下にスクロール"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="size-4 motion-safe:animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

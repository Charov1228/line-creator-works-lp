"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import { Logo } from "@/components/shared/Logo";
import { siteConfig } from "@/data/site-config";

/**
 * ファーストビュー
 * 受講後の未来 → 特徴 → CTA → けーさんとたろーの安心感、の順で視線誘導
 * スマホは1画面（100svh）に収まるコンパクト構成
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black pt-16 md:pt-20">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-line-green/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 size-[400px] rounded-full bg-line-green/3 blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-4 md:px-8 md:py-16 lg:py-20">
        <div className="grid items-center gap-4 md:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* 左：ブランド → 未来コピー → 特徴 → CTA */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 flex items-center gap-3 md:mb-6 md:gap-4"
            >
              <span className="md:hidden">
                <Logo size="md" />
              </span>
              <span className="hidden md:block">
                <Logo size="lg" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-medium tracking-wider text-line-green md:text-sm">
                  {siteConfig.brand} 公式
                </p>
                <p className="text-base font-bold text-white md:text-xl">
                  Line Creator Works
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(1.4rem,4.6vw,2.65rem)] leading-[1.3] font-bold tracking-tight text-white"
            >
              <span className="block whitespace-nowrap">
                学ぶだけで終わらない。
              </span>
              <span className="mt-0.5 block whitespace-nowrap md:mt-1">
                <span className="text-gradient-green">仕事で使えるスキル</span>
                <span className="text-white">へ。</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 max-w-lg text-[0.8125rem] leading-[1.7] text-white/60 sm:text-[0.9375rem] md:mt-6 md:text-lg md:leading-[1.8]"
            >
              現役編集者が教え、
              <br />
              卒業後はスキルに応じた案件紹介が出来ます。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 md:mt-10"
            >
              <LineCtaButton
                size="lg"
                className="md:h-14 md:px-10 md:text-lg"
                label="公式LINEから無料面談を予約する"
                sublabel="個別相談で詳しくご案内"
              />
            </motion.div>
          </div>

          {/* 右：けーさんとたろーの安心感（画像） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="absolute -top-1.5 right-1 z-10 sm:-top-3 sm:right-2">
              <div className="rounded-full border border-line-green/30 bg-black/85 px-2.5 py-1 backdrop-blur-md sm:px-4 sm:py-2">
                <p className="text-[9px] font-medium tracking-wider text-line-green sm:text-xs">
                  {siteConfig.brand} 運営
                </p>
              </div>
            </div>

            <div className="glow-green relative overflow-hidden rounded-2xl border border-white/10 bg-card p-1.5 sm:rounded-3xl sm:p-2">
              <div className="relative h-[min(22svh,38vw)] w-full overflow-hidden rounded-xl sm:aspect-[4/3] sm:h-auto sm:rounded-2xl lg:aspect-[4/3]">
                <Image
                  src="/images/hero.png"
                  alt="けーさんとたろー —— 動画編集を仕事にする第一歩"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2.5 pt-10 sm:px-5 sm:pb-5 sm:pt-16">
                  <p className="text-xs font-semibold text-white sm:text-base">
                    好きな場所で学べる、新しい働き方へ。
                  </p>
                  <p className="mt-0.5 text-[10px] text-white/60 sm:mt-1 sm:text-sm">
                    現場の編集チームが、あなたの成長をサポートします。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-3 hidden justify-center md:mt-12 md:flex"
        >
          <a
            href="#problems"
            className="flex flex-col items-center gap-2 text-white/30 transition hover:text-white/60"
            aria-label="下にスクロール"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

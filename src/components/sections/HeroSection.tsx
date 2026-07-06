"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import { Logo } from "@/components/shared/Logo";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { siteConfig } from "@/data/site-config";

/**
 * ファーストビュー
 * けーさんとたろーのスクールであることを1画面で明確に訴求
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-line-green/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 size-[400px] rounded-full bg-line-green/3 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-5 py-12 md:px-8 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            {/* ブランドロゴ＋スクール名 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-4"
            >
              <Logo size="lg" />
              <div>
                <p className="text-xs font-medium tracking-wider text-line-green md:text-sm">
                  {siteConfig.brand}
                </p>
                <p className="text-lg font-bold text-white md:text-xl">
                  公式 動画編集スクール
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[1.75rem] leading-[1.35] font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.3]"
            >
              <span className="block">
                <span className="text-gradient-green">{siteConfig.brand}</span>
                <span className="text-white">の</span>
              </span>
              <span className="block">動画編集スクール</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-lg text-[0.9375rem] leading-[1.8] text-white/60 sm:text-base md:mt-6 md:text-lg md:leading-[1.8]"
            >
              学んで終わりじゃない。
              <br />
              仕事につなげる、約2ヶ月の完全オンラインプログラム。
              <br />
              現役編集者が教え、卒業後も案件紹介制度でキャリアをサポートします。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3"
            >
              {["完全オンライン", "初心者歓迎", "現役編集者が指導", "案件紹介制度あり"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                  >
                    {badge}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 md:mt-10"
            >
              <LineCtaButton
                size="xl"
                sublabel="無料登録 → 個別面談のご案内"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glow-green relative rounded-3xl border border-white/10 bg-card p-2">
              <PlaceholderImage
                src="/images/hero.jpg"
                alt="けーさんとたろー 動画編集スクール"
                aspectRatio="aspect-[4/3]"
                rounded="lg"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-2 rounded-2xl border border-white/10 bg-black/90 p-3 backdrop-blur-xl sm:-bottom-6 sm:-left-4 sm:p-4 md:-left-8"
            >
              <p className="text-xl font-bold text-line-green sm:text-2xl">260万+</p>
              <p className="text-[10px] text-white/50 sm:text-xs">SNS総フォロワー</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -top-3 -right-2 rounded-2xl border border-white/10 bg-black/90 p-3 backdrop-blur-xl sm:-top-4 sm:-right-4 sm:p-4"
            >
              <p className="text-xl font-bold text-line-green sm:text-2xl">39億+</p>
              <p className="text-[10px] text-white/50 sm:text-xs">YouTube総再生数</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex justify-center md:mt-16"
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

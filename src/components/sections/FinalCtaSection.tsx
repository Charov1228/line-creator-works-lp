"use client";

import { motion } from "framer-motion";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import { siteConfig } from "@/data/site-config";

/**
 * 最終CTAセクション
 * 読了後のコンバージョンポイント
 */
export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-line-green/5 to-black" />
      <div className="absolute top-1/2 left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-line-green/10 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest text-line-green uppercase">
            Get Started
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            まずは、公式LINEに
            <br />
            登録してください。
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            登録後、無料個別面談のご案内をお送りします。
            {siteConfig.brand}の編集チームが直接お話を伺い、
            あなたに最適なコースをご提案します。
          </p>

          <div className="mt-10">
            <LineCtaButton
              size="xl"
              sublabel="無料・30秒で登録完了 → 個別面談のご案内"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/30">
            <span>✓ 完全オンライン</span>
            <span>✓ 初心者歓迎</span>
            <span>✓ 無料個別面談あり</span>
            <span>✓ しつこい勧誘なし</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

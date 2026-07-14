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
            まずは無料個別相談で、
            <br />
            詳しく聞いてみませんか。
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            公式LINEから無料面談を予約できます。
            {siteConfig.brand}の編集チームが直接お話を伺い、
            あなたに合う学び方をご案内します。未経験の方もお気軽にご相談ください。
          </p>

          <div className="mt-10">
            <LineCtaButton
              size="xl"
              label="公式LINEから無料面談を予約する"
              sublabel="公式LINE限定でスクールの詳細をご案内"
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

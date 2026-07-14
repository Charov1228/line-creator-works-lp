"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  /** company: 事業ページ用（ナビを省略） */
  variant?: "default" | "company";
}

/**
 * 固定ヘッダー
 * スクロール後にCTAを常時表示し、CV導線を維持
 */
export function Header({ variant = "default" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const isCompany = variant === "company";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setVisible(y > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
          <Logo size="sm" href="/" showText />

          {isCompany ? (
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-line-green/40 hover:bg-line-green/10 hover:text-line-green"
            >
              <ArrowLeft className="size-4" />
              スクールTOPへ
            </Link>
          ) : (
            <>
              <nav className="hidden items-center gap-8 md:flex">
                <a href="#about" className="text-sm text-white/60 transition hover:text-white">
                  スクールについて
                </a>
                <a href="#curriculum" className="text-sm text-white/60 transition hover:text-white">
                  カリキュラム
                </a>
                <a href="#instructors" className="text-sm text-white/60 transition hover:text-white">
                  講師紹介
                </a>
                <Link
                  href="/line-cast-support"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  LINE CAST SUPPORT
                </Link>
                <a href="#faq" className="text-sm text-white/60 transition hover:text-white">
                  よくある質問
                </a>
              </nav>

              <div className="hidden md:block">
                <LineCtaButton size="sm" label="無料面談を予約" />
              </div>
            </>
          )}
        </div>
      </header>

      {!isCompany && (
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 bg-black/95 p-4 backdrop-blur-xl md:hidden"
            >
              <LineCtaButton
                size="default"
                fullWidth
                label="公式LINEから無料面談を予約する"
                sublabel="スクール詳細はLINE限定でご案内"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

"use client";

import { motion, type Variants, type ViewportOptions } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

const fadeUpDesktop: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * スマホ: 画面に入り始めた瞬間に見える長さ
 * （早すぎず・黒画面が続かないバランス）
 */
const fadeUpMobile: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** PC: 見やすい帯に入ってから */
const REVEAL_VIEWPORT_BLOCK_DESKTOP: ViewportOptions = {
  once: true,
  margin: "-10% 0px -22% 0px",
  amount: 0.4,
};

/**
 * スマホ: 要素の先端が画面下端付近に入った直後に発火
 * - amount "some": 高いカード列でも「全体の○%」待ちにならない
 * - 下側 -10%: 画面外のまま終わらないよう、少し見えてから開始
 */
const REVEAL_VIEWPORT_BLOCK_MOBILE: ViewportOptions = {
  once: true,
  margin: "0px 0px -10% 0px",
  amount: "some",
};

const REVEAL_VIEWPORT_STAGGER_DESKTOP: ViewportOptions = {
  once: true,
  margin: "-8% 0px -20% 0px",
  amount: 0.35,
};

const REVEAL_VIEWPORT_STAGGER_MOBILE: ViewportOptions = {
  once: true,
  margin: "0px 0px -8% 0px",
  amount: "some",
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * スクロール連動のフェードイン
 * スマホは「見えたタイミングで動きが目に入る」発火・尺に調整
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const isMobile = useIsMobile();
  const fadeUp = isMobile ? fadeUpMobile : fadeUpDesktop;
  const visibleTransition = (
    fadeUp.visible as { transition: Record<string, unknown> }
  ).transition;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={
        isMobile ? REVEAL_VIEWPORT_BLOCK_MOBILE : REVEAL_VIEWPORT_BLOCK_DESKTOP
      }
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...visibleTransition,
            // 連続カードの遅延は残しつつ、待ちすぎない
            delay: isMobile ? delay * 0.65 : delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

/** 子要素を順番にアニメーション表示 */
export function StaggerContainer({
  children,
  className,
  staggerDelay,
}: StaggerContainerProps) {
  const isMobile = useIsMobile();
  const resolvedStagger = staggerDelay ?? 0.1;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={
        isMobile
          ? REVEAL_VIEWPORT_STAGGER_MOBILE
          : REVEAL_VIEWPORT_STAGGER_DESKTOP
      }
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: resolvedStagger },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isMobile = useIsMobile();
  const fadeUp = isMobile ? fadeUpMobile : fadeUpDesktop;

  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}

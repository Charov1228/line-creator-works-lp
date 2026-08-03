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

const fadeUpMobile: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/** PC: 見やすい帯に入ってから。スマホ: 画面下から近づいた時点で発火（黒い余白スクロールを防ぐ） */
const REVEAL_VIEWPORT_BLOCK_DESKTOP: ViewportOptions = {
  once: true,
  margin: "-10% 0px -22% 0px",
  amount: 0.4,
};

const REVEAL_VIEWPORT_BLOCK_MOBILE: ViewportOptions = {
  once: true,
  // 下方向に検出範囲を広げ、要素が画面に入る手前で開始
  margin: "0px 0px 45% 0px",
  amount: "some",
};

const REVEAL_VIEWPORT_STAGGER_DESKTOP: ViewportOptions = {
  once: true,
  margin: "-8% 0px -20% 0px",
  amount: 0.35,
};

const REVEAL_VIEWPORT_STAGGER_MOBILE: ViewportOptions = {
  once: true,
  margin: "0px 0px 40% 0px",
  amount: "some",
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * スクロール連動のフェードインアニメーション
 * 各セクションのラッパーとして使用（スマホは発火を早め・短めに）
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
            delay: isMobile ? delay * 0.5 : delay,
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
  const resolvedStagger =
    staggerDelay ?? (isMobile ? 0.06 : 0.1);

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

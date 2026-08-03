"use client";

import { createContext, useContext } from "react";
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

/** スマホ: 画面内で動きが目で追える尺 */
const fadeUpMobile: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideUpMobile: Variants = {
  hidden: { opacity: 1, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const REVEAL_VIEWPORT_BLOCK_DESKTOP: ViewportOptions = {
  once: true,
  margin: "-10% 0px -22% 0px",
  amount: 0.4,
};

/**
 * 通常セクション（スマホ）
 * 画面下 30% 付近に先端が来たあたりで発火
 */
const REVEAL_VIEWPORT_BLOCK_MOBILE: ViewportOptions = {
  once: true,
  margin: "0px 0px -30% 0px",
  amount: "some",
};

/**
 * ヒーロー直後（悩み）
 * 直前が黒背景なので、先端が画面下端に入る手前〜入った直後に発火。
 * 下 30〜40% まで来たときには、他セクション同様に見え始めている状態にする
 */
const REVEAL_VIEWPORT_BLOCK_MOBILE_EARLY: ViewportOptions = {
  once: true,
  margin: "0px 0px 20% 0px",
  amount: "some",
};

const REVEAL_VIEWPORT_STAGGER_DESKTOP: ViewportOptions = {
  once: true,
  margin: "-8% 0px -20% 0px",
  amount: 0.35,
};

const REVEAL_VIEWPORT_STAGGER_MOBILE: ViewportOptions = {
  once: true,
  margin: "0px 0px -28% 0px",
  amount: "some",
};

const REVEAL_VIEWPORT_STAGGER_MOBILE_EARLY: ViewportOptions = {
  once: true,
  margin: "0px 0px 18% 0px",
  amount: "some",
};

const StaggerSlideContext = createContext(false);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  slideOnly?: boolean;
  /** ヒーロー直後など、黒帯が長くなりやすい箇所向けに手前で発火 */
  early?: boolean;
}

/**
 * スクロール連動の登場アニメーション
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  slideOnly = false,
  early = false,
}: AnimatedSectionProps) {
  const isMobile = useIsMobile();
  const fadeUp = isMobile
    ? slideOnly
      ? slideUpMobile
      : fadeUpMobile
    : fadeUpDesktop;
  const visibleTransition = (
    fadeUp.visible as { transition: Record<string, unknown> }
  ).transition;

  const viewport = !isMobile
    ? REVEAL_VIEWPORT_BLOCK_DESKTOP
    : early
      ? REVEAL_VIEWPORT_BLOCK_MOBILE_EARLY
      : REVEAL_VIEWPORT_BLOCK_MOBILE;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...visibleTransition,
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
  slideOnly?: boolean;
  early?: boolean;
}

/** 子要素を順番にアニメーション表示 */
export function StaggerContainer({
  children,
  className,
  staggerDelay,
  slideOnly = false,
  early = false,
}: StaggerContainerProps) {
  const isMobile = useIsMobile();
  const resolvedStagger = staggerDelay ?? (isMobile ? 0.12 : 0.1);

  const viewport = !isMobile
    ? REVEAL_VIEWPORT_STAGGER_DESKTOP
    : early
      ? REVEAL_VIEWPORT_STAGGER_MOBILE_EARLY
      : REVEAL_VIEWPORT_STAGGER_MOBILE;

  return (
    <StaggerSlideContext.Provider value={slideOnly}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
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
    </StaggerSlideContext.Provider>
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
  const slideOnly = useContext(StaggerSlideContext);
  const fadeUp = isMobile
    ? slideOnly
      ? slideUpMobile
      : fadeUpMobile
    : fadeUpDesktop;

  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}

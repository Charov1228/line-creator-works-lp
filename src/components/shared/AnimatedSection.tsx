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

/**
 * ヒーロー直後など、背景が黒のときに opacity:0 だと
 * 「真っ黒な画面をスクロールしている」ように見えるため不透明のままスライド
 */
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

const REVEAL_VIEWPORT_BLOCK_MOBILE: ViewportOptions = {
  once: true,
  margin: "0px 0px -22% 0px",
  amount: "some",
};

const REVEAL_VIEWPORT_STAGGER_DESKTOP: ViewportOptions = {
  once: true,
  margin: "-8% 0px -20% 0px",
  amount: 0.35,
};

const REVEAL_VIEWPORT_STAGGER_MOBILE: ViewportOptions = {
  once: true,
  margin: "0px 0px -18% 0px",
  amount: "some",
};

const StaggerSlideContext = createContext(false);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /**
   * 黒背景の直後など、フェードだと消えて見える箇所向け。
   * 不透明のままスライドインする
   */
  slideOnly?: boolean;
}

/**
 * スクロール連動の登場アニメーション
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  slideOnly = false,
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
}

/** 子要素を順番にアニメーション表示 */
export function StaggerContainer({
  children,
  className,
  staggerDelay,
  slideOnly = false,
}: StaggerContainerProps) {
  const isMobile = useIsMobile();
  const resolvedStagger = staggerDelay ?? (isMobile ? 0.12 : 0.1);

  return (
    <StaggerSlideContext.Provider value={slideOnly}>
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

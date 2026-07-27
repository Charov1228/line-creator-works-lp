"use client";

import { motion, type Variants, type ViewportOptions } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * スクロール表示の発火位置
 * 下端ギリギリではなく、読みやすい位置に入ってから一度だけアニメーション
 */
const REVEAL_VIEWPORT_BLOCK: ViewportOptions = {
  once: true,
  // 上下を少し狭め、要素が画面の見やすい帯に入ってから開始
  margin: "-10% 0px -22% 0px",
  amount: 0.4,
};

const REVEAL_VIEWPORT_STAGGER: ViewportOptions = {
  once: true,
  margin: "-8% 0px -20% 0px",
  amount: 0.35,
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * スクロール連動のフェードインアニメーション
 * 各セクションのラッパーとして使用
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT_BLOCK}
      variants={{
        hidden: fadeUpVariants.hidden,
        visible: {
          ...fadeUpVariants.visible,
          transition: {
            ...(fadeUpVariants.visible as { transition: object }).transition,
            delay,
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
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT_STAGGER}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
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
  return (
    <motion.div variants={fadeUpVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}

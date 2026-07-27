"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeOnlyVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * スクロール連動のフェードインアニメーション
 * prefers-reduced-motion 時は移動なしの簡易フェード
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();
  const base = reduce ? fadeOnlyVariants : fadeUpVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: base.hidden,
        visible: {
          ...base.visible,
          transition: {
            ...(base.visible as { transition: object }).transition,
            delay: reduce ? 0 : delay,
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
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : staggerDelay,
          },
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
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={reduce ? fadeOnlyVariants : fadeUpVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Whyセクション用：スクロールにわずかに連動する曲線レイヤー
 * スクロールジャックなし・背景のみ
 */
export function WhyParallaxArc() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -60]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [-2, 2]
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div style={{ y, rotate }} className="absolute inset-0 will-change-transform">
        <svg
          className="absolute -top-[8%] left-1/2 h-[85%] w-[170%] -translate-x-1/2 max-md:opacity-50"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 480 C 200 80, 1000 80, 1250 480"
            stroke="rgba(6,199,85,0.14)"
            strokeWidth="52"
            strokeLinecap="round"
          />
          <path
            d="M0 520 C 280 160, 920 160, 1200 520"
            stroke="rgba(6,199,85,0.07)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
      <div className="ambient-drift-b absolute -right-[15%] bottom-[-20%] size-[45vmin] rounded-full bg-line-green/[0.04] blur-[100px]" />
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

type LineConfig = {
  d: string;
  strokeWidth: number;
  opacity: number;
  delay: number;
  duration: number;
};

/** 透明度を下げつつ、線は太くして存在感を出す */
const whyLines: LineConfig[] = [
  { d: "M-120 720 L 1320 40", strokeWidth: 72, opacity: 0.09, delay: 0, duration: 14 },
  { d: "M-80 820 L 1280 160", strokeWidth: 48, opacity: 0.06, delay: 2.5, duration: 16 },
  { d: "M80 900 L 1120 0", strokeWidth: 28, opacity: 0.045, delay: 5, duration: 18 },
];

const careerLines: LineConfig[] = [
  { d: "M-100 100 L 1300 680", strokeWidth: 68, opacity: 0.085, delay: 0, duration: 15 },
  { d: "M-60 0 L 1260 760", strokeWidth: 44, opacity: 0.055, delay: 3, duration: 17 },
  { d: "M120 -40 L 1080 800", strokeWidth: 26, opacity: 0.04, delay: 6, duration: 19 },
];

interface AnimatedStraightLinesProps {
  variant?: "why" | "career";
}

/**
 * 太い直線が引かれるように動く背景レイヤー
 */
export function AnimatedStraightLines({
  variant = "why",
}: AnimatedStraightLinesProps) {
  const reduce = useReducedMotion();
  const lines = variant === "career" ? careerLines : whyLines;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map((line, index) => (
          <motion.path
            key={`${variant}-${index}`}
            d={line.d}
            stroke={`rgba(6,199,85,${line.opacity})`}
            strokeWidth={line.strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? line.opacity : 0 }}
            animate={
              reduce
                ? { pathLength: 1, opacity: line.opacity }
                : {
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, line.opacity, line.opacity * 0.8, 0],
                  }
            }
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: reduce ? 0 : Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
              times: [0, 0.45, 0.65, 1],
            }}
          />
        ))}
      </svg>
      <div className="ambient-drift-b absolute -right-[12%] bottom-[-15%] size-[48vmin] rounded-full bg-line-green/[0.07] blur-[100px] max-md:hidden" />
    </div>
  );
}

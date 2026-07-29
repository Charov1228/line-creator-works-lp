"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterLabelProps {
  text: string;
  startDelayMs?: number;
}

/**
 * セクションラベル用の軽いタイピング演出
 * 小さな英字ラベル向けなので、短時間で完了させる
 */
export function TypewriterLabel({
  text,
  startDelayMs = 120,
}: TypewriterLabelProps) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? text : "");
  const [showCursor, setShowCursor] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;

    let cancelled = false;
    const timers: number[] = [];
    let index = 0;

    const tick = () => {
      if (cancelled) return;
      index += 1;
      setValue(text.slice(0, index));

      if (index < text.length) {
        timers.push(window.setTimeout(tick, 45));
      } else {
        timers.push(
          window.setTimeout(() => {
            if (!cancelled) setShowCursor(false);
          }, 500)
        );
      }
    };

    timers.push(window.setTimeout(tick, startDelayMs));

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [reduce, startDelayMs, text]);

  return (
    <>
      {value}
      {showCursor && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.95em] w-[0.08em] translate-y-[0.08em] bg-line-green align-baseline motion-safe:animate-pulse"
        />
      )}
    </>
  );
}

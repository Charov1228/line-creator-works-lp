"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterLabelProps {
  text: string;
  /** 親のフェードイン後に開始する余白(ms) */
  startDelayMs?: number;
}

/**
 * セクションラベル用の軽いタイピング演出
 * 画面内に見えてから、かつ親のフェードインが進んでから開始する
 */
export function TypewriterLabel({
  text,
  startDelayMs = 750,
}: TypewriterLabelProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(reduce ? text : "");
  const [showCursor, setShowCursor] = useState(!reduce);
  const [started, setStarted] = useState(!!reduce);

  useEffect(() => {
    if (reduce) return;

    const element = ref.current;
    if (!element) return;

    let cancelled = false;
    let rafId = 0;
    let delayTimer = 0;

    const isVisiblyShown = () => {
      let node: HTMLElement | null = element;
      while (node) {
        const style = window.getComputedStyle(node);
        if (style.visibility === "hidden" || style.display === "none") {
          return false;
        }
        if (parseFloat(style.opacity) < 0.85) {
          return false;
        }
        if (node === document.body) break;
        node = node.parentElement;
      }
      return true;
    };

    const beginWhenVisible = () => {
      if (cancelled) return;
      if (!isVisiblyShown()) {
        rafId = window.requestAnimationFrame(beginWhenVisible);
        return;
      }
      delayTimer = window.setTimeout(() => {
        if (!cancelled) setStarted(true);
      }, startDelayMs);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        beginWhenVisible();
      },
      {
        threshold: 0.9,
        rootMargin: "0px 0px -18% 0px",
      }
    );

    observer.observe(element);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(delayTimer);
    };
  }, [reduce, startDelayMs]);

  useEffect(() => {
    if (reduce || !started) return;

    let cancelled = false;
    const timers: number[] = [];
    let index = 0;

    const tick = () => {
      if (cancelled) return;
      index += 1;
      setValue(text.slice(0, index));

      if (index < text.length) {
        timers.push(window.setTimeout(tick, 78));
      } else {
        timers.push(
          window.setTimeout(() => {
            if (!cancelled) setShowCursor(false);
          }, 700)
        );
      }
    };

    timers.push(window.setTimeout(tick, 80));

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [reduce, started, text]);

  return (
    <span ref={ref}>
      {value}
      {showCursor && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.95em] w-[0.08em] translate-y-[0.08em] bg-line-green align-baseline motion-safe:animate-pulse"
        />
      )}
    </span>
  );
}

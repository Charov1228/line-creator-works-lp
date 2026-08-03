"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

interface StrikeLineProps {
  children: React.ReactNode;
  className?: string;
  /** ラインの縦位置・色などの上書き */
  lineClassName?: string;
}

/**
 * 見出し背面を緑の太いラインが一度走る演出
 * 文字より背面・可読性を優先（スマホは発火を早めに）
 */
export function StrikeLine({
  children,
  className,
  lineClassName,
}: StrikeLineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(true);
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let delayTimer = 0;

    const isVisiblyShown = () => {
      let node: HTMLElement | null = el;
      while (node) {
        const style = window.getComputedStyle(node);
        if (style.visibility === "hidden" || style.display === "none") {
          return false;
        }
        // スマホはフェードがある程度見えてからライン開始
        const opacityFloor = isMobile ? 0.55 : 0.85;
        if (parseFloat(style.opacity) < opacityFloor) {
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
      delayTimer = window.setTimeout(
        () => {
          if (!cancelled) setActive(true);
        },
        isMobile ? 140 : 280
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        beginWhenVisible();
      },
      {
        threshold: isMobile ? 0 : 0.45,
        // 見出しが画面に入ってからライン（画面外で終わらせない）
        rootMargin: isMobile ? "0px 0px -18% 0px" : "0px 0px -12% 0px",
      }
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(delayTimer);
    };
  }, [isMobile]);

  return (
    <span ref={ref} className={cn("relative inline-block max-w-full", className)}>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-[58%] left-[-1.5%] z-0 h-[0.68em] w-[103%] -translate-y-1/2 rounded-[2px] bg-line-green/80",
          active ? "strike-line-run" : "origin-left scale-x-0 opacity-0",
          lineClassName
        )}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

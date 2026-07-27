"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StrikeLineProps {
  children: React.ReactNode;
  className?: string;
  /** ラインの縦位置（デフォルトは文字中央やや下） */
  lineClassName?: string;
}

/**
 * 見出し背面を緑の太いラインが一度走る演出
 * 文字より背面・可読性を優先
 */
export function StrikeLine({
  children,
  className,
  lineClassName,
}: StrikeLineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={cn("relative inline-block", className)}>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-[58%] left-[-2%] z-0 h-[0.42em] w-[104%] -translate-y-1/2 rounded-sm bg-line-green/45",
          active ? "strike-line-run" : "scale-x-0 opacity-0",
          lineClassName
        )}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 要素が画面下約30%ラインに達したら一度だけ true
 * セクション上端に置いた sentinel を監視して、内側ブロック基準のズレを防ぐ
 */
export function useSectionReveal(rootMargin = "0px 0px -30% 0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, revealed]);

  return { ref, revealed };
}

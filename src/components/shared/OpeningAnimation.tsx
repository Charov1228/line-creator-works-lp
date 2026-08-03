"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export const OPENING_DURATION_DESKTOP_MS = 3200;
export const OPENING_DURATION_MOBILE_MS = 2200;
export const OPENING_DONE_EVENT = "lcw:opening-done";

/**
 * LP初回表示時の全画面オープニング
 * 初回ペイントから黒で覆い、空ページのフラッシュを防ぐ
 */
export function OpeningAnimation() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const totalDurationMs = isMobile
    ? OPENING_DURATION_MOBILE_MS
    : OPENING_DURATION_DESKTOP_MS;

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisible(false);
      window.dispatchEvent(new Event(OPENING_DONE_EVENT));
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, totalDurationMs);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldReduceMotion, totalDurationMs]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        window.dispatchEvent(new Event(OPENING_DONE_EVENT));
      }}
    >
      {visible && (
        <motion.div
          key="opening"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          // 初回から表示済み。フェードアウトだけ行う
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: isMobile ? 0.28 : 0.45 } }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* スマホは blur 多層を避けてカクつきを抑制 */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute size-[min(90vw,520px)] rounded-full bg-line-green/10 blur-[120px]"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.5, 1.15, 1], opacity: [0, 0.7, 0.5] }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
              <motion.div
                className="absolute size-[min(70vw,380px)] rounded-full border border-line-green/20"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: [0.6, 1.08, 1], opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </>
          )}

          <div className="relative flex flex-col items-center px-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: isMobile ? 0.55 : 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* ロゴ内の暗い下地が四角く見えないよう、背景に馴染むソフトグロー */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 size-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,199,85,0.32)_0%,rgba(6,199,85,0.1)_42%,transparent_70%)]"
              />
              {!isMobile && (
                <motion.div
                  className="absolute -inset-6 rounded-full bg-line-green/20 blur-2xl"
                  animate={{ opacity: [0, 0.8, 0.45] }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              )}
              <Image
                src="/images/logo.png"
                alt=""
                width={200}
                height={200}
                priority
                className="relative size-[min(42vw,200px)] object-contain drop-shadow-[0_0_28px_rgba(6,199,85,0.45)]"
              />
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: isMobile ? 0.25 : 0.65,
                duration: isMobile ? 0.4 : 0.55,
                ease: "easeOut",
              }}
            >
              <p className="text-sm font-medium tracking-[0.2em] text-line-green md:text-base">
                けーさんとたろー 公式
              </p>
              <p className="mt-2 text-lg font-bold text-white md:text-xl">
                Line Creator Works
              </p>
            </motion.div>

            <motion.div
              className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-line-green/60 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: isMobile ? 0.4 : 0.9,
                duration: isMobile ? 0.35 : 0.6,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

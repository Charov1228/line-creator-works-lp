"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const TOTAL_DURATION_MS = 3200;

/**
 * LP初回表示時の全画面オープニングアニメーション
 * 紋章ロゴを中心にフェードイン → ホールド → 画面全体がフェードアウト
 */
export function OpeningAnimation() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);

    if (shouldReduceMotion) {
      setVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, TOTAL_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldReduceMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="opening"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{
            duration: 2.8,
            times: [0, 0.72, 1],
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />

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

          <div className="relative flex flex-col items-center px-6">
            <motion.div
              initial={{ scale: 0.55, opacity: 0, filter: "blur(10px)" }}
              animate={{
                scale: [0.55, 1.04, 1],
                opacity: [0, 1, 1],
                filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
              }}
              transition={{
                duration: 1.1,
                times: [0, 0.7, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-6 rounded-full bg-line-green/20 blur-2xl"
                animate={{ opacity: [0, 0.8, 0.45] }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <Image
                src="/images/logo.png"
                alt=""
                width={200}
                height={200}
                priority
                className="relative size-[min(42vw,200px)] object-contain drop-shadow-[0_0_40px_rgba(6,199,85,0.35)]"
              />
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55, ease: "easeOut" }}
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
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            />
          </div>

          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

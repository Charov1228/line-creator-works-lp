"use client";

import { useEffect, useState } from "react";

const MOBILE_MQ = "(max-width: 767px)";

function getIsMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOBILE_MQ).matches;
}

/**
 * Tailwind の md 未満をモバイルとして扱う
 * クライアントでは初回から正しい値を使う（アニメ開始タイミングのズレ防止）
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

"use client";

import { useSyncExternalStore } from "react";

const MOBILE_MQ = "(max-width: 767px)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches;
}

/** SSR では false。クライアントでは getSnapshot が即正しい値を返す */
function getServerSnapshot() {
  return false;
}

/**
 * Tailwind の md 未満をモバイルとして扱う
 * useSyncExternalStore でハイドレーション直後から正しい端末判定にする
 * （useState+useEffect だと一瞬 PC 扱い → 発火条件が厳しくなり悩みセクションだけ遅くなる）
 */
export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

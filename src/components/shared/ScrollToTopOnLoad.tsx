"use client";

import { useEffect } from "react";

/**
 * ページリロード時にファーストビュー（先頭）へ戻す
 */
export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return null;
}

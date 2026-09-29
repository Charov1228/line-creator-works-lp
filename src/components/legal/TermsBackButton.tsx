"use client";

/**
 * Lステップ / LINE 内ブラウザから開いた利用規約向け。
 * 同一 WebView 内の遷移なら history.back() で申込画面へ戻れる。
 */
export function TermsBackButton() {
  function handleBack() {
    if (typeof window === "undefined") return;

    // history.length はモバイルで信頼できないため、常に戻るを試す
    window.history.back();
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex w-full items-center justify-center rounded-full bg-line-green px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-line-green/90 active:scale-[0.99]"
      >
        前の画面に戻る
      </button>
      <p className="text-center text-[11px] leading-relaxed text-white/40">
        戻らない場合は、画面上部の「←」または「×」で閉じてください
      </p>
    </div>
  );
}

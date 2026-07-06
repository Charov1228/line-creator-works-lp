import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Logo size="md" href="/" showText />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/" className="text-xs text-white/40 transition hover:text-white/70">
              スクールTOP
            </Link>
            <Link
              href="/line-cast-support"
              className="text-xs text-white/40 transition hover:text-white/70"
            >
              LINE CAST SUPPORT
            </Link>
          </nav>
          <p className="max-w-md text-xs leading-relaxed text-white/30">
            本ページは動画編集スクール「Line Creator Works」の公式ランディングページです。
            案件の紹介・採用・収入を保証するものではありません。
          </p>
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Line Creator Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

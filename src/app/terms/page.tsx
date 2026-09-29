import type { Metadata } from "next";
import Link from "next/link";
import { TermsBackButton } from "@/components/legal/TermsBackButton";
import { legalInfo } from "@/data/legal";
import {
  termsEnactedNote,
  termsPreamble,
  termsSections,
  type TermsBlock,
} from "@/data/terms";

export const metadata: Metadata = {
  title: "利用規約 | Line Creator Works",
  description: `${legalInfo.companyName}が運営する${legalInfo.serviceName}の利用規約です。`,
  robots: { index: true, follow: true },
};

function TermsBlockView({ block }: { block: TermsBlock }) {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "numbered") {
    return (
      <ol
        className="list-decimal space-y-3 pl-5 marker:text-white/40"
        start={block.start}
      >
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className="space-y-3 border-l border-white/10 pl-4 md:pl-5">
      {block.items.map((item) => {
        const isClause = item.key.startsWith("(");
        return (
          <li key={`${item.key}-${item.text.slice(0, 24)}`}>
            {isClause ? (
              <p>
                <span className="mr-2 text-white/45">{item.key}</span>
                {item.text}
              </p>
            ) : (
              <div className="space-y-1">
                <p>
                  <span className="font-medium text-white/80">「{item.key}」</span>
                  <span className="text-white/70">とは、{item.text}</span>
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Lステップ申込フォーム等から直接開く想定の利用規約ページ。
 * LPのヘッダー／フッター／TOP導線は出さず、前画面（LINE）へ戻しやすくする。
 */
export default function TermsPage() {
  return (
    <main className="relative min-h-[100svh] bg-black pb-[calc(7.5rem+env(safe-area-inset-bottom))] pt-10 md:pb-32 md:pt-14">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-line-green/5 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-sm font-medium tracking-widest text-line-green uppercase">
          Legal
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Line Creator Works利用規約
        </h1>
        <p className="mt-5 text-[15px] leading-[1.9] text-white/60 md:text-base md:leading-[1.95]">
          {termsPreamble}
        </p>

        <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-base font-bold leading-snug text-white md:text-lg">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-[1.9] text-white/70 md:text-base md:leading-[1.95]">
                {section.blocks.map((block, index) => (
                  <TermsBlockView
                    key={`${section.title}-${block.type}-${index}`}
                    block={block}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-sm text-white/45">
          {termsEnactedNote}
        </p>

        <p className="mt-6 text-sm leading-relaxed text-white/50">
          個人情報の取扱いについては、別途
          <Link
            href="/privacy-policy"
            className="mx-1 text-line-green underline-offset-2 transition hover:underline"
          >
            プライバシーポリシー
          </Link>
          をご確認ください。
        </p>

        <p className="mt-8 text-xs leading-relaxed text-white/30">
          {legalInfo.companyName} / {legalInfo.serviceName}
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/90 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:px-8">
        <div className="mx-auto max-w-3xl">
          <TermsBackButton />
        </div>
      </div>
    </main>
  );
}

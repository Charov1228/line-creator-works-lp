import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
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

export default function TermsPage() {
  return (
    <LegalDocumentLayout
      label="Legal"
      title="Line Creator Works利用規約"
      description={termsPreamble}
    >
      {termsSections.map((section) => (
        <section key={section.title} className="scroll-mt-28">
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

      <p className="border-t border-white/10 pt-8 text-sm text-white/45">
        {termsEnactedNote}
      </p>

      <p className="text-sm leading-relaxed text-white/50">
        個人情報の取扱いについては、別途
        <Link
          href="/privacy-policy"
          className="mx-1 text-line-green underline-offset-2 transition hover:underline"
        >
          プライバシーポリシー
        </Link>
        をご確認ください。
      </p>
    </LegalDocumentLayout>
  );
}

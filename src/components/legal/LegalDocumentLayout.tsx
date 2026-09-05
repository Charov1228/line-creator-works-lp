import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { legalInfo } from "@/data/legal";

interface LegalDocumentLayoutProps {
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

/**
 * プライバシーポリシー・特定商取引法表記など法定ページ共通レイアウト
 */
export function LegalDocumentLayout({
  label,
  title,
  description,
  children,
}: LegalDocumentLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative min-h-[100svh] bg-black pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-line-green/5 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-5 md:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-line-green"
          >
            <ArrowLeft className="size-4" />
            スクールTOPへ戻る
          </Link>

          <p className="text-sm font-medium tracking-widest text-line-green uppercase">
            {label}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-white/60">
              {description}
            </p>
          )}

          <div className="mt-10 space-y-10 md:mt-12">{children}</div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-card p-6 md:p-8">
            <p className="text-sm font-semibold text-white">お問い合わせ窓口</p>
            <dl className="mt-4 space-y-3 text-sm text-white/70">
              <div>
                <dt className="text-white/40">事業者</dt>
                <dd className="mt-1">{legalInfo.companyName}</dd>
              </div>
              <div>
                <dt className="text-white/40">運営責任者</dt>
                <dd className="mt-1">{legalInfo.representative}</dd>
              </div>
              <div>
                <dt className="text-white/40">所在地</dt>
                <dd className="mt-1">{legalInfo.address}</dd>
              </div>
              <div>
                <dt className="text-white/40">メールアドレス</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${legalInfo.email}`}
                    className="text-line-green transition hover:text-line-green/80"
                  >
                    {legalInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/40">電話番号</dt>
                <dd className="mt-1">{legalInfo.phoneNote}</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

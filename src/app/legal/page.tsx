import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import { commercialTransactionItems, legalInfo } from "@/data/legal";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Line Creator Works",
  description: `${legalInfo.serviceName}の特定商取引法に基づく表記です。`,
  robots: { index: true, follow: true },
};

function renderValue(value: string | readonly string[]) {
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (value.startsWith("http")) {
    return (
      <a
        href={value}
        className="break-all text-line-green transition hover:text-line-green/80"
        target="_blank"
        rel="noopener noreferrer"
      >
        {value}
      </a>
    );
  }

  if (value.includes("@")) {
    return (
      <a
        href={`mailto:${value}`}
        className="break-all text-line-green transition hover:text-line-green/80"
      >
        {value}
      </a>
    );
  }

  return value;
}

export default function LegalPage() {
  return (
    <LegalDocumentLayout
      label="Legal"
      title="特定商取引法に基づく表記"
      description={`${legalInfo.serviceName}に関する法定表示事項を以下のとおり掲載します。`}
    >
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-card">
        <dl className="divide-y divide-white/10">
          {commercialTransactionItems.map((item) => (
            <div
              key={item.label}
              className="grid gap-2 px-5 py-5 md:grid-cols-[11rem_1fr] md:gap-6 md:px-8 md:py-6"
            >
              <dt className="text-sm font-semibold text-line-green">
                {item.label}
              </dt>
              <dd className="text-sm leading-relaxed text-white/75 md:text-base">
                {renderValue(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6">
        <h2 className="text-base font-semibold text-white">決済情報の取扱い</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          {legalInfo.paymentDataNote}
        </p>
      </section>
    </LegalDocumentLayout>
  );
}

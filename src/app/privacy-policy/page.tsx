import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/legal/LegalDocumentLayout";
import {
  legalInfo,
  privacyPolicySections,
} from "@/data/legal";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Line Creator Works",
  description: `${legalInfo.companyName}が運営する${legalInfo.serviceName}のプライバシーポリシーです。`,
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      label="Legal"
      title="プライバシーポリシー"
      description={`${legalInfo.companyName}（以下「当社」）は、${legalInfo.serviceName}（以下「本サービス」）における、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。`}
    >
      {privacyPolicySections.map((section) => (
        <section key={section.title}>
          <h2 className="text-lg font-bold text-white md:text-xl">
            {section.title}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
            {section.body?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list && (
              <ul className="list-disc space-y-2 pl-5">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.bodyAfter?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.listAfter && (
              <ul className="list-disc space-y-2 pl-5">
                {section.listAfter.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.bodyEnd?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.title === "第5条（個人情報の第三者提供）" && (
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-4 py-3 font-semibold text-white/80">
                        委託先・提供先
                      </th>
                      <th className="px-4 py-3 font-semibold text-white/80">
                        利用目的
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {legalInfo.thirdPartyServices.map((service) => (
                      <tr
                        key={service.name}
                        className="border-b border-white/5 last:border-b-0"
                      >
                        <td className="px-4 py-3 align-top text-white/70">
                          {service.name}
                        </td>
                        <td className="px-4 py-3 align-top text-white/70">
                          {service.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      ))}
    </LegalDocumentLayout>
  );
}

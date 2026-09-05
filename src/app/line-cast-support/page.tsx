import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  Film,
  GraduationCap,
  Handshake,
  Megaphone,
  Users,
  X,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import { lineCastSupport } from "@/data/line-cast-support";

export const metadata: Metadata = {
  title: `${lineCastSupport.companyName} | 事業概要`,
  description: lineCastSupport.description,
};

const serviceIcons = {
  users: Users,
  graduationCap: GraduationCap,
  megaphone: Megaphone,
  film: Film,
  handshake: Handshake,
} as const;

function ServiceTitle({ title }: { title: string }) {
  if (title === "SNS運用・集客コンサルティング事業") {
    return (
      <>
        SNS運用・
        <br className="hidden md:inline" />
        集客コンサルティング事業
      </>
    );
  }
  return title;
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof lineCastSupport.services)[number];
  index: number;
}) {
  const Icon = serviceIcons[service.icon];
  return (
    <div className="rounded-3xl border border-white/10 bg-card p-6 md:p-8">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-line-green/60">
          0{index + 1}
        </span>
        <div className="flex size-12 items-center justify-center rounded-2xl bg-line-green/10">
          <Icon className="size-6 text-line-green" />
        </div>
      </div>
      <p className="mt-2 text-xs font-medium tracking-wider text-line-green">
        {service.subtitle}
      </p>
      <h3 className="mt-1 text-lg font-bold text-white">
        <ServiceTitle title={service.title} />
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        {service.description}
      </p>
    </div>
  );
}

export default function LineCastSupportPage() {
  const { freeProgram, services } = lineCastSupport;
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3);

  return (
    <>
      <Header variant="company" />
      <main>
        {/* ヒーロー */}
        <section className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-1/3 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-line-green/5 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-8 md:text-left">
              <Image
                src="/images/line-cast-support-logo.png"
                alt="LINE CAST SUPPORT"
                width={220}
                height={146}
                priority
                className="h-auto w-[160px] shrink-0 object-contain md:w-[200px] lg:w-[220px]"
              />
              <div className="flex-1">
                <p className="text-sm font-medium tracking-widest text-line-green uppercase">
                  Company
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
                  {lineCastSupport.companyName}
                </h1>
                <p className="mt-4 text-lg text-white/70 md:text-xl">
                  人材・クリエイティブ・集客・営業まで、
                  <br className="md:hidden" />
                  成長をトータルで支援
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50">
                  人材採用・派遣、動画編集スクール運営、
                  <br />
                  SNS運用コンサルティング、映像制作、営業代行まで。
                  <br />
                  企業とクリエイター双方の成長を
                  <br className="md:hidden" />
                  サポートする事業を展開しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 無償制度（福利厚生・キャリア支援） */}
        <SectionWrapper id="free-program" variant="card">
          <SectionHeader
            label={freeProgram.label}
            title={
              <>
                働きながら、
                <br className="md:hidden" />
                学び始められる無償制度
              </>
            }
            description={
              <>
                これは「無料スクール」ではありません。
                <br />
                週5で働きながら、生活を安定させたうえで
                <br />
                動画編集という選択肢を持ちたい方のための、
                <br />
                福利厚生・キャリア支援制度です。
              </>
            }
          />

          <div className="mx-auto max-w-3xl rounded-3xl border border-line-green/25 bg-line-green/5 px-6 py-5 text-center md:px-8">
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              まずは仕事と生活を安定させつつ、
              <br className="hidden md:inline" />
              将来の選択肢として動画編集を学び始めたい方を想定しています。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8">
              <h3 className="text-lg font-bold text-white">含まれる内容</h3>
              <ul className="mt-5 space-y-3">
                {freeProgram.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-line-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8">
              <h3 className="text-lg font-bold text-white">含まれない内容</h3>
              <p className="mt-2 text-xs text-white/40">
                有料スクールとの違いをはっきりお伝えします
              </p>
              <ul className="mt-5 space-y-3">
                {freeProgram.excludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <X className="mt-0.5 size-4 shrink-0 text-white/35" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-white/55 md:text-base">
            給与以外の価値を届け、
            <br className="md:hidden" />
            これからの働き方の選択肢を増やすこと。
            <br />
            一緒に未来をつくる仲間を増やしていくことも、
            <br className="md:hidden" />
            この制度の狙いです。
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
            <div className="-mx-1 overflow-x-auto md:mx-0">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-black/50">
                    <th className="whitespace-nowrap p-4 font-medium text-white/40" />
                    <th className="whitespace-nowrap p-4 font-medium text-white/50">
                      有料スクール
                    </th>
                    <th className="whitespace-nowrap p-4 font-bold text-line-green">
                      無償制度（福利厚生）
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {freeProgram.comparison.map((row) => (
                    <tr key={row.item} className="border-b border-white/5">
                      <td className="whitespace-nowrap p-4 font-medium text-white">
                        {row.item}
                      </td>
                      <td className="p-4 text-white/45">{row.paid}</td>
                      <td className="p-4 text-white/80">{row.free}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              未経験の方のご相談も歓迎です。無理な勧誘はしません。
              <br />
              まずは状況や目標をお聞きし、
              <br className="md:hidden" />
              動画編集が合うかどうかを一緒に見極めます。
            </p>
            <div className="mt-8 flex justify-center">
              <LineCtaButton
                label="公式LINEから無料相談する"
                sublabel="働きながらの学び方についてご案内します"
                href={lineCastSupport.lineUrl}
                lineDestination="company"
                location="company_free_program"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* 事業内容 */}
        <SectionWrapper id="services">
          <SectionHeader
            label="Business"
            title="事業内容"
            description={
              <>
                人材・教育・マーケティング・映像制作・営業まで、
                <br />
                企業の成長を多角的に支援します。
              </>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:mx-auto md:max-w-3xl md:grid-cols-2 lg:max-w-4xl">
            {bottomServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + 3}
              />
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

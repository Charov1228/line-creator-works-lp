import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Headphones, Mic, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/shared/Logo";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import { lineCastSupport } from "@/data/line-cast-support";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `LINE CAST SUPPORT | ${siteConfig.name}`,
  description:
    "LINE CAST SUPPORTの事業内容をご紹介します。（詳細文言は後日掲載予定）",
};

const serviceIcons = {
  mic: Mic,
  users: Users,
  headphones: Headphones,
} as const;

export default function LineCastSupportPage() {
  return (
    <>
      <Header />
      <main>
        {/* ヒーロー */}
        <section className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-1/3 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-line-green/5 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              スクールTOPに戻る
            </Link>

            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
              <Logo size="xl" />
              <div className="flex-1">
                <p className="text-sm font-medium tracking-widest text-line-green uppercase">
                  Service
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
                  {lineCastSupport.name}
                </h1>
                <p className="mt-4 text-lg text-white/70">
                  {lineCastSupport.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50">
                  {lineCastSupport.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サービス内容 */}
        <SectionWrapper id="services">
          <SectionHeader
            label="Services"
            title="提供サービス"
            description="（サービス全体の概要説明は後日掲載予定）"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {lineCastSupport.services.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-card p-6 md:p-8"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-line-green/10">
                    <Icon className="size-6 text-line-green" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* こんな方におすすめ */}
        <SectionWrapper id="target" variant="card">
          <SectionHeader
            label="For Whom"
            title="こんな方におすすめ"
          />
          {lineCastSupport.targetAudience.map((group) => (
            <ul key={group.title} className="mx-auto max-w-2xl space-y-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/50 p-4 text-sm text-white/60 md:text-base"
                >
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-line-green" />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </SectionWrapper>

        {/* ご利用の流れ */}
        <SectionWrapper id="flow">
          <SectionHeader
            label="Flow"
            title="ご利用の流れ"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {lineCastSupport.flow.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-white/10 bg-card p-6"
              >
                <span className="text-3xl font-bold text-line-green/30">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* 強み */}
        <SectionWrapper id="strengths" variant="card">
          <SectionHeader
            label="Why Us"
            title="選ばれる理由"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {lineCastSupport.strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/50 p-6 md:p-8"
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper id="faq">
          <SectionHeader
            label="FAQ"
            title="よくある質問"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {lineCastSupport.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-card p-6"
              >
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper variant="gradient">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              まずはお気軽にお問い合わせください
            </h2>
            <p className="mt-4 text-white/50">
              （お問い合わせ方法の詳細は後日掲載予定）
            </p>
            <div className="mt-8 flex justify-center">
              <LineCtaButton sublabel="公式LINEからお問い合わせ" />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

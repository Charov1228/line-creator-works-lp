import type { Metadata } from "next";
import {
  Film,
  GraduationCap,
  Handshake,
  Megaphone,
  Users,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/shared/Logo";
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

export default function LineCastSupportPage() {
  return (
    <>
      <Header variant="company" />
      <main>
        {/* ヒーロー */}
        <section className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-1/3 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-line-green/5 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
              <Logo size="xl" />
              <div className="flex-1">
                <p className="text-sm font-medium tracking-widest text-line-green uppercase">
                  Company
                </p>
                <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">
                  {lineCastSupport.companyName}
                </h1>
                <p className="mt-4 text-lg text-white/70 md:text-xl">
                  {lineCastSupport.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50">
                  {lineCastSupport.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 事業内容 */}
        <SectionWrapper id="services">
          <SectionHeader
            label="Business"
            title="事業内容"
            description="人材・教育・マーケティング・映像制作・営業まで、企業の成長を多角的に支援します。"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lineCastSupport.services.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <div
                  key={service.title}
                  className={
                    index === lineCastSupport.services.length - 1
                      ? "rounded-3xl border border-white/10 bg-card p-6 md:p-8 md:col-span-2 lg:col-span-1"
                      : "rounded-3xl border border-white/10 bg-card p-6 md:p-8"
                  }
                >
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
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper variant="gradient">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              まずはお気軽にお問い合わせください
            </h2>
            <p className="mt-4 text-white/50">
              各事業のご相談・ご依頼は公式LINEから受け付けています。
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

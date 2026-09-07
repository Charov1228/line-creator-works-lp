import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Clapperboard,
  MessageCircle,
  PlayCircle,
  ShieldAlert,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommunityFaq } from "@/components/community/CommunityFaq";
import { Button } from "@/components/ui/button";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { communityPage } from "@/data/community";
import { legalInfo } from "@/data/legal";

export const metadata: Metadata = {
  title: `${communityPage.name} | Line Creator Works`,
  description: communityPage.description,
  alternates: {
    canonical: "https://lp.line-cw.com/community",
  },
};

const featureIcons = [Briefcase, PlayCircle, Clapperboard, MessageCircle];

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. ファーストビュー */}
        <section className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-1/3 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-line-green/5 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <p className="text-sm font-medium tracking-widest text-line-green uppercase">
              Community
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              {communityPage.name}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {communityPage.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
              月額 {communityPage.price.monthlyExcludingTax} ／{" "}
              {communityPage.price.monthlyIncludingTax}
              <br className="md:hidden" />
              <span className="md:ml-2">{communityPage.price.billingNote}</span>
            </p>

            <div className="mt-10 flex flex-col items-center gap-3">
              <Button asChild size="lg">
                <a href={`mailto:${communityPage.inquiryEmail}`}>
                  参加についてのお問い合わせ
                </a>
              </Button>
              <p className="text-xs text-white/40">
                現時点では、このページからの直接決済は行っていません。
              </p>
            </div>
          </div>
        </section>

        {/* 2. コミュニティについて */}
        <SectionWrapper id="about" variant="card" atmosphere="glow-left">
          <AnimatedSection>
            <SectionHeader
              label="About"
              title="コミュニティについて"
              description={
                <>
                  {communityPage.name}は、
                  <br className="md:hidden" />
                  Line Creator Worksを受講した方のうち、
                  <br />
                  参加を希望する方向けの月額制オンラインコミュニティです。
                </>
              }
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="mx-auto max-w-3xl space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8">
              <p className="text-sm leading-relaxed text-white/75 md:text-base">
                加入は任意です。受講後に必ず本コミュニティへ参加する必要はありません。
              </p>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">
                動画編集案件に関する情報の紹介・共有、会員限定コンテンツの視聴、動画編集に関する情報共有、会員同士の交流を目的とした場を提供します。
              </p>
            </div>
          </AnimatedSection>
        </SectionWrapper>

        {/* 3. 提供内容 */}
        <SectionWrapper id="features" atmosphere="none">
          <AnimatedSection>
            <SectionHeader
              label="What We Offer"
              title="コミュニティで提供する内容"
              description="本コミュニティで提供する主な内容は次のとおりです。"
            />
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2">
            {communityPage.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <AnimatedSection key={feature.title} delay={index * 0.05}>
                  <div className="card-border-flow h-full rounded-3xl border border-white/10 bg-card p-6 md:p-8">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-line-green/10">
                      <Icon className="size-6 text-line-green" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-8">
            <div className="mx-auto flex max-w-3xl gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 md:p-6">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-amber-400" />
              <p className="text-sm leading-relaxed text-white/80">
                {communityPage.disclaimer}
              </p>
            </div>
          </AnimatedSection>
        </SectionWrapper>

        {/* 4. 料金 */}
        <SectionWrapper id="pricing" variant="card" atmosphere="glow-right">
          <AnimatedSection>
            <SectionHeader
              label="Pricing"
              title="料金"
              description="月額制の継続課金サービスです。"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="mx-auto max-w-xl rounded-3xl border border-line-green/30 bg-line-green/5 p-8 text-center md:p-10">
              <p className="text-sm font-medium tracking-wider text-line-green">
                月額料金
              </p>
              <p className="mt-4 text-4xl font-bold text-white md:text-5xl">
                10,000
                <span className="ml-2 text-lg font-semibold text-white/70 md:text-xl">
                  円（税別）
                </span>
              </p>
              <p className="mt-3 text-base text-white/70">
                税込 {communityPage.price.monthlyIncludingTax}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/55">
                {communityPage.price.billingNote}
                <br />
                解約手続きを行うまで、毎月自動更新されます。
              </p>
            </div>
          </AnimatedSection>
        </SectionWrapper>

        {/* 5. ご利用にあたって */}
        <SectionWrapper id="terms" atmosphere="none">
          <AnimatedSection>
            <SectionHeader
              label="Terms"
              title="ご利用にあたって"
              description="参加・課金・解約に関する重要な条件です。"
            />
          </AnimatedSection>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {communityPage.usageNotes.map((note, index) => (
              <AnimatedSection key={note.title} delay={index * 0.04}>
                <div className="h-full rounded-3xl border border-white/10 bg-card p-6">
                  <h3 className="font-bold text-white">{note.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {note.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8">
              <h3 className="text-base font-semibold text-white">
                契約・解約について
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70">
                {communityPage.termsPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </SectionWrapper>

        {/* 6. FAQ */}
        <SectionWrapper id="faq" variant="card" atmosphere="none">
          <AnimatedSection>
            <SectionHeader
              label="FAQ"
              title="よくある質問"
              description="料金・参加条件・解約についてのご案内です。"
            />
          </AnimatedSection>
          <CommunityFaq />
        </SectionWrapper>

        {/* CTA + 法定リンク */}
        <SectionWrapper atmosphere="glow-left" className="pb-20 md:pb-28">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                参加についてのお問い合わせ
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                参加希望・解約方法などについては、下記メールアドレスまでご連絡ください。
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <a href={`mailto:${communityPage.inquiryEmail}`}>
                    {communityPage.inquiryEmail}
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-16">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-card p-6 md:p-8">
              <p className="text-sm font-semibold text-white">運営・関連ページ</p>
              <dl className="mt-4 space-y-3 text-sm text-white/70">
                <div>
                  <dt className="text-white/40">運営会社</dt>
                  <dd className="mt-1">
                    <Link
                      href="/line-cast-support"
                      className="text-line-green transition hover:text-line-green/80"
                    >
                      {legalInfo.companyName}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/40">関連リンク</dt>
                  <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                    <Link
                      href="/legal"
                      className="text-line-green transition hover:text-line-green/80"
                    >
                      特定商取引法に基づく表記
                    </Link>
                    <Link
                      href="/privacy-policy"
                      className="text-line-green transition hover:text-line-green/80"
                    >
                      プライバシーポリシー
                    </Link>
                    <Link
                      href="/line-cast-support"
                      className="text-line-green transition hover:text-line-green/80"
                    >
                      運営会社情報
                    </Link>
                    <Link
                      href="/"
                      className="text-line-green transition hover:text-line-green/80"
                    >
                      スクールTOP
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/40">利用規約</dt>
                  <dd className="mt-1 text-white/50">
                    現時点では専用の利用規約ページは未公開です。契約・解約条件は本ページおよび特定商取引法に基づく表記をご確認ください。
                  </dd>
                </div>
              </dl>
            </div>
          </AnimatedSection>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { Clock, GraduationCap, Users } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { LineCtaButton } from "@/components/shared/LineCtaButton";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";

/**
 * 無料受講制度（人材育成コース）
 * 「無料」だけを強調せず、長期育成プログラムとして訴求
 */
export function FreeProgramSection() {
  const courses = [
    {
      icon: GraduationCap,
      name: "通常コース",
      duration: "約2ヶ月",
      description: "集中プログラム。短期間で編集スキルを習得し、フリーランスや副業を目指す方に。",
      highlight: false,
    },
    {
      icon: Users,
      name: "人材育成コース",
      duration: "約4〜5ヶ月",
      description:
        "長期育成プログラム。ゆっくり学びながら実務レベルまで丁寧に育成。人材派遣スタッフとして長期稼働いただける方を対象に、受講料を実質負担なく学べる制度を検討しています。",
      highlight: true,
    },
  ];

  return (
    <SectionWrapper id="free-program">
      <AnimatedSection>
        <SectionHeader
          label="Talent Development"
          title="実務レベルまで育てる、長期育成プログラム"
          description={
            <>
              けーさんとたろーでは人材派遣事業も行っています。
              <br />
              一定の条件を満たし長期的に稼働いただける方には、
              <br />
              受講料を実質負担なく学べる制度をご用意しています。
            </>
          }
        />
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <AnimatedSection key={course.name}>
            <div
              className={`relative h-full rounded-3xl border p-8 ${
                course.highlight
                  ? "border-line-green/40 bg-line-green/5 glow-green"
                  : "border-white/10 bg-card"
              }`}
            >
              {course.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-line-green px-3 py-1 text-xs font-semibold text-white">
                  おすすめ
                </span>
              )}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-line-green/10">
                  <course.icon className="size-5 text-line-green" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{course.name}</h3>
                  <p className="flex items-center gap-1 text-sm text-line-green">
                    <Clock className="size-3.5" />
                    {course.duration}
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-white/60">{course.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-10">
        <div className="rounded-2xl border border-white/10 bg-card p-6 text-center">
          <p className="text-sm leading-relaxed text-white/50">
            ※ 人材育成コースの詳細な条件・内容については、無料個別面談にてご説明いたします。
            <br />
            お一人おひとりの状況に合わせて、最適なコースをご提案します。
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-10 flex justify-center">
        <LineCtaButton
          label="無料面談の詳細をLINEで確認"
          sublabel="コースの詳細は面談時にご案内"
        />
      </AnimatedSection>
    </SectionWrapper>
  );
}

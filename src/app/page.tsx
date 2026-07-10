import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OpeningAnimation } from "@/components/shared/OpeningAnimation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhySection } from "@/components/sections/WhySection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CareerSection } from "@/components/sections/CareerSection";
import { FreeProgramSection } from "@/components/sections/FreeProgramSection";
import { InstructorsSection } from "@/components/sections/InstructorsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

/**
 * Line Creator Works ランディングページ
 *
 * 全CTAは公式LINE登録に統一。
 * コンテンツの差し替えは src/data/ 配下のファイルを編集。
 */
export default function HomePage() {
  return (
    <>
      <OpeningAnimation />
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <TestimonialsSection />
        <StatsSection />
        <WhySection />
        <DifferenceSection />
        <CurriculumSection />
        <FeedbackSection />
        <CommunitySection />
        <CareerSection />
        <FreeProgramSection />
        <InstructorsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { faqs } from "@/data/content";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/shared/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * よくある質問セクション
 * 不安・疑問を解消し、LINE登録へのハードルを下げる
 */
export function FaqSection() {
  return (
    <SectionWrapper id="faq">
      <AnimatedSection>
        <SectionHeader
          label="FAQ"
          title="よくある質問"
          description="気になる点は、個別面談でもお気軽にご質問ください。"
        />
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </SectionWrapper>
  );
}

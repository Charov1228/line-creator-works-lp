"use client";

import { communityPage } from "@/data/community";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CommunityFaq() {
  return (
    <AnimatedSection>
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {communityPage.faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AnimatedSection>
  );
}

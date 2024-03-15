import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import { FAQType } from "@/app/(home-sections)/FAQSection";

export default function ProgramFAQ() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-white text-2xl tracking-normal font-semibold">
        FAQ
      </h1>
      <Accordion faqArray={programFAQ} />
    </SectionWrapper>
  );
}

const programFAQ: FAQType[] = [
  {
    id: 1,
    title: "Can I join the program if I'm new to strength training?",
    answer: "Absolutely! Our program is suitable for individuals of all experience levels, and our trainers will provide modifications and guidance to ensure a safe and effective workout experience.",
  },
  {
    id: 2,
    title: "How soon will I see results?",
    answer:
      " Results vary depending on individual factors such as starting fitness level, consistency, and adherence to the program. However, many participants typically notice improvements in strength, muscle tone, and overall fitness within the first few weeks of consistent training.",
  }
];
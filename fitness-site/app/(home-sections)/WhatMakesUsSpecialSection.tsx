import React from "react";
import { TestIconTwo } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function WhatMakesUsSpecialSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">What Makes Us Special</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 md:pt-8">
        {whatMakesUsSpecialPoints.map((programCard) => (
          <ProgramCard
            key={programCard.title}
            href={programCard.href}
            title={programCard.title}
            description={programCard.description}
            icon={programCard.icon}
            image={programCard.image}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export function ProgramCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: () => JSX.Element;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] hover:-translate-y-1 duration-500">
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-center">
        <TestIconTwo height="2.5m" width="2.5em" iconFill="#ffffff" />
        <h3 className="h3 text-center pt-1">{title}</h3>
      </div>
      <p className="text-normal text-center pt-2">{description}</p>
    </div>
  );
}

// main zelene boje:
// stara - #1D7349
// nova zelena (koristim ju na ikonama na prvoj sekciji home stranice) - #279C63
// nova zelena za NASLOVE - #31C57D  -- komplementarna boja: #C57D31
// stavi ovu zelenu boju za naslove u canvin color circle i generiraj tetradic boje za ostale nijanse - #31C57D
// linear gradient za kartice i border te kartice - bg-gradient-to-r from-[#101010] to-[#151515] border border-[#292929]

const whatMakesUsSpecialPoints = [
  {
    title: "State-of-the-Art Equipment",
    description:
      "Our gym boasts the latest in fitness technology, ensuring you have access to the best tools for your workout.",
  },
  {
    title: "Expert Personal Trainers",
    description:
      "Our team of personal trainers is dedicated to helping you achieve your goals with personalized training plans.",
  },
  {
    title: "Comprehensive Class Offerings",
    description:
      "From high-energy group classes to calming yoga sessions, our diverse range of classes caters to all fitness levels and interests.",
  },
  {
    title: "Community Atmosphere",
    description:
      "We foster a supportive and motivating community where everyone is encouraged to pursue their health ",
  },
];

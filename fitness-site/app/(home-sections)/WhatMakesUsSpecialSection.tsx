import React from "react";
import { TestIconTwo } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { uniqueSellingPoints } from "../data/uniqueSellingPoints";

export default function WhatMakesUsSpecialSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">What Makes Us Special</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 md:pt-8">
        {uniqueSellingPoints.map((programCard) => (
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
    <div className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#090a0c] to-[#131313] border-[0.5px] border-[#111316]">
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-center">
        {icon()}
        <h3 className="h3 text-center">{title}</h3>
      </div>
      <p className="text-normal text-center pt-3">{description}</p>
    </div>
  );
}

import React from "react";
import { programs } from "../data";
import { DumbellIcon, TestIconTwo } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ExploreOurProgram() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">What Makes Us Special</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 md:pt-8">
        {programs.map((programCard) => (
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
  href,
  title,
  description,
  icon,
  image,
}: {
  href: string;
  title: string;
  description: string;
  icon: () => JSX.Element;
  image: any;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
        <div className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-md p-2 w-fit">
          <TestIconTwo height="1.5m" width="1.5em" iconFill="#ffffff" />
        </div>
        <h3 className="w-full h3">{title}</h3>
      </div>
      <p className="text-normal">{description}</p>
    </div>
  );
}

// main zelene boje:
// stara - #1D7349
// nova zelena (koristim ju na ikonama na prvoj sekciji home stranice) - #279C63
// nova zelena za NASLOVE - #31C57D  -- komplementarna boja: #C57D31
// stavi ovu zelenu boju za naslove u canvin color circle i generiraj tetradic boje za ostale nijanse - #31C57D
// linear gradient za kartice i border te kartice - bg-gradient-to-r from-[#101010] to-[#151515] border border-[#292929]

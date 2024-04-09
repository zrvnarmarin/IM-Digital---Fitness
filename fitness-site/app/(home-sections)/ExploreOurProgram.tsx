import React from "react";
import { programs } from "../data";
import { DumbellIcon } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ExploreOurProgram() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        What makes us special
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 md:pt-8">
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
    <div
      //#1F2125
      className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
    >
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
        <div className=" bg-[#279C63] rounded-md p-2 w-fit">
          <DumbellIcon />
        </div>
        <p className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
          {title}
        </p>
      </div>
      <p className="normal-case text-md md:text-md text-gray-300 leading-2">
        {description}
      </p>
    </div>
  );
}

// main zelene boje:
// stara - #1D7349
// nova zelena (koristim ju na ikonama na prvoj sekciji home stranice) - #279C63
// nova zelena za NASLOVE - #31C57D  -- komplementarna boja: #C57D31
// stavi ovu zelenu boju za naslove u canvin color circle i generiraj tetradic boje za ostale nijanse - #31C57D
// linear gradient za kartice i border te kartice - bg-gradient-to-r from-[#101010] to-[#151515] border border-[#292929]

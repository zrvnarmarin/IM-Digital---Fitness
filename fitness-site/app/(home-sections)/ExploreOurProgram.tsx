import React from "react";
import Link from "next/link";
import { programs } from "../data";
import { DumbellIcon } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ExploreOurProgram() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-normal text-white text-2xl tracking-wider w-full">
        Explore Our Program
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
      className="flex flex-col gap-4 rounded-lg p-6  bg-[#101010] border border-[#292929] duration-100 "
    >
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
        {/* <div className=" bg-[#279C63] rounded-md p-2 w-fit"><DumbellIcon /></div> */}
        <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] leading-7 font-semibold">
          {title}
        </p>
      </div>
      <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-medium">
        {description}
      </p>
    </div>
  );
}

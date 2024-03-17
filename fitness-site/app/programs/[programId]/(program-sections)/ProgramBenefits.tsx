import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { DumbellIcon } from "@/public/Icons";
import Image from "next/image";
import TestImage from '../../../../public/HeroTestTest.jpg'

export default function ProgramBenefits() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-white text-2xl tracking-normal font-semibold">
        Benefits
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-12">
        {programBenefits.map((programBenefit) => (
          <ProgramBenefitCard
            key={programBenefit.id}
            programBenefit={programBenefit}
          />
        ))}
      </ul>
      <p className="text-white">Our succes rate is 98%! Stop waiting and bla bla - NEW SECTION HERE!</p>
    </SectionWrapper>
  );
}

export const ProgramBenefitCard = ({ programBenefit } : { programBenefit: ProgramBenefitType }) => {
  return (
    <div
      //#1F2125
      className="relative flex flex-col gap-6 items-center rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
    >
        {/* <div className="absolute inset-0">
          <Image
            priority
            src={TestImage}
            alt="alt"
            layout="fill"
            objectPosition="center"
            className="rounded-md object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-80"></div>  */}
      <div className="flex flex-row md:flex-col gap-4 justify-center">
        <div className=" bg-[#1D7349] rounded-md p-2 w-fit"><DumbellIcon width={60} height={60} /></div>
      </div>
      <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-[#31C57D] leading-7 font-semibold">
        {programBenefit.title}
      </p>
      <p className="normal-case text-md md:text-md text-white leading-2 font-normal text-center">
        {programBenefit.description}
      </p>
    </div>
  );
};

type ProgramBenefitType = {
  id: number;
  title: string;
  description: string;
};

const programBenefits: ProgramBenefitType[] = [
  {
    id: 1,
    title: "Functional Strength",
    description:
      "Develops foundational strength to perform daily tasks with ease and reduce the risk of injury.",
  },
  {
    id: 2,
    title: "Muscle Definition",
    description:
      "Builds lean muscle mass and enhances muscle definition for a more aesthetic physique.",
  },
  {
    id: 3,
    title: "Metabolic Boost",
    description:
      "Increases metabolism and calorie expenditure, supporting fat loss and weight management goals.",
  },
  {
    id: 4,
    title: "Boosted Confidence",
    description:
      "Boosts self-confidence, improves mood, and promotes overall well-being through regular physical activity.",
  },
];

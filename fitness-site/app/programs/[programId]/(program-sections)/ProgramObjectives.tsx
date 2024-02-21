import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { DumbellIcon } from "@/public/Icons";
import TestImage from "../../../../public/HeroTestTest.jpg";

export default function ProgramObjectives() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-normal text-white text-2xl tracking-wider w-full">
        Objectives/Goals
      </h1>
      <ul className="grid grid-cols-2 gap-6">
        {programObjectives.map((programObjective) => (
          <ProgramObjectiveCard
            key={programObjective.id}
            programObjective={programObjective}
          />
        ))}
      </ul>
    </SectionWrapper>
  );
}

export const ProgramObjectiveCard = ({
  programObjective,
}: {
  programObjective: ProgramObjectiveType;
}) => {
  return (
    <div className="grid grid-cols-2">
        <li
          //#1F2125
          className="relative flex flex-col gap-2 p-8 py-10 bg-[#111111] rounded-md "
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src={TestImage} layout="fill" objectFit="cover" alt="image" />
          </div>
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-black opacity-95"></div>
          {/* Text Content */}
          <div className="relative z-10">
            <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
              <div className=" bg-[#1D7349] rounded-md p-2 w-fit">
                <DumbellIcon />
              </div>
              <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-[#1D7349] leading-7 font-semibold">
                {programObjective.title}
              </p>
            </div>
            <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
              {programObjective.description}
            </p>
          </div>
        </li>
        <Image src={TestImage} width={0} height={0} alt="jkbj" className="w-full h-full object-cover" />
    </div>
  );
};

export type ProgramObjectiveType = {
  id: number;
  title: string;
  description: string;
};

const programObjectives: ProgramObjectiveType[] = [
  {
    id: 1,
    title: "Build Lean Muscle Mass",
    description:
      "Through targeted resistance training and progressive overload, our program will help you increase muscle size, definition, and strength.",
  },
  {
    id: 2,
    title: "Improve Functional Strength",
    description:
      "Develop strength that translates to real-world activities and movements, enhancing your ability to perform daily tasks with ease and efficiency.",
  },
  {
    id: 3,
    title: "Enhance Metabolic Health",
    description:
      "Strength training boosts metabolism, promotes fat loss, and improves insulin sensitivity, leading to better overall metabolic health and body composition.",
  },
  {
    id: 4,
    title: "Cultivate Long-Term Habits",
    description:
      "Our program focuses not only on short-term results but also on instilling sustainable habits and lifestyle changes that support long-term health and fitness success.",
  },
];

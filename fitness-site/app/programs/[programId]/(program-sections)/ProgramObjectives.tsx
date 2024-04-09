import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { DumbellIcon } from "@/public/Icons";

// Objectives images - 2x za svaki program
import BuildLeanMuscle from "../../../../public/model2.png";
import ImproveFunctionalStrength from "../../../../public/model3.png";

// Objectives icons - 2x za svaki program

export default function ProgramObjectives() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
        Objectives/Goals
      </h1>
      <ul className="grid grid-cols-1 gap-6">
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
      <li className="relative flex flex-col gap-2 p-8 py-10 bg-[#111111] items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={BuildLeanMuscle}
            layout="fill"
            objectFit="cover"
            alt="image"
          />
        </div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-black opacity-95"></div>
        {/* Text Content */}
        <div className="relative z-10">
          <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] group-hover:text-[#C57D31] leading-7 font-semibold">
              {programObjective.title}
            </p>
          </div>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            {programObjective.description}
          </p>
        </div>
      </li>
      <Image
        src={BuildLeanMuscle}
        width={0}
        height={0}
        alt="jkbj"
        className="w-full h-full object-cover"
      />
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

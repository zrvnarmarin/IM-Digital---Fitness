import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";
import { DumbellIcon } from "@/public/Icons";

export default function ProgramFeatures() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
        Features
      </h1>
      <div className="flex flex-col gap-6 relative">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((keyFeature) => (
            <KeyFeatureCard key={keyFeature.id} keyFeature={keyFeature} />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

export const KeyFeatureCard = ({ keyFeature }: { keyFeature: KeyFeature }) => {
  return (
    <li
      className="group flex flex-row gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] duration-100 "
    >
      <div className="flex gap-4 items-center">
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row md:flex-col items-center md:items-start">
          {/* <div className=" bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div> */}
          <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] group-hover:text-[#C57D31] leading-7 font-semibold">
            {keyFeature.title}
          </p>
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          {keyFeature.description}
        </p>
      </div>
    </li>
  );
};

export type KeyFeature = {
  id: number;
  title: string;
  description: string;
};

const keyFeatures = [
  {
    id: 1,
    title: "Structured Workouts",
    description:
      "Our program offers meticulously designed workouts that target all major muscle groups and incorporate a variety of exercises to ensure balanced development and prevent overuse injuries.",
  },
  {
    id: 2,
    title: "Progressive Overload",
    description:
      "We emphasize progressive overload principles to continually challenge your muscles and stimulate growth, ensuring ongoing progress and adaptation with power.",
  },
  {
    id: 3,
    title: "Personalized Approach",
    description:
      "Our certified personal trainers will provide individualized attention and guidance to accommodate your unique fitness level, goals, and any specific needs or limitations you may have.",
  },
  {
    id: 4,
    title: "Supportive Community",
    description:
      "Join a supportive community of like-minded individuals who share your commitment to strength training and are there to encourage, motivate, and celebrate your successes.",
  },
];
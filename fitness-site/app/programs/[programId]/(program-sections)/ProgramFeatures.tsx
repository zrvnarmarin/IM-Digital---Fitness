import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";
import { DumbellIcon } from "@/public/Icons";

export default function ProgramFeatures() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        Features
      </h1>
      <div className="flex flex-col gap-6 relative">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      className="group flex flex-row rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row md:flex-col items-center md:items-start gap-3">
          <div className="w-full flex items-center gap-3 ">
            <span className="rounded-full p-2 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
              <DumbellIcon  width={30} height={30} />
            </span>
            <p className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">{keyFeature.title}</p>
          </div>
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2">
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
      "Our program offers meticulously designed workouts that target all major muscle groups",
  },
  {
    id: 2,
    title: "Progressive Overload",
    description:
      "We emphasize progressive overload principles to continually challenge your muscles",
  },
  {
    id: 3,
    title: "Customized Approach",
    description:
      "Our certified personal trainers will provide individualized attention and guidance",
  },
  {
    id: 4,
    title: "Caring Community",
    description:
      "Join a supportive community of like-minded individuals who share your commitment ",
  },
];
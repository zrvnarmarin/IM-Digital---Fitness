import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";
import { DumbellIcon } from "@/public/Icons";

export default function ProgramOverviewSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className=" bg-[#1D7349] rounded-md p-2 w-fit">
                <DumbellIcon />
              </div>
              <span className="uppercase font-normal text-white text-2xl tracking-wider w-full">
                Intensity:
              </span>
            </div>
            <div className="w-full border-gray-500 rounded-md bg-slate-700">
              <div
                className={`h-2 border border-gray-500 rounded-md ${
                  intensity === "Low"
                    ? "w-1/3 bg-[#1D7349]"
                    : intensity === "Moderate"
                      ? "w-2/3 bg-[#1D7349]"
                      : "w-full bg-[#1D7349]"
                }`}
              ></div>
            </div>
            <div className="w-full flex justify-end">
              <p className="uppercase font-normal text-white text-2xl tracking-wider w-fit text-end bg-[#1D7349] p-2 rounded-md">
                {`[${intensity}]`}
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className=" bg-[#1D7349] rounded-md p-2 w-fit">
                <DumbellIcon />
              </div>
              <span className="uppercase font-normal text-white text-2xl tracking-wider w-full">
                Duration:
              </span>
            </div>
            <p className="text-end uppercase font-normal text-white text-2xl tracking-wider w-full">
              [6 weeks]
            </p>
          </div>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            {description}
          </p>
          <ul className="flex flex-row gap-6">
            {somethingArray.map((something) => (
              <SomethingCard key={something.id} something={something} />
            ))}
          </ul>
        </div>

        <div>
          <Image
            src={TestImage}
            width={0}
            height={0}
            alt="jkbj"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 relative">
        <ul className="flex flex-col gap-6">
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
      //#1F2125
      className="group flex flex-col md:flex-row gap-8 rounded-md bg-[#111111] duration-100 hover:bg-[#161616] py-4 px-6"
    >
      <div className="grid grid-cols-2 gap-4 rounded-md">
        <div className="rounded-md flex items-center justify-center">
          <p className="font-semibold text-[#1D7349] text-lg md:text-xl lg:text-2xl tracking-wide uppercase">
            {keyFeature.title}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
            {keyFeature.description}
          </p>
        </div>
      </div>
    </li>
  );
};

export const SomethingCard = ({ something }: { something: SomethingType }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md p-6 bg-[#111111] duration-100 border-2 border-[#1D7349]">
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
        <div className=" bg-[#1D7349] rounded-md p-2 w-fit">
          <DumbellIcon />
        </div>
        <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
          {something.title}
        </p>
      </div>
      <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
        {something.description}
      </p>
    </div>
  );
};

export type KeyFeature = {
  id: number;
  title: string;
  description: string;
};

export type SomethingType = {
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

const somethingArray = [
  {
    id: 1,
    title: "Something",
    description:
      "Develops something strength to perform daily tasks with ease and reduce the risk of injury.",
  },
  {
    id: 2,
    title: "Something Definition",
    description:
      "Builds something mass and enhances muscle definition for a more aesthetic physique.",
  },
];

const description = `Our Strength Training Program is a comprehensive and results-driven
fitness program designed to help individuals of all fitness levels build
muscle, increase strength, and improve overall physical performance.
Whether you're a beginner looking to develop a solid foundation of
strength or an experienced lifter aiming to break through plateaus, our
program provides expert guidance and support to help you reach your
goals`;

const intensity = "High";

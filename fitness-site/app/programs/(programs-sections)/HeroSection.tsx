import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProgramsHeroSectionImage from "../../../public/programs-hero-section.avif";
import { HeartIcon } from "@/public/Icons";
import { DumbellIcon } from "@/public/Icons";
import { RightIcon } from "@/public/Icons";
import { DurationIcon } from "@/public/Icons";

export default function HeroSection() {
  return (
    <>
      <div className="relative text-white min-h-64 flex items-center justify-center">
        <div className="relative brightness-50 max-h-1/2 w-screen">
          <Image
            src={ProgramsHeroSectionImage}
            alt="Image"
            className="z-10 w-full object-cover h-[24rem] brightness-50"
            height={0}
            width={0}
          />
        </div>
        <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Programs
        </p>
      </div>
      <section className="px-6 md:px-8 lg:px-24 pl-8 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-12">
        {fitnessPrograms.map((program, index) => (
          <ProgramCard
            key={program.title}
            program={program}
            isLastItem={index === fitnessPrograms.length - 1}
          />
        ))}
      </section>
    </>
  );
}

export function ProgramCard({
  program,
  isLastItem,
}: {
  program: Program;
  isLastItem?: boolean;
}) {
  const cardClass = `flex flex-col gap-8 rounded-xl p-6 bg-[#1F2125] hover:scale-105 hover:bg-[#35373B] hover:outline-2 focus:outline-2 outline-[#1D7349] cursor-pointer ${
    isLastItem ? "lg:col-span-2xl" : ""
  }`;

  return (
    <Link href={program.href} className={cardClass}>
      <div className="flex gap-4 items-center">
        <div className="bg-[#1D7349] rounded-xl p-2 w-fit">
          {program.icon()}
        </div>
        <p className="text-md md:text-lg lg:text-xl text-white leading-7 font-semibold">
          {program.title}
        </p>
      </div>
      <p className="text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        {program.description}
      </p>
      {program.duration && (
        <div className="text-sm md:text-md text-gray-300 leading-2 font-normal flex flex-row gap-2 items-center">
          <span className="bg-[#1D7349] rounded-md p-1 text-lg">
            <DurationIcon />
          </span>
          <span className="text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-semibold">
            Duration:
          </span>
          <span className="text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            {program.duration}
          </span>
        </div>
      )}
      {program.intensity && (
        <div className="text-sm md:text-md text-gray-300 leading-2 font-normal">
          <span className="text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-semibold">
            Intensity:
          </span>
          <div className="w-full border-gray-500 rounded-md bg-slate-700">
            <div
              className={`h-2 border border-gray-500 rounded-md
              ${
                program.intensity === "Low"
                  ? "w-1/3 bg-green-400"
                  : program.intensity === "Moderate"
                  ? "w-2/3 bg-yellow-400"
                  : "w-full bg-red-400"
              }`}
            ></div>
          </div>
        </div>
      )}
      <div>
        <p className="flex gap-4 justify-end text-md lg:text-lg text-white leading-2 font-medium">
          Discover More
          <RightIcon />
        </p>
      </div>
    </Link>
  );
}

type Program = {
  title: string;
  href: string;
  description: string;
  keyExercises?: string[];
  keyPoses?: string[];
  buttonText: string;
  duration?: string;
  intensity?: string;
  icon: () => JSX.Element;
};

const fitnessPrograms = [
  {
    title: "Cardio Blast",
    href: "/programs/cardio-blast",
    description:
      "This high-intensity cardio program is designed to improve cardiovascular fitness and burn calories.",
    keyExercises: ["Running", "Cycling", "Jump Rope"],
    buttonText: "Start Program",
    duration: "4 weeks",
    intensity: "High",
    icon: HeartIcon,
  },
  {
    title: "Strength Builder",
    href: "/programs/strength-builder",
    description:
      "Embark on a journey to build robust strength and lean muscle with our Strength Builder program.",
    keyExercises: ["Squats", "Deadlifts", "Bench Press"],
    buttonText: "Start Program",
    duration: "6 weeks",
    intensity: "Moderate",
    icon: DumbellIcon,
  },
  {
    title: "CrossFit Challenge",
    href: "/programs/crossfit-challenge",
    description:
      "Engage in the ultimate fitness adventure with our CrossFit Challenge program. ",
    keyExercises: ["Box Jumps", "Kettlebell Swings", "Rope Climbs"],
    buttonText: "Start Program",
    duration: "10 weeks",
    intensity: "Very High",
    icon: HeartIcon,
  },
  {
    title: "Yoga and Meditation",
    href: "/programs/yoga-and-meditation",
    description:
      "Discover harmony and flexibility through our Yoga and Meditation program.",
    keyPoses: ["Sun Salutations", "Warrior Series", "Balancing Poses"],
    buttonText: "Start Program",
    duration: "8 weeks",
    intensity: "Low",
    icon: DumbellIcon,
  },
];

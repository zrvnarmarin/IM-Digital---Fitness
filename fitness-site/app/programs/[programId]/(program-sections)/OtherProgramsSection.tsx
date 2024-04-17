import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import React from "react";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";

export default function OtherProgramsSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-3">
          <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
            Assets
          </p>
          <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
            Other similar plans
          </h1>
          <p className="text-white">
            See other plans for getting you in the best shape
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
            &larr;
          </button>
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
            &rarr;
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end gap-4"></div>
      <div className="flex flex-row items-center gap-6 relative">
        <div className="flex-grow">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
            {otherPrograms.map((otherProgram) => (
              <OtherProgramCard
                key={otherProgram.id}
                otherProgram={otherProgram}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden gap-4">
        <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
          &larr;
        </button>
        <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
          &rarr;
        </button>
      </div>
    </SectionWrapper>
  );
}

export function OtherProgramCard({
  otherProgram,
}: {
  otherProgram: OtherProgramCardTape;
}) {
  return (
    <div
      key={otherProgram.id}
      className="flex flex-col gap-2 rounded-lg bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
    >
      <Image
        src={TestImage}
        width={0}
        height={0}
        alt="slika"
        className="rounded-lg"
      />
      <p className="px-2 text-lg tracking-normal text-start leading-7 font-medium text-white">
        {otherProgram.name}
      </p>
      <p className="p-2 text-white">
        {otherProgram.duration} <br />
        <span className="text-xs text-gray-300">{otherProgram.intensity}</span>
      </p>
    </div>
  );
}

export type OtherProgramCardTape = {
  id: number;
  name: string;
  duration: string;
  intensity: string;
};

const otherPrograms = [
  {
    id: 1,
    name: "Cardio Blast",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
  {
    id: 1,
    name: "Calisthenics",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
  {
    id: 3,
    name: "Strength",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
  {
    id: 4,
    name: "Strength",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
  {
    id: 5,
    name: "Strength",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
];

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Program } from "@/app/types";
import { programs } from "@/app/data";
import { DurationIcon, RightIcon } from "@/public/Icons";

export function ProgramCardsSection() {
  return (
    <section className="px-6 md:px-8 lg:px-24 pl-8 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-12">
      {programs.map((program, index) => (
        <ProgramCard
          key={program.title}
          program={program}
          isLastItem={index === programs.length - 1}
        />
      ))}
    </section>
  );
}

export function ProgramCard({
  program,
  isLastItem,
}: {
  program: Program;
  isLastItem?: boolean;
}) {
  const cardClass = `flex flex-col gap-6 rounded-xl bg-[#1F2125] hover:scale-105 hover:bg-[#35373B] 
      hover:outline-2 focus:outline-2 outline-[#1D7349] cursor-pointer pb-6 ${
        isLastItem ? "lg:col-span-2xl" : ""
      }`;

  return (
    <Link href={program.href} className={cardClass}>
      <div className="w-full flex">
        <Image
          src={program.image}
          alt="program_image"
          width={0}
          height={0}
          className="rounded-t-md"
        />
      </div>
      <div className="flex gap-4 items-center px-4">
        <div className="bg-[#1D7349] rounded-xl p-2 w-12 h-12 flex items-center justify-center">
          {program.icon()}
        </div>
        <p className="text-xl tracking-wider md:text-lg lg:text-xl text-start text-white leading-7 font-medium ">
          {program.title}
        </p>
      </div>
      <p className="px-4 normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        {program.description}
      </p>
      {program.duration && (
        <div className="flex-1 px-4 text-sm md:text-md text-gray-300 leading-2 font-normal flex flex-row gap-2 items-center">
          <span className="bg-[#1D7349] rounded-md p-1 text-lg">
            <DurationIcon />
          </span>
          <span className="text-md tracking-wider lg:text-lg text-white leading-2 font-medium">
            Duration:
          </span>
          <span className="text-md md:text-md lg:text-lg text-white leading-2 font-normal">
            {program.duration}
          </span>
        </div>
      )}
      {program.intensity && (
        <div className="px-4 flex flex-col gap-2 text-sm md:text-md text-gray-300 leading-2 font-normal">
          <span className="text-md tracking-wider lg:text-lg text-white leading-2 font-normal">
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

      <p className="flex px-4 items-center gap-4 justify-end text-md tracking-wider lg:text-lg text-white leading-2 font-medium">
        Discover More
        <RightIcon strokeOne="#FFFFFF" strokeTwo="#FFFFFF" />
      </p>
    </Link>
  );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Program } from "@/app/types";
import { programs } from "@/app/data";
import { DurationIcon, RightIcon } from "@/public/Icons";
import TestImage from '../../../public/CardioBlastImage.jpg'
import ShareIcon from '../../../public/share-arrow-svgrepo-com.png'
import { DumbellIcon } from "@/public/Icons";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export function ProgramCardsSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <ProgramCard
            key={program.title}
            program={program}
            isLastItem={index === programs.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export function ProgramCard({
  program,
  isLastItem,
}: {
  program: Program;
  isLastItem?: boolean;
}) {
  return (
    <Link href={program.href} className={`bg-[#111111]`}>
      <div className="w-full flex rounded-t-md">
        <Image
          src={TestImage}
          alt="program_image"
          width={0}
          height={0}
          className="rounded-t-md"
        />
      </div>

      <div className="px-8 py-8 bg-gradient-to-r from-[#101010] hover:from-[#101010] hover:to-[#292929] to-[#161616] border border-[#292929] duration-900 rounded-b-lg">
        <div className="flex flex-col gap-3 items-start justify-start rounded-lg">
          <div className="w-full flex items-center justify-between rounded-lg">
            <span className="normal-case text-xs text-white leading-2 font-normal border border-[#31C57D] px-3 py-1 rounded-lg">
              Intensity
            </span>
            <span><Image src={ShareIcon} width={20} height={20} alt="share_icon" /></span>
          </div>
          <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
            {program.title}
          </p>
        </div>
        <div className="flex flex-col pt-8">
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            {program.description}
          </p>
        </div>

        <div className="border-b border-gray-600 flex items-center justify-between pt-12 pb-4 normal-case tracking-normal text-2xs md:text-sm lg:text-lg text-gray-100 leading-2 font-normal">
          <span className="flex flex-row items-center gap-2 normal-case text-xs text-white leading-2 font-normal">
            <DumbellIcon /> 24 Number Of
          </span>
          <span className="flex flex-row items-center gap-2 normal-case text-xs text-white leading-2 font-normal">
            <DumbellIcon />7 Ways for
          </span>
        </div>

        {/* Rasmiliti da li ovdje staviti gumb, da li se uklapa u dizajn */}
        <div className="flex flex-row justify-between items-center pt-4">
          <p className="text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] group-hover:text-[#C57D31] leading-7 font-semibold">
            $130.00
          </p>
          <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Discover More
        </button>
        </div>
      </div>
      
    </Link>
  );
}

// TO DO: grab this code and put it inside card for intensity property in the future
// {program.intensity && (
//   //         <div className="px-8 flex flex-col gap-2 normal-case tracking-normal text-md md:text-md lg:text-lg text-gray-100 leading-2 font-normal">
//   //           Intensity:
//   //           <div className="w-full border-gray-500 rounded-md bg-slate-700">
//   //             <div
//   //               className={`h-2 border border-gray-500 rounded-md
//   //                 ${
//   //                   program.intensity === "Low"
//   //                     ? "w-1/3 bg-[#1D7349]"
//   //                     : program.intensity === "Moderate"
//   //                     ? "w-2/3 bg-[#1D7349]"
//   //                     : "w-full bg-[#1D7349]"
//   //                 }`}
//   //             ></div>
//   //           </div>
//   //         </div>
//   //       )}
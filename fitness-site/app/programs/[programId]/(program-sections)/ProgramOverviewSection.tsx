import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";
import { DumbellIcon } from "@/public/Icons";
import { formatString } from "@/app/utils/helpers";

export default function ProgramOverviewSection({ programId } : { programdId: string }) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8 rounded-lg ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="w-full flex flex-col items-start justify-between gap-4">
              <h1 className="uppercase italic text-[#31C57D] text-2xl tracking-normal font-semibold">
                Feel your strength
              </h1>
                <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between w-full bg-gradient-to-r from-[#101010] to-[#191919] border border-[#292929] py-3 px-4 rounded-lg">
              <div className="flex flex-row items-center justify-between gap-4 text-sm tracking-normal text-end text-white leading-7 font-medium">
                <span className="font-semibold">Duration:</span> <span className="font-normal">6 Weeks</span>
              </div>
              <div className="flex flex-row items-center justify-between gap-4">
                <span className="text-sm tracking-normal text-end text-white leading-7 font-semibold">
                  Intensity:
                </span>
                <div className="flex flex-row items-center justify-end w-1/3 gap-2">
                  <span className="w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                  <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                  <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                </div>
              </div>
            </div>

          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Phase 1
            </button>
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Phase 1
            </button>
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Phase 1
            </button>
          </div>
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
    </SectionWrapper>
  );
}

const description = `Our Strength Training Program is a comprehensive and results-driven
fitness program designed to help individuals of all fitness levels build
muscle, increase strength, and improve overall physical performance.
Whether you're a beginner looking to develop a solid foundation of
strength or an experienced lifter aiming to break through plateaus, our
program provides expert guidance and support to help you reach your
goals`;

const intensity = "High";

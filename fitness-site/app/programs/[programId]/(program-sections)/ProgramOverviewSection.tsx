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
              <div className="w-full flex items-center justify-between">
                <span className="text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
                  Intensity:
                </span>
                <span className="text-xl md:text-xl lg:text-xl tracking-normal text-end text-white leading-7 font-semibold">
                  {`[${intensity}]`}
                </span>
              </div>
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
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className=" bg-[#1D7349] rounded-md p-2 w-fit">
                <DumbellIcon />
              </div>
              <span className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-end text-white leading-7 font-semibold">
                Duration:
              </span>
            </div>
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-end text-white leading-7 font-semibold">
              [6 weeks]
            </p>
          </div>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            {description}
          </p>
          
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

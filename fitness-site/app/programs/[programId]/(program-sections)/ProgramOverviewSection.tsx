import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";
import { DumbellIcon } from "@/public/Icons";

//TO DO: sav style dobar do intensity sekcije, nakon tog treba izmjeniti i razmisliti za drugi dizajn; i dalje duration i button prikati
export default function ProgramOverviewSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-12 rounded-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="w-full flex flex-col items-start justify-between gap-3">
                <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
                  Assets
                </p>
                <h1 className="w-full h2">Feel your strength</h1>
                <div className="w-full flex flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <p className="normal-case text-md md:text-md text-white leading-2 font-semibold">
                      Intensity:
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-end w-1/3 gap-2">
                    <span className="w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                    <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                    <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
                  </div>
                </div>
                <p className="text-normal">{description}</p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-3">
              <span className="w-2.5  h-6 bg-[#31C57D]" />
              <span className="w-2.5  h-6 bg-[#31C57D]" />
              <span className="w-2.5  h-6 bg-[#31C57D]" />
              <span className="w-2.5  h-6 bg-[#31C57D]" />
              <span className="w-2.5  h-6 bg-[#31C57D]" />
              <span className="w-2.5  h-6 bg-[#31C57D]" />
              <span className="w-2.5  h-6 bg-[#31C57D]" />
            </div>

            <div className="flex flex-col xl:flex-row justify-between w-full gap-2">
              <div className="flex flex-row items-center justify-between gap-4 normal-case text-md md:text-md text-white leading-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full p-2 bg-[#292929] border border-[#292929]">
                    <DumbellIcon />
                  </span>
                  <span className="font-semibold">Duration:</span>
                </div>
                <span className="normal-case text-md md:text-xl text-gray-300 leading-2 font-semibold">
                  6 Weeks
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-6 normal-case text-md md:text-md text-white leading-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full p-2 bg-[#292929] border border-[#292929]">
                    <DumbellIcon />
                  </span>
                  <span className="font-semibold">Duration:</span>
                </div>
                <span className="normal-case text-md md:text-xl text-gray-300 leading-2 font-semibold">
                  6 Weeks
                </span>
              </div>
            </div>
          </div>

          {/* <div className="w-full flex justify-start">
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Lorem Ipsum
            </button>
          </div> */}
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

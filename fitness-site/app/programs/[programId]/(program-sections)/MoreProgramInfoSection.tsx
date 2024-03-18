import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from '../../../../public/HeroTestTest.jpg'

export default function MoreProgramInfoSection() {
  return (
    <SectionWrapper>
{/* https://www.bodybuilding.com/workout-plans/about/mft28-greg-plitts-4-week-military-fitness-trainer-by-met-rx po ovome */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-row items-center gap-4">
          <div className="w-full flex flex-col items-start justify-between gap-4">
            <h2 className="w-full flex items-center gap-3 text-lg tracking-normal text-start text-[#ffffff] leading-7 font-semibold">
              Feel the power within you
            </h2>
            <div className="flex flex-row items-center justify-between gap-4 text-sm tracking-normal text-end text-white leading-7 font-medium">
              <span className="font-semibold text-[#31C57D]">11 workouts per week / 45-90 min. workouts</span>
            </div>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur iure! Ratione 
              soluta perferendis adipisci fuga quo pariatur ullam itaque!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur iure! Ratione 
              soluta perferendis adipisci fuga quo pariatur ullam itaque!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur iure! Ratione 
              soluta perferendis adipisci fuga quo pariatur ullam itaque!
            </p>
            <div className="w-full flex flex-row items-center gap-6">
              <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
                View Full Calendar
              </button>
              <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
                Lorem Ipsum
              </button>
            </div>
          </div>
        </div>
        <Image
          src={TestImage}
          alt="alt"
          className="rounded-lg object-cover"
        />
      </div>
    </SectionWrapper>
  );
}
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
            <h2 className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
              Feel the power within you
            </h2>
            <div className="flex flex-row items-center justify-between gap-4 normal-case text-md md:text-md text-gray-300 leading-2">
              <span className="font-medium text-[#31C57D]">11 workouts per week / 45-90 min. workouts</span>
            </div>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur iure! Ratione 
              soluta perferendis adipisci fuga quo pariatur ullam itaque!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur iure! Ratione 
              soluta perferendis adipisci fuga quo pariatur ullam itaque!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, consequatur iure! Ratione 
              soluta perferendis adipisci fuga quo pariatur ullam itaque!
            </p>
            <div className="w-full flex flex-row items-center gap-4 pt-4">
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
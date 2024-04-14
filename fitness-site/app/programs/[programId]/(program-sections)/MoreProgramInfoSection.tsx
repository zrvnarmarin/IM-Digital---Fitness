import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";

export default function MoreProgramInfoSection() {
  return (
    <SectionWrapper>
      {/* https://www.bodybuilding.com/workout-plans/about/mft28-greg-plitts-4-week-military-fitness-trainer-by-met-rx po ovome */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-row items-center gap-4">
          <div className="w-full flex flex-col items-start justify-between gap-4">
            <div className="flex flex-col gap-3">
              <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
                Assets
              </p>
              <h2 className="w-full h2">Feel the power within you</h2>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 normal-case text-md md:text-md text-gray-300 leading-2">
              <span className="font-medium text-[#31C57D]">
                11 workouts per week / 45-90 min. workouts
              </span>
            </div>
            <p className="text-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              consequatur iure! Ratione soluta perferendis adipisci fuga quo
              pariatur ullam itaque! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Officia, consequatur iure! Ratione soluta
              perferendis adipisci fuga quo pariatur ullam itaque! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Officia, consequatur
              iure! Ratione soluta perferendis adipisci fuga quo pariatur ullam
              itaque!
            </p>
            <div className="w-fit flex flex-row items-center gap-4 pt-4">
              <button className="btn-primary">View Full Calendar</button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={TestImage}
            alt="alt"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

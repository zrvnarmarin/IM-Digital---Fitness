import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-row gap-4 items-center">
        
        <div className="flex flex-col gap-2">
          <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
            Explore our programs
          </p>
          <h1 className="text-white text-7xl tracking-tight text-start font-bold">
            Programs
          </h1>
          <p className="normal-case text-start text-md md:text-md text-gray-300 leading-2 pr-48">
            Dive into a world of massage and relaxing with our premier swimming lessons.
            Whether you're dipping your toes into the water for the first time or looking to refine your
            stroke technique, our team of certified instructors is here to guide you through every splash.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
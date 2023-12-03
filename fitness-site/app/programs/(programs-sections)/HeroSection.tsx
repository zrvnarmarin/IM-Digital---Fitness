import React from "react";
import Image from "next/image";
import ProgramsHeroSectionImage from "../../../public/programs-hero-section.avif";

export default function HeroSection() {
  return (
    <div className="relative text-white min-h-64 flex items-center justify-center">
      <div className="relative brightness-50 max-h-1/2 w-screen">
        <Image
          src={ProgramsHeroSectionImage}
          alt="Image"
          className="z-10 w-full object-cover h-[24rem] brightness-50"
          height={0}
          width={0}
        />
      </div>
      <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        Programs
      </p>
    </div>
  );
}

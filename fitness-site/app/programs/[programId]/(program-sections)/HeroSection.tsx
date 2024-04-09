import { formatString } from "@/app/utils/helpers";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutUsHeroImage from "../../../../public/HeroTestTest.jpg";

export default function HeroSection({ programId }: { programId: string }) {
  return (
    <div className="relative w-full h-screen">
      {/* Image spans across the width and height of the screen */}
      <div className="absolute inset-0">
        <Image
          priority
          src={AboutUsHeroImage}
          alt="alt"
          layout="fill"
          objectPosition="center"
          className="rounded-md object-cover"
        />
      </div>

      {/* Overlaying color */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Overlaying text content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-2">
        <p className="uppercase text-md md:text-md text-gray-300 leading-2 font-normal pb-4">
          Brutalize Your Strength
        </p>
        <h1 className="text-xl md:text-4xl lg:text-5xl tracking-normal leading-7 font-semibold">
          {formatString(programId)}
        </h1>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal"></p>
        <div className="mt-6">
          <Link
            href={"/contact"}
            className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

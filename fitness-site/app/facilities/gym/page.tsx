import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from '../../../public/HeroTestTest.jpg'
import Link from "next/link";
import { DumbellIcon } from "@/public/Icons";

// pogledaj behance za inspiraciju za dizajn

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection />
    </main>
  )
}

export function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Image spans across the width and height of the screen */}
      <div className="absolute inset-0">
        <Image
          priority
          src={TestImage}
          alt="alt"
          layout="fill"
          className="rounded-md object-cover"
        />
      </div>

      {/* Overlaying color */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Overlaying text content */}
      <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center text-white p-2 px-8 md:px-14 lg:px-28 xl:px-36 2xl:px-42 3xl:px-80">
        <div className="flex flex-col ">
          <div className="w-full flex pt-2 justify-start">
            <h1 className="text-white text-7xl tracking-tight font-bold">
              Gym
            </h1>
          </div>
          <div className="w-full flex pt-6 justify-start">
            <p className="normal-case text-start text-md md:text-md text-gray-300 leading-2">
              Dive into a world of aquatic adventure and skill-building with our premier swimming lessons.
              Whether you're dipping your toes into the water for the first time or looking to refine your
              stroke technique, our team of certified instructors is here to guide you through every splash.
              Dive into a world of aquatic adventure and skill-building with our premier swimming lessons.
              Whether you're dipping your toes into the water for the first time or looking to refine your
              stroke technique, our team of certified instructors is here to guide you through every splash.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row gap-2 items-center justify-evenly">
            <div
                className="w-full flex flex-row justify-center border border-[#292929] rounded-lg p-6"
                >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row md:flex-col items-center md:items-start gap-3">
                    <div className="w-full flex items-center gap-3 ">
                        <span className="rounded-full p-2 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                        <DumbellIcon  width={30} height={30} />
                        </span>
                        <p className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">Always Open</p>
                    </div>
                    </div>
                    <p className="normal-case text-md md:text-md text-gray-300 leading-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum.
                    </p>
                </div>
            </div>
            <div
                className="w-full flex flex-row justify-center border border-[#292929] rounded-lg p-6"
                >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row md:flex-col items-center md:items-start gap-3">
                    <div className="w-full flex items-center gap-3 ">
                        <span className="rounded-full p-2 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                            <DumbellIcon  width={30} height={30} />
                        </span>
                        <p className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
                            Group Trainings
                        </p>
                    </div>
                    </div>
                    <p className="normal-case text-md md:text-md text-gray-300 leading-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </div>
            </div>
        </div>
      </div>

      <div>
        marin
      </div>
    </div>
  );
}
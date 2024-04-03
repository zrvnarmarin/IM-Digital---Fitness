import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from '../../../public/HeroTestTest.jpg'
import Link from "next/link";
import { DumbellIcon, TestIcon, TestIconTwo } from "@/public/Icons";

// pogledaj behance za inspiraciju za dizajn

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection />
      <SecondSection />
      <PricingSection />
      <GallerySection />
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

export function SecondSection() {
  return (
    <SectionWrapper>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">

          <div className="flex flex-col gap-3">
            <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
              Best quality
            </p>
            <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
              Enmerge in our open-space gym
            </h1>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2">
              In the “golden days”,
              there weren’t many options for working out.
              But Joe Gold, our founder, had a passion for bodybuilding. He found
              success as a professional “muscleman” and
              toured with celebrities!
              But Joe Gold, our founder, had a passion for bodybuilding. He found
              success as a professional “muscleman”
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="flex items-center gap-4">
              <TestIcon />
              <p className="text-md md:text-md text-gray-300 leading-2 uppercase font-semibold">Flawless machines</p>
            </div>
            <div className="flex items-center gap-4">
              <TestIconTwo />
              <p className="text-md md:text-md text-gray-300 leading-2 uppercase font-semibold">Opened 24/7</p>
            </div>
            <div className="flex items-center gap-4">
              <TestIcon />
              <p className="text-md md:text-md text-gray-300 leading-2 uppercase font-semibold">Group Trainings</p>
            </div>
            <div className="flex items-center gap-4">
              <TestIconTwo />
              <p className="text-md md:text-md text-gray-300 leading-2 uppercase font-semibold">Clean and big space</p>
            </div>
          </div>

        </div>

        <div className="text-white flex items-center justify-center">
          <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
            <Image
              priority
              src={TestImage}
              alt="alt"
              fill={true}
              // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function GallerySection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(item =>
          <div key={item} className="cursor-pointer">
            <Image
              priority
              src={TestImage}
              alt="alt"
              width={0}
              height={0}
              // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
              className="object-cover rounded-md"
            />
          </div>
        )}
      </div>
      <p className="text-center normal-case text-md md:text-md text-gray-300 leading-2">
        Embark on the path of the strenght - the ONLY path! <br />
      </p>
      <div className="w-full flex items-center justify-center">
        <Link 
          href={'/contact'} 
          className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
        >
          Join Aeon Olympia Gym
        </Link>
      </div>
    </SectionWrapper>
  )
}

export function PricingSection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        Pricing
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-between">

        <div className="w-full flex flex-col gap-2 p-6 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
          <h1 className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
            Parcijalna masaža
          </h1>
          <p className="pt-2 normal-case text-sm text-white leading-2 font-semibold">&#x2022; 55 min</p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2">
            Leđa ili noge
          </p>
          <div className="flex flex-row justify-between items-center pt-2">
          <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
            $35.00
          </p>
          <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Buy Now
          </button>
        </div>
        </div>

        <div className="w-full flex flex-col gap-2 p-6 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
          <h1 className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
            Masaža cijelog tijela
          </h1>
          <p className="pt-2 normal-case text-sm text-white leading-2 font-semibold">&#x2022; 55 min</p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2">
            Vrat, leđa, ruke i noge
          </p>
          <div className="flex flex-row justify-between items-center pt-2">
          <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
            $65.00
          </p>
          <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Buy Now
          </button>
        </div>
        </div>

      </div>
      <p className="text-center normal-case text-md md:text-md text-gray-300 leading-2">
        If you have our app, you can manage your appointment from there. <br />
      </p>
      <div className="w-full flex items-center justify-center">
        <Link 
          href={'/contact'} 
          className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
        >
          Log In To App
        </Link>
      </div>
    </SectionWrapper>
  )
}
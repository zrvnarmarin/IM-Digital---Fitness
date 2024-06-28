import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from "../../../public/HeroTestTest.jpg";
import Link from "next/link";
import { DumbellIcon, TestIcon, TestIconTwo } from "@/public/Icons";
import { title } from "process";
import { UniqueSellingPointIconThree } from "@/app/data/uniqueSellingPoints";
import { ProgramSmallIcon } from "@/app/(home-sections)/Programs";
import { NewsletterSectionEmbelishment } from "@/app/(home-sections)/SignUpForAnEmail";
import { RightArrow } from "@/app/(home-sections)/OurTeam";

// pogledaj behance za inspiraciju za dizajn

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-black">
      <HeroSection />
      <SecondSection />
      <PricingSection />
      <GallerySection />
      <CallToActionSection />
    </main>
  );
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
            <h1 className="w-full text-white text-[84px]  text-center font-medium z-20">
              Gym
            </h1>
          </div>
          <div className="w-full flex pt-6 justify-start">
            <p className="normal-case text-center text-md md:text-md text-gray-300 leading-2">
              Dive into a world of aquatic adventure and skill-building with our
              premier swimming lessons. Whether you`re dipping your toes into
              the water for the first time or looking to refine your stroke
              technique, our team of certified instructors is here to guide you
              through every splash. Dive into a world of aquatic adventure and
              skill-building with our premier swimming lessons. Whether you`re
              dipping your toes into the water for the first time or looking to
              refine your stroke technique, our team of certified instructors is
              here to guide you through every splash.
            </p>
          </div>
        </div>

        {/* Gym characteristics */}
        <div className="w-full flex flex-row gap-6 items-center justify-evenly">
          {gymCharacteristics.map((gymCharacteristic) => (
            <div
              key={gymCharacteristic.id}
              className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#090a0c] to-[#131313] border-[0.5px] border-[#111316]"
            >
              <div className="flex flex-row md:flex-col gap-4 items-center md:items-center">
                <UniqueSellingPointIconThree />
                <h3 className="h3 text-center">Always Open</h3>
              </div>
              <p className="text-normal text-center pt-3">
                into the water for the first time or looking to
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>marin</div>
    </div>
  );
}

export const gymCharacteristics = [
  {
    id: 1,
    title: "Always Open",
    description: "Our gyms are open 24/7. ",
  },
  {
    id: 2,
    title: "Always Open",
    description: "Our gyms are open 24/7. ",
  },
  {
    id: 3,
    title: "Always Open",
    description: "Our gyms are open 24/7. ",
  },
  {
    id: 4,
    title: "Always Open",
    description: "Our gyms are open 24/7. ",
  },
];

export function SecondSection() {
  return (
    <SectionWrapper>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12">
        <div className="w-full relative flex items-center justify-start lg:justify-center">
          {/* Image */}
          <Image
            priority
            src={TestImage}
            alt="alt"
            className="md:max-h-[400px] md:max-w-[800px] lg:max-w-full z-20 object-cover rounded-md"
          />
        </div>

        <div className="relative flex flex-col gap-3 bg-gradient-to-r from-[#090a0c] to-[#161616] border-[0.5px] border-[#111316] p-5 rounded-lg">
          {/* Blur background */}
          <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>

          <div className="flex flex-col z-20">
            <p className="text-above-heading">Look no further</p>
            <h3 className="w-full h3 text-3xl pt-1">The most quality gym</h3>
          </div>
          <p className="text-normal z-20 pt-4">
            In the “golden days”, there weren`t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman”
          </p>
          <div className="w-full flex flex-col items-start justify-start gap-4 pt-4">
            <div className="w-full flex items-center justify-between">
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function GallerySection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start justify-start gap-1">
        <p className="text-above-heading">See our gym inside</p>
        <h1 className="h2">Gallery</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (item) => (
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
          )
        )}
      </div>
      {/* <div className="w-full flex items-center justify-center text-normal rotate-90">
        <RightArrow />
      </div>
      <p className="text-normal text-center z-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        soluta exercitationem unde placeat eum? Sunt debitis porro ea impedit
        libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Inventore soluta exercitationem unde placeat eum? Sunt debitis porro ea
        impedit libero?
      </p> */}
    </SectionWrapper>
  );
}

export function PricingSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Pricing</h2>
      <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="relative w-full flex flex-col gap-2 bg-gradient-to-r from-[#090a0c] to-[#212121] border-[0.5px] border-[#111316] rounded-lg p-6">
          <h3 className="w-full h3 text-3xl">Parcijalna masaža</h3>
          <p className="pt-1 xs:pl-2 sm:pl-0 text-start  text-normal">
            &#x2022; <span className="font-semibold">35</span> min
          </p>
          <p className="text-normal">Leđa ili noge</p>
          <div className="flex flex-row justify-between items-center pt-2">
            <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
              $35.00
            </p>
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2  bg-gradient-to-r from-[#090a0c] to-[#212121] border-[0.5px] border-[#111316] rounded-lg p-6">
          <h3 className="w-full h3 text-3xl">Masaža cijelog tijela</h3>
          <p className="pt-1 xs:pl-2 sm:pl-0 text-start  text-normal">
            &#x2022; <span className="font-semibold">55</span> min
          </p>
          <p className="text-normal">Leđa ili noge</p>
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
      <p className="text-normal">
        If you have our app, you can manage your appointment from there. <br />
      </p>
      <div className="w-full flex items-center justify-center">
        <Link
          href={"/contact"}
          className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
        >
          Log In To App
        </Link>
      </div>
    </SectionWrapper>
  );
}

export const CallToActionSection = () => {
  return (
    <SectionWrapper>
      <div className="relative">
        {/* Blur background */}
        <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>

        {/* Call to action */}
        <div className="relative z-20 py-16 px-24 flex items-center justify-between gap-16 bg-gradient-to-r from-[#161616] to-[#000000] border-[0.5px] border-[#111316] p-5 rounded-lg overflow-hidden">
          {/* Image */}
          <div className="flex items-center justify-center absolute top-0 bottom-0 -left-12 z-0">
            <NewsletterSectionEmbelishment />
          </div>
          {/* Content */}
          <div className="flex flex-col z-20 gap-6">
            <h2 className="h2 text-start normal-case">
              Embark on the path of the strenght!
            </h2>
            <div>
              <p className="text-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                beatae <br /> itaque voluptas voluptates distinctio at aliquam
                nihil quidem tempora <br /> magni tempora magni
              </p>
            </div>
          </div>
          <div className="z-0 flex flex-col justify-center items-center gap-6 mt-4">
            <div className="w-full flex items-center justify-center">
              <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-8 cursor-pointer text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

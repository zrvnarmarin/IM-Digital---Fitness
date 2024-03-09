import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from '../../../public/HeroTestTest.jpg'
import { FAQType } from "@/app/types";
import { Accordion } from "@/app/(home-sections)/FAQSection";

export default function Page() {
    return (
        <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
            <HeroSection />
            <FinnishSaunaSection />
            <TurkishBathSection />
            <WhirpoolSection />
            <SanariumSection />
            <FAQSection />
        </main>
    )
}

export function HeroSection() {
    return (
      <div className="w-full">
        <h1 className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
          Welness and spa
        </h1>
        <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
          Spa and welness treatments
        </p>
      </div>
    );
}

export function FinnishSaunaSection() {
    return (
      <SectionWrapper>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6 relative order-2">
            <h1 className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 pt-3 font-semibold">
                Finish Sauna 
            </h1>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">Our story is more than 46 years</span> in the making and we’re continuing
              to set the bar high when it comes to fitness innovation. Even if
              you're just starting the first chapter of your personal fitness
              journey!
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">In the “golden days”</span>, there weren’t many options for working out.
              But Joe Gold, our founder, had a passion for bodybuilding. He found
              success as a professional “muscleman” and <span className="text-[#31C57D] font-bold">toured with celebrities!</span>
            </p>
          </div>
          <div className="text-white flex items-center justify-center order-1">
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

export function TurkishBathSection() {
    return (
      <SectionWrapper>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6 relative">
            <h1 className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 pt-3 font-semibold">
                Turkish Bath
            </h1>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">Our story is more than 46 years</span> in the making and we’re continuing
              to set the bar high when it comes to fitness innovation. Even if
              you’re just starting the first chapter of your personal fitness
              journey!
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">In the “golden days”</span>, there weren’t many options for working out.
              But Joe Gold, our founder, had a passion for bodybuilding. He found
              success as a professional “muscleman” and <span className="text-[#31C57D] font-bold">toured with celebrities!</span>
            </p>
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

export function WhirpoolSection() {
    return (
      <SectionWrapper>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6 relative order-2">
            <h1 className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 pt-3 font-semibold">
                Whirpool
            </h1>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">Our story is more than 46 years</span> in the making and we’re continuing
              to set the bar high when it comes to fitness innovation. Even if
              you're just starting the first chapter of your personal fitness
              journey!
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">In the “golden days”</span>, there weren’t many options for working out.
              But Joe Gold, our founder, had a passion for bodybuilding. He found
              success as a professional “muscleman” and <span className="text-[#31C57D] font-bold">toured with celebrities!</span>
            </p>
          </div>
          <div className="text-white flex items-center justify-center order-1">
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

export function SanariumSection() {
    return (
      <SectionWrapper>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6 relative order-1">
            <h1 className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 pt-3 font-semibold">
                Sanarium
            </h1>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">Our story is more than 46 years</span> in the making and we’re continuing
              to set the bar high when it comes to fitness innovation. Even if
              you’re just starting the first chapter of your personal fitness
              journey!
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              <span className="text-[#31C57D] font-bold">In the “golden days”</span>, there weren’t many options for working out.
              But Joe Gold, our founder, had a passion for bodybuilding. He found
              success as a professional “muscleman” and <span className="text-[#31C57D] font-bold">toured with celebrities!</span>
            </p>
          </div>
          <div className="text-white flex items-center justify-center order-2">
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

export function FAQSection () {
    return (
      <SectionWrapper>
        <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full text-start">
          FAQ
        </h1>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          Find the answers to most common questiosn for the swimming facility.
        </p>
        <Accordion faqArray={welnessAndSpaFaq} />
      </SectionWrapper>
    )
}

const welnessAndSpaFaq: FAQType[] = [
    {
      id: 1,
      title: "What is the duration of the Cardio Blast program?",
      answer: "The Cardio Blast program has a duration of 4 weeks.",
    },
    {
      id: 2,
      title: "Which key exercises are included in the Strength Builder program?",
      answer:
        "The Strength Builder program includes key exercises like Squats, Deadlifts, and Bench Press.",
    },
    {
      id: 3,
      title: "What is the intensity level of the CrossFit Challenge program?",
      answer: "The CrossFit Challenge program has a very high intensity level.",
    }
  ];
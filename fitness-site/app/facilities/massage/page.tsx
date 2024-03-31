import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from '../../../public/HeroTestTest.jpg'
import { FAQType } from "@/app/types";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
      <HeroSection />
      {/* <FinnishSaunaSection />
      <TurkishBathSection />
      <WhirpoolSection />
      <SanariumSection />
      <FAQSection /> */}
      <MassageTypeCards />
    </main>
  )
}

export function MassageTypeCards() {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {massageTypes.map(massageType =>
          <WelnessServiceCard key={massageType.id} massageType={massageType} />  
        )}
      </ul>
    </SectionWrapper>
  )
}

export const massageTypes: MassageType[] = [
  {
    id: 1,
    title: 'Classical Massage'
  },
  {
    id: 2,
    title: 'Relaxational Massage'
  },
  {
    id: 3,
    title: 'Sport Massage'
  },
  {
    id: 4,
    title: 'Medicine Massage'
  },
]

export type MassageType = {
  id: number;
  title: string;
};

export const WelnessServiceCard = ({ massageType } : { MassageType }) => {
  return (
    <Link href={`/`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
          <p>lkjvh</p>
        </div>

        {/* On hover image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
          <p className="pt-4 w-full text-gray-200 text-2xl tracking-normal text-center font-semibold">
            {massageType.title}
          </p>
        </div>
      </div>
    </Link>
  );
};



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
          objectPosition="center"
          className="rounded-md object-cover"
        />
      </div>

      {/* Overlaying color */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Overlaying text content */}
      <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center text-white p-2 px-8 md:px-14 lg:px-28 xl:px-36 2xl:px-42 3xl:px-80">
        <div className="flex flex-col ">
          <div className="w-full flex pt-2 justify-center">
            <h1 className="text-white text-7xl tracking-tight text-center font-bold">
              Massage
            </h1>
          </div>
          <div className="w-full flex pt-6 justify-center">
            <p className="normal-case text-center text-md md:text-md text-gray-300 leading-2">
              Dive into a world of aquatic adventure and skill-building with our premier swimming lessons.
              Whether you're dipping your toes into the water for the first time or looking to refine your
              stroke technique, our team of certified instructors is here to guide you through every splash.
            </p>
          </div>
        </div>

        <div>
          <Link 
            href={'/contact'} 
            className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
          >
            Enroll In This Class
          </Link>
        </div>

      </div>
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
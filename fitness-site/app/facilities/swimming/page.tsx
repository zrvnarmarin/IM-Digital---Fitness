import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import SwimmingImage from "../../../public/SwimmingFacilityCard.jpg";
import { TestIconTwo } from "@/public/Icons";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import TestImage from "../../../public/HeroTestTest.jpg";
import Link from "next/link";
import { StatType } from "@/app/about/page";
import { uniqueSellingPoints } from "@/app/data/uniqueSellingPoints";
import { ProgramSmallIcon } from "@/app/(home-sections)/Programs";
import { NewsletterSectionEmbelishment } from "@/app/(home-sections)/SignUpForAnEmail";

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection />
      <SwimmingBenefits />
      <SomethingAboutSwimming />
      <SwimmingSchedule />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <LearnToSwimSection />
    </main>
  );
}

export const SwimmingBenefits = () => {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Swimming benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 md:pt-8">
        {uniqueSellingPoints.map((swimmingPoint) => (
          <div
            key={swimmingPoint.title}
            className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#090a0c] to-[#131313] border-[0.5px] border-[#111316]"
          >
            <div className="flex flex-row md:flex-col gap-4 items-center md:items-center">
              {swimmingPoint.icon()}
              <h3 className="h3 text-center">{swimmingPoint.title}</h3>
            </div>
            <p className="text-normal text-center pt-3">
              {swimmingPoint.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export function SwimmingSchedule() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start gap-1">
        <p className="text-above-heading">Lorem ipsum</p>
        <h2 className="h2">Schedule Of Water training</h2>
        <p className="text-subheading">
          Pregled vođenih treninga od ponedjeljka do nedjelje. Aeon Olympia je
          dostupan 24/7 tijekom cijele godine.
        </p>
      </div>
      <ul className="w-full grid grid-cols-7 pt-8">
        {schedule.map((item) => (
          <li
            key={item.id}
            className="p-6 bg-gradient-to-r from-[#090a0c] to-[#131313] border border-[#292929]"
          >
            <div className="w-full flex items-center justify-center p-2">
              <p className="text-md text-gray-300 leading-2 uppercase font-semibold pb-4">
                {item.day}
              </p>
            </div>

            {item.trainings.map((trainingItem) => (
              <div className="flex flex-col gap-2 pb-8">
                <div key={trainingItem.id} className="flex flex-col gap-0.5">
                  <div className="flex flex-row items-start gap-2 justify-center">
                    <p className="normal-case text-right text-md md:text-md text-gray-300 leading-2 font-normal">
                      {trainingItem.hoursFrom}
                    </p>
                    <p className="normal-case text-right text-md md:text-md text-gray-300 leading-2 font-normal">
                      -
                    </p>
                    <p className="normal-case text-right text-md md:text-md text-gray-300 leading-2 font-normal">
                      {trainingItem.hoursTo}
                    </p>
                  </div>
                  <div className=""></div>
                  <div className="flex flex-col gap-1">
                    <p className="normal-case text-center text-md text-gray-300 leading-2 font-semibold">
                      {trainingItem.activity}
                    </p>
                    <p className="normal-case text-center text-sm text-gray-300 leading-2 font-normal">
                      {trainingItem.trainer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <p className="text-normal text-center">
        Obavezna je predbilježba za vođene vježbe minimalno 120 minuta prije
        početka vježbi. <br />
      </p>
      <div className="w-full flex items-center justify-center">
        <Link href={"/contact"} className="w-fit btn-primary ">
          Log In To App
        </Link>
      </div>
    </SectionWrapper>
  );
}

export const schedule = [
  {
    id: 1,
    day: "Monday",
    trainings: [
      {
        id: 1,
        hoursFrom: "09:00",
        hoursTo: "10:00",
        trainer: "Marin Zrvnar",
        activity: "Beginner Freestyle",
        focus: "Improving technique",
      },
      {
        id: 2,
        hoursFrom: "11:00",
        hoursTo: "12:00",
        trainer: "Anna Smith",
        activity: "Intermediate Breaststroke",
        focus: "Endurance training",
      },
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    trainings: [
      {
        id: 1,
        hoursFrom: "10:00",
        hoursTo: "11:00",
        trainer: "David Lee",
        activity: "Advanced Backstroke",
        focus: "Speed drills",
      },
      {
        id: 2,
        hoursFrom: "15:00",
        hoursTo: "16:00",
        trainer: "Sophia Johnson",
        activity: "Parent-Child Aquatics",
        focus: "Water safety skills for parents and toddlers",
      },
    ],
  },
  {
    id: 3,
    day: "Wednesday",
    trainings: [
      {
        id: 1,
        hoursFrom: "14:00",
        hoursTo: "15:00",
        trainer: "Michael Brown",
        activity: "Teen Swim Fitness",
        focus: "Strength and conditioning",
      },
      {
        id: 2,
        hoursFrom: "18:00",
        hoursTo: "19:00",
        trainer: "Emily Rodriguez",
        activity: "Adult Learn-to-Swim",
        focus: "Overcoming fear of water",
      },
    ],
  },
  {
    id: 4,
    day: "Thursday",
    trainings: [
      {
        id: 1,
        hoursFrom: "12:00",
        hoursTo: "13:00",
        trainer: "Daniel Smith",
        activity: "Water Polo Basics",
        focus: "Fundamental skills and strategies",
      },
      {
        id: 2,
        hoursFrom: "16:00",
        hoursTo: "17:00",
        trainer: "Olivia Martinez",
        activity: "Masters Swimming",
        focus: "Technique refinement and competition preparation",
      },
    ],
  },
  {
    id: 5,
    day: "Friday",
    trainings: [
      {
        id: 1,
        hoursFrom: "13:00",
        hoursTo: "14:00",
        trainer: "Nathan Johnson",
        activity: "Water Aerobics",
        focus: "Low-impact cardiovascular workout",
      },
      {
        id: 2,
        hoursFrom: "17:00",
        hoursTo: "18:00",
        trainer: "Alicia Garcia",
        activity: "Special Needs Swimming",
        focus: "Adaptive instruction for individuals with disabilities",
      },
    ],
  },
  {
    id: 6,
    day: "Saturday",
    trainings: [
      {
        id: 1,
        hoursFrom: "08:00",
        hoursTo: "09:00",
        trainer: "Lucas White",
        activity: "Pre-Competition Prep",
        focus: "Final technique adjustments before competition",
      },
      {
        id: 2,
        hoursFrom: "14:00",
        hoursTo: "15:00",
        trainer: "Emma Thompson",
        activity: "Water Safety for Seniors",
        focus: "Preventing water-related accidents for older adults",
      },
    ],
  },
  {
    id: 7,
    day: "Sunday",
    trainings: [
      {
        id: 1,
        hoursFrom: "10:00",
        hoursTo: "11:00",
        trainer: "Sophie Brown",
        activity: "Open Water Swim Training",
        focus: "Navigation and endurance in open water",
      },
      {
        id: 2,
        hoursFrom: "16:00",
        hoursTo: "17:00",
        trainer: "Jack Wilson",
        activity: "Scuba Diving Basics",
        focus: "Introduction to equipment and underwater breathing",
      },
    ],
  },
];

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

export function StatsSection() {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </ul>
    </SectionWrapper>
  );
}

export const StatCard = ({ stat }: { stat: StatType }) => {
  return (
    <li className="bg-gradient-to-r from-[#090a0c] to-[#212121] border-[0.5px] border-[#111316] py-4 px-2 xs:py-6 xs:px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-14 lg:px-12 rounded-lg shadow-lg">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <p className="text-3xl xs:text-5xl sm:text-4xl md:text-5xl xl:text-6xl tracking-normal text-start text-white leading-7 font-semibold">
          {stat.statValue}
        </p>
        <p className="text-normal text-center">{stat.statDescription}</p>
      </div>
    </li>
  );
};

export const stats = [
  {
    id: 1,
    statValue: "120+",
    statDescription: "Kids Enroled",
  },
  {
    id: 2,
    statValue: "3",
    statDescription: "Large Olympic Pools",
  },
  {
    id: 3,
    statValue: "45",
    statDescription: "Something Happened",
  },
];

export function FAQSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Frequently asked questions</h2>
      <p className="text-subheading">
        Find the answers to most common questiosn for the swimming facility.
      </p>
      <Accordion faqArray={swimmingFacilityFaq} />
    </SectionWrapper>
  );
}

export function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-row gap-4 items-center pt-4 md:pt-8 lg:pt-[96px]">
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Blur background */}
          <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>
          <p className="text-above-heading z-20">Relax in our expert hands</p>
          <h1 className="w-full text-white text-[84px]  text-center font-medium z-20">
            Swimming
          </h1>
        </div>
      </div>
      <div className="text-white flex items-center justify-center p-2 ">
        <div className="relative flex items-center ">
          <Image
            priority
            src={TestImage}
            alt="alt"
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-lg md:max-h-[600px] z-20"
          />
        </div>
      </div>
      <h3 className="w-full h3 text-xl text-center">Lorem Ipsum Dolor Sit</h3>
      <p className="text-normal text-center md:px-48">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        necessitatibus corrupti quaerat. Eveniet odio hic, blanditiis quasi,
        culpa voluptatibus nam, provident exercitationem incidunt quam expedita
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        necessitatibus corrupti quaerat. Eveniet odio hic, blanditiis quasi,
        culpa voluptatibus nam, provident exercitationem incidunt quam expedita
      </p>
    </SectionWrapper>
  );
}

export function AboutSwimming() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        What makes us special
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="text-above-heading">Assets</p>
            <h2 className="w-full h2">Best Quality Facilities And Program</h2>
          </div>
          <p className="text-normal">
            In the “golden days”, there weren’t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
            But Joe Gold, our founder
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function OverallInfo() {
  return (
    <SectionWrapper>
      <div>
        <Image src={SwimmingImage} height={0} width={0} alt="Swimming_pool" />
        <div className="group flex flex-row items-center justify-between gap-4 rounded-b-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-t-0 border-x-[#292929] border-b-[#292929]">
          <div className="flex flex-col items-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
              Indoor Pool
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              1
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
              Pool Length
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              30m
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
              Spa
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              Sauna And Steam
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
              Lessons
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              Yes
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function LearnToSwimSection() {
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
}

export const SomethingAboutSwimming = () => {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Something about swimming</h2>

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
            <p className="text-above-heading">Assets</p>
            <h3 className="w-full h3 text-3xl pt-1">
              Best Quality Facilities And Program
            </h3>
          </div>
          <p className="text-normal z-20 pt-4">
            In the “golden days”, there weren`t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman”
          </p>
          <div className="flex flex-row items-center justify-between pt-4">
            <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
              <ProgramSmallIcon />
              <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                <span className="font-semibold">4</span> types of massages
              </p>
            </div>
            <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
              <ProgramSmallIcon />
              <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                <span className="font-semibold">8+</span> positive effects on
                body
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const swimmingFacilityFaq = [
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
  },
];

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import SwimmingImage from '../../../public/SwimmingFacilityCard.jpg'
import { DumbellIcon } from "@/public/Icons";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import TestImage from '../../../public/HeroTestTest.jpg'
import Link from 'next/link'
import { StatType } from "@/app/about/page";
import TheClassYouWillGetThereSection from "@/app/(home-sections)/TheClassYouWillGetThereSection";

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection />
      <SwimmingBenefits />
      <LongParagraphsSection />
      {/* This section must be about different types of lessons here (kids, adults, special needs people etc.; title types of lessons) */}
      <TheClassYouWillGetThereSection />
      <AboutSwimming/>
      <SwimmingSchedule />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <LearnToSwimSection />
    </main>
  )
}

export function SwimmingSchedule() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-center font-bold">
        Schedule Of Water training
      </h1>
      <p className="text-center normal-case text-md md:text-md text-gray-300 leading-2">
        Pregled vođenih treninga od ponedjeljka do nedjelje. <br />
        Aeon Olympia je dostupan 24/7 tijekom cijele godine.
      </p>
      <ul className="w-full grid grid-cols-7 pt-8">
        {schedule.map(item =>
          <li 
            key={item.id} 
            className="p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
          >
            <div className="w-full flex items-center justify-center p-2">
              <p className="text-md text-gray-300 leading-2 uppercase font-semibold pb-4">
                {item.day}
              </p>
            </div>

            {item.trainings.map(trainingItem =>
              <div className="flex flex-col gap-2 pb-8">
                <div key={trainingItem.id} className="flex flex-col gap-0.5">
                  <div className="flex flex-row items-start gap-2 justify-center">
                    <p className="normal-case text-right text-md md:text-md text-gray-300 leading-2 font-normal">
                      {trainingItem.hoursFrom}
                    </p>
                    <p className="normal-case text-right text-md md:text-md text-gray-300 leading-2 font-normal">-</p>
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
            )}
          </li>  
        )}
      </ul>
      <p className="text-center normal-case text-md md:text-md text-gray-300 leading-2">
        Obavezna je predbilježba za vođene vježbe minimalno 120 minuta prije početka vježbi. <br />
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

export const schedule = [
  {
    id: 1,
    day: 'Monday',
    trainings: [
      {
        id: 1,
        hoursFrom: '09:00',
        hoursTo: '10:00',
        trainer: 'Marin Zrvnar',
        activity: 'Beginner Freestyle',
        focus: 'Improving technique'
      },
      {
        id: 2,
        hoursFrom: '11:00',
        hoursTo: '12:00',
        trainer: 'Anna Smith',
        activity: 'Intermediate Breaststroke',
        focus: 'Endurance training'
      }
    ]
  },
  {
    id: 2,
    day: 'Tuesday',
    trainings: [
      {
        id: 1,
        hoursFrom: '10:00',
        hoursTo: '11:00',
        trainer: 'David Lee',
        activity: 'Advanced Backstroke',
        focus: 'Speed drills'
      },
      {
        id: 2,
        hoursFrom: '15:00',
        hoursTo: '16:00',
        trainer: 'Sophia Johnson',
        activity: 'Parent-Child Aquatics',
        focus: 'Water safety skills for parents and toddlers'
      }
    ]
  },
  {
    id: 3,
    day: 'Wednesday',
    trainings: [
      {
        id: 1,
        hoursFrom: '14:00',
        hoursTo: '15:00',
        trainer: 'Michael Brown',
        activity: 'Teen Swim Fitness',
        focus: 'Strength and conditioning'
      },
      {
        id: 2,
        hoursFrom: '18:00',
        hoursTo: '19:00',
        trainer: 'Emily Rodriguez',
        activity: 'Adult Learn-to-Swim',
        focus: 'Overcoming fear of water'
      }
    ]
  },
  {
    id: 4,
    day: 'Thursday',
    trainings: [
      {
        id: 1,
        hoursFrom: '12:00',
        hoursTo: '13:00',
        trainer: 'Daniel Smith',
        activity: 'Water Polo Basics',
        focus: 'Fundamental skills and strategies'
      },
      {
        id: 2,
        hoursFrom: '16:00',
        hoursTo: '17:00',
        trainer: 'Olivia Martinez',
        activity: 'Masters Swimming',
        focus: 'Technique refinement and competition preparation'
      }
    ]
  },
  {
    id: 5,
    day: 'Friday',
    trainings: [
      {
        id: 1,
        hoursFrom: '13:00',
        hoursTo: '14:00',
        trainer: 'Nathan Johnson',
        activity: 'Water Aerobics',
        focus: 'Low-impact cardiovascular workout'
      },
      {
        id: 2,
        hoursFrom: '17:00',
        hoursTo: '18:00',
        trainer: 'Alicia Garcia',
        activity: 'Special Needs Swimming',
        focus: 'Adaptive instruction for individuals with disabilities'
      }
    ]
  },
  {
    id: 6,
    day: 'Saturday',
    trainings: [
      {
        id: 1,
        hoursFrom: '08:00',
        hoursTo: '09:00',
        trainer: 'Lucas White',
        activity: 'Pre-Competition Prep',
        focus: 'Final technique adjustments before competition'
      },
      {
        id: 2,
        hoursFrom: '14:00',
        hoursTo: '15:00',
        trainer: 'Emma Thompson',
        activity: 'Water Safety for Seniors',
        focus: 'Preventing water-related accidents for older adults'
      }
    ]
  },
  {
    id: 7,
    day: 'Sunday',
    trainings: [
      {
        id: 1,
        hoursFrom: '10:00',
        hoursTo: '11:00',
        trainer: 'Sophie Brown',
        activity: 'Open Water Swim Training',
        focus: 'Navigation and endurance in open water'
      },
      {
        id: 2,
        hoursFrom: '16:00',
        hoursTo: '17:00',
        trainer: 'Jack Wilson',
        activity: 'Scuba Diving Basics',
        focus: 'Introduction to equipment and underwater breathing'
      }
    ]
  }
];

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

export function StatsSection() {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </ul>
    </SectionWrapper>
  )
}

export const StatCard = ({ stat }: { stat: StatType }) => {
  return (
    <li className="col-span-1 md:col-span-1 lg:col-span-1 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl tracking-normal text-start text-white leading-7 font-semibold">
            {stat.statValue}
          </p>
          <p className="normal-case text-right text-md md:text-md text-gray-300 leading-2 font-normal">
            {stat.statDescription}
          </p>
        </div>
      </div>
    </li>
  );
};

export const stats = [
  { 
    id: 1,
    statValue: '120+',
    statDescription: 'Kids Enroled'
  },
  { 
    id: 2,
    statValue: '3',
    statDescription: 'Large Olympic Pools'
  },
  { 
    id: 3,
    statValue: '45',
    statDescription: 'Something Happened'
  },
]

export function FAQSection () {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        Frequently asked questions
      </h1>
      <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
        Find the answers to most common questiosn for the swimming facility.
      </p>
      <Accordion faqArray={swimmingFacilityFaq} />
    </SectionWrapper>
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
          objectPosition="center"
          className="rounded-md object-cover"
        />
      </div>

      {/* Overlaying color */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Overlaying text content */}
      <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center text-white p-2 px-8 md:px-14 lg:px-28 xl:px-36 2xl:px-42 3xl:px-80">
        <div className="flex flex-col ">
          <div className="w-full flex">
            <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
              Learn Swimming in all styles
            </p>
          </div>
          <div className="w-full flex pt-2">
            <h1 className="text-white text-7xl tracking-tight text-start font-bold">
              Swimming
            </h1>
          </div>
          <div className="w-full flex pt-6">
            <p className="normal-case text-start text-md md:text-md text-gray-300 leading-2 pr-48">
              Dive into a world of aquatic adventure and skill-building with our premier swimming lessons.
              Whether you're dipping your toes into the water for the first time or looking to refine your
              stroke technique, our team of certified instructors is here to guide you through every splash.
            </p>
          </div>
          <div className="mt-24 w-full flex flex-row items-center justify-between gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
            <div className="flex flex-col items-center">
              <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
                  Indoor Pool
              </p>
              <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">1</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
                  Pool Length
              </p>
              <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">30m</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
                  Spa
              </p>
              <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Sauna And Steam</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
                  Lessons
              </p>
              <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Yes</p>
            </div>
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
        <div className="flex flex-col">

          <div className="flex flex-col gap-3">
            <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
              Assets
            </p>
            <h1 className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
              Best Quality Facilities And Program
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
        </div>
      </div>
    </SectionWrapper>
  )
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
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">1</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
                Pool Length
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">30m</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
                Spa
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Sauna And Steam</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
                Lessons
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Yes</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export function LearnToSwimSection() {
  return (
    <SectionWrapper>
      <div className="relative w-full h-64 flex flex-row justify-between rounded-lg shadow-lg">
        <Image
          src={TestImage}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full opacity-50"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#31C57D] to-[#161616] opacity-30 rounded-lg"></div>
        <div className="w-full flex flex-row gap-36 items-center justify-between z-30 px-12 py-6">
          <div className="flex flex-col">
            <p className="text-2xl md:text-3xl lg:text-4xl tracking-normal text-start text-white leading-7 font-semibold">
              Start Your Free 7-Day Trial Program Here
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal pt-4">
              Analyze patient feedback. Optimize workflows to deliver a superb patient experience. Stop your never-ending
              battle with patient retention.
            </p>
          </div>
          <div className="w-1/3">
            <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Learn To Swim
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export const LongParagraphsSection = () => {
    return (
      <SectionWrapper>
        <div className="flex flex-col gap-2">
          <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
            Assets
          </p>
          <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
            Schedule Of Water training
          </h1>
        </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-start gap-3">
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 tracking-wider font-normal">
          <span className="text-[#31C57D] font-medium">As we were building</span> our platform, we were looking closely at how
          private healthcare providers get feedback, and what that means for <br /> <br />
          their businesses. Here`s what most private clinics do: <span className="text-[#31C57D] font-medium">they use pen-and-paper surveys</span>,
          emails, and forms on their websites. But there`s a problem with these
          methods. These methods are difficult to analyze, and if patients aren`t
          satisfied, clinics can`t fix things quickly. By the time they analyze
          the survey, the patient is already considering the competition.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 tracking-wider font-normal">
          <span className="text-[#31C57D] font-medium">As we were building</span> our platform, we were looking closely at how
          private healthcare providers get feedback, and what that means for <br /> <br />
          their businesses. Here`s what most private clinics do: <span className="text-[#31C57D] font-medium">they use pen-and-paper surveys</span>,
          emails, and forms on their websites. But there`s a problem with these
          methods. These methods are difficult to analyze, and if patients aren`t
          satisfied, clinics can`t fix things quickly. By the time they analyze
          the survey, the patient is already considering the competition.
        </p>
        {/* <div className="flex items-center justify-center">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Read More Stories
          </button>
        </div> */}
        <div className="flex flex-row justify-end gap-3">
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
        </div>
      </div>
    </SectionWrapper>
    );
  };

  export function SwimmingBenefits() {
    return (
      <SectionWrapper>
        <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
          Rip all the benefits
        </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swimmingBenefits.map((benefit) => (
            <SwimmingBenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
            />
            ))}
        </div>
      </SectionWrapper>
    )
  }

  export function SwimmingBenefitCard({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div
        //#1F2125
        className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
      >
        <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
          <div className=" bg-[#279C63] rounded-md p-2 w-fit"><DumbellIcon /></div>
          <p className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
            {title}
          </p>
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2">
          {description}
        </p>
      </div>
    );
  }

export const swimmingBenefits = [
    {
        id: 1,
        title: 'Something benefit',
        description: 'Something description fot his benefit title'
    },
    {
        id: 1,
        title: 'Something benefit',
        description: 'Something description fot his benefit title'
    },
    {
        id: 1,
        title: 'Something benefit',
        description: 'Something description fot his benefit title'
    }
]

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
  }
];
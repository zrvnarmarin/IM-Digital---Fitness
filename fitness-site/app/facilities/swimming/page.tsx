import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import SwimmingImage from '../../../public/SwimmingFacilityCard.jpg'
import { DumbellIcon } from "@/public/Icons";

export default function Page() {
    return (
        <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
            <HeroSection />
            <OverallInfo />
            <SwimmingBenefits />
            <LongParagraphsSection />
            <LearnSwim />
        </main>
    )
}

export function HeroSection() {
    return (
      <div className="w-full">
        <h1 className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
          Swimming
        </h1>
        <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
          swimming lessons
        </p>
      </div>
    );
}

export function OverallInfo() {
    return (
        <SectionWrapper>
            <div>
                <Image src={SwimmingImage} height={0} width={0} alt="Swimming_pool" />
                <div className="group flex flex-row items-center justify-between gap-4 rounded-b-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-t-0 border-x-[#292929] border-b-[#292929]">
                    <div>
                        <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
                            Indoor Pool
                        </p>
                        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Yes</p>
                    </div>
                    <div>
                        <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
                            Indoor Pool
                        </p>
                        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Yes</p>
                    </div>
                    <div>
                        <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
                            Indoor Pool
                        </p>
                        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Yes</p>
                    </div>
                    <div>
                        <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
                            Indoor Pool
                        </p>
                        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">Yes</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export function LearnSwim() {
    return (
        <SectionWrapper>
            <h2 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
                Learn To Swim
            </h2>
            <div className="flex p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] rounded-lg">
                <p className="w-2/3 normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
                    Whether you’re an experienced open water swimmer looking to bring your time down, or a beginner
                    venturing into the pool for the first time, you can sign up for one-to-one lessons with our coaches.
                    You can buy lessons in packs of four or 12.
                </p>
                <div className="w-1/3 flex items-center justify-center">
                    <button className="w-fit border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
                        Get In Touch
                    </button>
                </div>
            </div>
        </SectionWrapper>
    )
}

export const LongParagraphsSection = () => {
    return (
      <SectionWrapper>
        <div className="flex flex-col gap-8 ">
        <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full text-start">
            Something of placeholder
          </h1>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            <span className="text-[#31C57D] font-bold">As we were building</span> our platform, we were looking closely at how
            private healthcare providers get feedback, and what that means for
            their businesses, get feedback, and what that means for
            their businesses.
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            Here`s what most private clinics do: <span className="text-[#31C57D] font-bold">they use pen-and-paper surveys</span>,
            emails, and forms on their websites. But there`s a problem with these
            methods.
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            <span className="text-[#31C57D] font-bold">These methods are difficult</span> to analyze, and if patients aren`t
            satisfied, clinics can`t fix things quickly. By the time they analyze
            the survey, the patient is already considering the competition.
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            Also, people don`t really like doing surveys. Only about <span className="text-[#31C57D] font-bold">2–4%</span> of
            people actually finish them.
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            The result? Private clinics are faced with a lot of guesswork when
            making business decisions.
          </p>
        </div>
      </SectionWrapper>
    );
  };

  export function SwimmingBenefits() {
    return (
        <SectionWrapper>
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
        className="flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] duration-100 "
      >
        <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
          <div className=" bg-[#279C63] rounded-md p-2 w-fit"><DumbellIcon /></div>
          <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] leading-7 font-semibold">
            {title}
          </p>
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
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
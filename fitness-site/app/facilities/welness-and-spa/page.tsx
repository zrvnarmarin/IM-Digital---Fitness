import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function Page() {
    return (
        <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
            <HeroSection />
            <OverallInfo />
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
            <div className="flex ">
                <p className="w-2/3 normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
                    Whether you’re an experienced open water swimmer looking to bring your time down, or a beginner
                    venturing into the pool for the first time, you can sign up for one-to-one lessons with our coaches.
                    You can buy lessons in packs of four or 12.
                </p>
                <div className="w-1/3">
                    <button className="w-fit border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
                        Get In Touch
                    </button>
                </div>
            </div>
        </SectionWrapper>
    )
}
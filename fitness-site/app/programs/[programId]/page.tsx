import React from "react";
import { formatString } from "@/app/utils/helpers";
import HeroSection from "./(program-sections)/HeroSection";
import ProgramOverviewSection from "./(program-sections)/ProgramOverviewSection";
import ProgramStructure from "./(program-sections)/ProgramStructure";
import ProgramBenefits from "./(program-sections)/ProgramBenefits";
import ProgramFeatures from "./(program-sections)/ProgramFeatures";
import MoreProgramInfoSection from "./(program-sections)/MoreProgramInfoSection";
import ProgramBuyAndDiscoundSection from "./(program-sections)/ProgramBuyAndDiscoundSection";
import SuccessStoriesSection from "./(program-sections)/SuccessStoriesSection";
import OtherProgramsSection from "./(program-sections)/OtherProgramsSection";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from '../../../public/HeroTestTest.jpg'
import Image from "next/image";

export default function Page({ params }: { params: { programId: string } }) {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection programId={formatString(params.programId)} />
      <ProgramOverviewSection />
      <ProgramFeatures />
      <ProgramStructure />
      <MoreProgramInfoSection />
      <ProgramBuyAndDiscoundSection programId={formatString(params.programId)} />
      <ProgramBenefits />
      <SuccessStoriesSection />
      <OtherProgramsSection />

      <SectionWrapper>
        <div className="relative group flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616]">
          
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

          <div className="absolute inset-0 bg-black opacity-60 border border-[#292929] rounded-lg"></div>

          <div className="flex flex-col gap-6 z-20">
            <h1 className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
              Start MFT28: Greg Plitt's 4-Week Military Fitness Trainer for FREE today!
            </h1>
            <div className="flex flex-col gap-4 px-6">
                <div  className="flex flex-row gap-4">
                  <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                    &#10003;
                  </span> 
                  <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">sentence</p>
                </div>
            </div>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              Join BodyFit today to unlock the app for this fitness plan, and many others, in the Apple and Google Play stores!
              You'll be able to track your workouts, nail your nutrition plan, stock up on supps, and get fit on the go.
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              Get unlimited access to all of our expert training plans, exclusive savings in our store, and even free shipping!*
            </p>
            <div className="flex flex-row items-center justify-center gap-6">
              <div className="flex flex-row border-gray-300 border">
                {/* Kartica */}
                <div className="flex flex-col gap-2 items-center text-white">
                  <h2>Monthly</h2>
                  <p>$ 9.99 / MONTH</p>
                  <p>Billed $9.99 Monthly.</p>
                  <p>Try FREE and cancel anytime.</p>
                </div>
              </div>
              <div className="flex flex-row border-gray-300 border">
                {/* Kartica */}
                <div className="flex flex-col gap-2 items-center text-white">
                  <h2>Monthly</h2>
                  <p>$ 9.99 / MONTH</p>
                  <p>Billed $9.99 Monthly.</p>
                  <p>Try FREE and cancel anytime.</p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
                Start Your Program
              </button>
            </div>
          </div>

        </div>

      </SectionWrapper>

    </main>
  );
}
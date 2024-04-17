import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";

export default function StartTheProgramSection() {
  return (
    <SectionWrapper>
      <div className="relative group flex flex-col gap-4 rounded-lg px-12 py-16 bg-gradient-to-r from-[#101010] to-[#161616]">
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

        <div className="absolute inset-0 bg-gradient-to-r from-[#31C57D] to-[#161616] opacity-30 rounded-lg"></div>

        <div className="flex flex-col gap-6 z-20">
          <h3 className="w-full h3">
            Start MFT28: Greg Plitt's 4-Week Military Fitness Trainer for FREE
            today!
          </h3>
          <p className="text-normal">
            Join BodyFit today to unlock the app for this fitness plan, and many
            others, in the Apple and Google Play stores! You'll be able to track
            your workouts, nail your nutrition plan, stock up on supps, and get
            fit on the go.
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 text-center font-normal">
            Get unlimited access to all of our expert training plans, exclusive
            savings in our store, and even free shipping!*
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center gap-6">
            <div className="rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
              {/* Kartica */}
              <div className="flex flex-col gap-2 items-center text-white">
                <h2 className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 font-bold">
                  Monthly
                </h2>
                <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
                  $ 9.99/ MONTH
                </p>
                <p className="w-full text-xl pt-2 md:text-md lg:text-lg tracking-normal text-center text-white leading-7 font-semibold uppercase">
                  Billed $9.99 Monthly.
                </p>
                <p className="text-normal">Try FREE and cancel anytime.</p>
              </div>
            </div>
            <div className="rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
              {/* Kartica */}
              <div className="flex flex-col gap-2 items-center text-white">
                <h2 className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 font-bold">
                  Monthly
                </h2>
                <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
                  $ 9.99/ MONTH
                </p>
                <p className="w-full text-xl pt-2 md:text-md lg:text-lg tracking-normal text-center text-white leading-7 font-semibold uppercase">
                  Billed $9.99 Monthly.
                </p>
                <p>Try FREE and cancel anytime.</p>
              </div>
            </div>
          </div>
          <p className="w-full text-normal font-medium lg:font-semibold text-center">
            You will select your description during checkout plan
          </p>
          <div className="w-full flex items-center justify-center">
            <button className="btn-primary">Start Your Program</button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

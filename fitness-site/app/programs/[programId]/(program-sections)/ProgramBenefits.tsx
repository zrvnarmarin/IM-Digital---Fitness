import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { DumbellIcon } from "@/public/Icons";
import Image from "next/image";
import TestImage from "../../../../public/HeroTestTest.jpg";

export default function ProgramBenefits() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">
        More than a workout plan. With this plan you also receive:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="absolute inset-0 bg-black opacity-80 border border-[#292929] rounded-lg"></div>
          <div className="flex flex-col gap-2 z-20">
            <div className="w-full flex flex-row items-center gap-4 text-lg tracking-normal text-start text-[#ffffff] leading-7 font-semibold">
              <span className="rounded-full p-2 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                <DumbellIcon width={30} height={30} />
              </span>
              <p className="w-full h3">Expert Instruction</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 text-sm tracking-normal text-end text-white leading-7 font-medium">
              <span className="font-semibold text-white">
                Whole foods and power shakes
              </span>
            </div>
            <p className="text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nihil consequuntur mollitia blanditiis maiores rem id repellendus
              quam consectetur odio numquam earum et ducimus quibusdam, placeat
              in at velit nisi.
            </p>
          </div>
        </div>
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
          <div className="absolute inset-0 bg-black opacity-80 border border-[#292929] rounded-lg"></div>
          <div className="flex flex-col gap-2 z-20">
            <div className="w-full flex flex-row items-center gap-4 text-lg tracking-normal text-start text-[#ffffff] leading-7 font-semibold">
              <span className="rounded-full p-2 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                <DumbellIcon width={30} height={30} />
              </span>
              <p className="w-full h3">Nutritional Guidance</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 text-sm tracking-normal text-end text-white leading-7 font-medium">
              <span className="font-semibold text-white">
                Whole foods and power shakes
              </span>
            </div>
            <p className="text-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nihil consequuntur mollitia blanditiis maiores rem id repellendus
              quam consectetur odio numquam earum et ducimus quibusdam, placeat
              in at velit nisi.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

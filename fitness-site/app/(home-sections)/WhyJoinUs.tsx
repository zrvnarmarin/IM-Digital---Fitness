import React from "react";
import Image from "next/image";
import {
  TwoHumansIcons,
  DumbellIcon,
  TestIconTwo,
  TestIcon,
  DurationIcon,
} from "@/public/Icons";
import { CameraIcon } from "@/public/Icons";
import TestImage from "../../public/CardioBlastImage.jpg";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function WhyJoinUs() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h2 className="h2">Programs</h2>
        <div className="hidden w-full md:flex items-center justify-end">
          <Link
            href="/programs"
            className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white"
          >
            Discover More Programs
          </Link>
        </div>
      </div>
      <p className="text-subheading">
        We have experience serving members in helping body fitness, and under
        the guidance of a professional trainer
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg gap-6">
          {reasonsToJoin.map((programCard) => (
            <ProgramCard key={programCard.description} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

const reasonsToJoin = [
  {
    title: "Professional Trainer",
    description: "We have professional trainers to help you",
    icon: TwoHumansIcons,
  },
  {
    title: "Practice Videos",
    description:
      "Maintain body fitness by doing physical exercise at least 2-3 time a week",
    icon: CameraIcon,
  },
  {
    title: "Practice Videos",
    description:
      "Maintain body fitness by doing physical exercise at least 2-3 time a week",
    icon: CameraIcon,
  },
];

export function ProgramCard() {
  return (
    <div className={`bg-[#111111]`}>
      <div className="w-full flex rounded-t-md">
        <Image
          src={TestImage}
          alt="program_image"
          width={0}
          height={0}
          className="rounded-t-md h-52 object-cover"
        />
      </div>

      <div className="px-6 py-4 xs:px-7 xs:py-6 md:px-8 md:py-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] rounded-b-lg">
        <div className="flex flex-col gap-3 items-start justify-start rounded-lg">
          <h3 className="w-full  h3">Cardiovascular Strength</h3>
        </div>

        <div className="flex flex-col pt-2">
          <p className="text-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            beatae obcaecati eius illo, sunt beatae sunt beatate sun beatate
            beatae obcaecati eius illo, sunt beatae sunt beatate sun beatate
          </p>
        </div>

        <div className=" w-full gap-2 flex flex-col xs:flex-row sm:flex-col items-center justify-between rounded-lg pt-7 md:pt-10 ">
          <div className="w-full flex flex-col xs:flex-col sm:flex-col items-start xs:items-start gap-2">
            <span className="text-normal font-semibold">Intensity:</span>
            <div className="flex flex-row items-center justify-end w-full gap-1">
              <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
              <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
              <span className="w-1/3 rounded-lg h-2 border border-[#292929]"></span>
            </div>
          </div>
          <div className="flex items-center justify-start xs:justify-end sm:justify-start gap-2 w-full">
            <div className="p-2 rounded-full bg-gradient-to-r from-[#1D7349] to-[#31C57D]">
              <DurationIcon />
            </div>
            <span className="text-normal font-semibold">50 min</span>
          </div>
        </div>

        {/* <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
          |
        </div> */}

        <div className="flex gap-2 xs:gap-4 md:gap-6 flex-row xs:flex-row items-center xs:justify-between justify-between pt-6 pb-2 normal-case tracking-normal text-2xs md:text-sm lg:text-lg text-gray-100 leading-2 font-normal">
          <div className="flex flex-col xs:flex-row sm:flex-col md:flex-col gap-1 items-center md:items-center">
            <TestIcon width="3em" height="3em" iconFill="#31C57D" />
            <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
              <span className="font-semibold">24</span> number of spams
            </p>
          </div>
          {/* <div className="w-0.5 h-full bg-gray-800">|</div> */}
          <div className="flex flex-col xs:flex-row sm:flex-col md:flex-col gap-1 items-center md:items-center">
            <TestIcon width="3em" height="3em" iconFill="#31C57D" />
            <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
              <span className="font-semibold">7</span> ways of spams
            </p>
          </div>
        </div>

        {/* Rasmiliti da li ovdje staviti gumb, da li se uklapa u dizajn */}
        <div className="flex xs:flex-row sm:flex-col md:flex-row lg:flex-col 2xl:flex-row justify-between xs:items-center sm:gap-2 md:gap-3 pt-6 border-t border-[#292929]">
          <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
            $130.00
          </p>
          <button className="w-fit sm:w-full md:w-fit lg:w-full 2xl:w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

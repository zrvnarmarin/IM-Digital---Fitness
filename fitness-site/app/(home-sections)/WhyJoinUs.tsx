import React from "react";
import Image from "next/image";
import { TwoHumansIcons, DumbellIcon } from "@/public/Icons";
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
      <div className="flex w-full md:hidden items-center justify-center">
        <Link
          href="/programs"
          className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white"
        >
          Discover More Programs
        </Link>
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
          className="rounded-t-md h-64 object-cover"
        />
      </div>

      <div className="px-8 py-6 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] rounded-b-lg">
        <div className="flex flex-col gap-3 items-start justify-start rounded-lg">
          <h3 className="w-full  h3">Cardiovascular Strength</h3>
        </div>

        <div className="flex flex-col pt-4">
          <p className="text-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            beatae obcaecati eius illo, sunt beatae sunt beatate sun beatate
          </p>
        </div>

        <div className="w-full flex flex-row items-center justify-between rounded-lg pt-10">
          <div className="w-full flex flex-row items-center justify-between">
            <span className="normal-case text-md text-white leading-2 font-medium">
              Intensity:
            </span>
            <div className="flex flex-row items-center justify-end w-1/3 gap-2">
              <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
              <span className="bg-[#31C57D] w-1/3 rounded-lg h-2 border border-[#292929]"></span>
              <span className="w-1/3 rounded-lg h-2 border border-[#292929]"></span>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-600 flex items-center justify-between pt-4 pb-2 normal-case tracking-normal text-2xs md:text-sm lg:text-lg text-gray-100 leading-2 font-normal">
          <span className="flex flex-row items-center gap-2 normal-case text-sm text-white leading-2 font-normal">
            <DumbellIcon /> 24 Number Of
          </span>
          <span className="flex flex-row items-center gap-2 normal-case text-sm text-white leading-2 font-normal">
            <DumbellIcon />7 Ways for
          </span>
        </div>

        {/* Rasmiliti da li ovdje staviti gumb, da li se uklapa u dizajn */}
        <div className="flex xs:flex-row sm:flex-col md:flex-row lg:flex-col 2xl:flex-row justify-between xs:items-center sm:gap-2 md:gap-3 pt-6">
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

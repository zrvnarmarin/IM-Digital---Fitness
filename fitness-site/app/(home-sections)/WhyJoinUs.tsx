import React, { ReactNode } from "react";
import Image from "next/image";
import { TwoHumansIcons, DumbellIcon } from "@/public/Icons";
import { CameraIcon } from "@/public/Icons";
import { CalendarIcon } from "@/public/Icons";
import ShareIcon from '../../public/share-arrow-svgrepo-com.png'
import TestImage from "../../public/CardioBlastImage.jpg";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function WhyJoinUs() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
          Programs
        </h1>
        <div className="w-full flex items-center justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Discover More Programs
          </button>
        </div>
      </div>
      <p className="normal-case text-sm text-gray-300 leading-2 font-normal">
        We have experience serving members in helping body fitness, and under
        the guidance of a professional trainer
      </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg gap-6">
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
    title: "Good Management",
    description:
      "Aim to reduce fat as much as possible from the body to about 2-4%",
    icon: CalendarIcon,
  },
];

export function ProgramCard() {
  return (
    <Link href={"/"} className={`bg-[#111111]`}>
      <div className="w-full flex rounded-t-md">
        <Image
          src={TestImage}
          alt="program_image"
          width={0}
          height={0}
          className="rounded-t-md h-48 object-cover"
        />
      </div>

      <div className="px-8 py-6 bg-gradient-to-r from-[#101010] hover:from-[#101010] hover:to-[#292929] to-[#161616] border border-[#292929] duration-900 rounded-b-lg">
        <div className="flex flex-col gap-3 items-start justify-start rounded-lg">
          <div className="w-full flex items-center justify-between rounded-lg">
            <span className="normal-case text-2xs text-white leading-2 font-normal border border-[#31C57D] px-3 py-1 rounded-lg">
              Intensive
            </span>
            <span><Image src={ShareIcon} width={20} height={20} alt="share_icon" /></span>
          </div>
          <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
            Cardiovascular Strength
          </p>
        </div>
        <div className="flex flex-col pt-8">
          <p className="normal-case text-sm text-gray-300 leading-2 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae
            obcaecati eius illo assumenda fugiat, ut quae mollitia{" "}
          </p>
        </div>

        <div className="border-b border-gray-600 flex items-center justify-between pt-8 pb-2 normal-case tracking-normal text-2xs md:text-sm lg:text-lg text-gray-100 leading-2 font-normal">
          <span className="flex flex-row items-center gap-2 normal-case text-xs text-white leading-2 font-normal">
            <DumbellIcon /> 24 Number Of
          </span>
          <span className="flex flex-row items-center gap-2 normal-case text-xs text-white leading-2 font-normal">
            <DumbellIcon />7 Ways for
          </span>
        </div>

        {/* Rasmiliti da li ovdje staviti gumb, da li se uklapa u dizajn */}
        <div className="flex flex-row justify-between items-center pt-6">
          <p className="text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] group-hover:text-[#C57D31] leading-7 font-semibold">
            $130.00
          </p>
          <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Discover More
        </button>
        </div>
      </div>
      
    </Link>
  );
}
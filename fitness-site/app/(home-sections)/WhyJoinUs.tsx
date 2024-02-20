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
        <h1 className="uppercase font-normal text-white text-2xl tracking-wider mr-4">
          Why Join Us
        </h1>
        <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Meet the rest
        </button>
      </div>
      <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
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

export function ReasonToJoinCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: () => JSX.Element;
}) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-[#1F2125]">
      <div className="flex gap-4 items-center">
        <div className="bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div>
        <p className="text-xl tracking-wider md:text-lg lg:text-xl text-start text-white leading-7 font-medium">
          {title}
        </p>
      </div>
      <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        {description}
      </p>
    </div>
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
          className="rounded-t-md"
        />
      </div>

      <div className="px-8 py-8">
        <div className="flex flex-col gap-3 items-start justify-start">
          <div className="w-full flex items-center justify-between">
            <span className="normal-case tracking-normal text-2xs md:text-xs text-gray-100 leading-2 font-normal bg-[#1D7349] px-3 py-1 rounded-md">
              Nesto badge
            </span>
            <span><Image src={ShareIcon} width={20} height={20} alt="share_icon" /></span>
          </div>
          <p className="text-md lg:text-2xl xl:text-3xl tracking-normal text-white leading-7 font-semibold ">
            Cardiovascular strength
          </p>
        </div>
        <div className="flex flex-col pt-8">
          <p className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae
            obcaecati eius illo assumenda fugiat, ut quae mollitia{" "}
          </p>
        </div>

        <div className="border-b border-gray-600 flex items-center justify-between pt-12 pb-4 normal-case tracking-normal text-2xs md:text-sm lg:text-lg text-gray-100 leading-2 font-normal">
          <span className="flex flex-row items-center gap-2 normal-case tracking-normal text-gray-100 leading-2 font-normal rounded-md">
            <DumbellIcon /> 24 Number Of
          </span>
          <span className="flex flex-row items-center gap-2 normal-case tracking-normal text-gray-100 leading-2 font-normal rounded-md">
            <DumbellIcon />7 Ways for
          </span>
        </div>

        {/* Rasmiliti da li ovdje staviti gumb, da li se uklapa u dizajn */}
        <div className="flex flex-row justify-between items-center pt-4">
          <p className="font-semibold text-[#1D7349] text-lg md:text-xl lg:text-2xl tracking-wide uppercase">
            $130.00
          </p>
          <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Discover More
        </button>
        </div>
      </div>
      
    </Link>
  );
}
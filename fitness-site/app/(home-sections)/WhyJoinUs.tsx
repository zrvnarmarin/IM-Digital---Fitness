import React, { ReactNode } from "react";
import Image from "next/image";
import { RightIcon, TwoHumansIcons, DumbellIcon } from "@/public/Icons";
import { CameraIcon } from "@/public/Icons";
import { CalendarIcon } from "@/public/Icons";
import ExampleImage from "../../public/AboutUsHeroImage.avif";
import TestImage from "../../public/CardioBlastImage.jpg";
import Link from "next/link";

export default function WhyJoinUs() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-normal text-white text-2xl tracking-wider w-full pt-12">
        Why Join Us
      </h1>
      <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        We have experience serving members in helping body fitness, and under
        the guidance of a professional trainer
      </p>
      <div className="pt-10">
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

      <div className="flex flex-col gap-2 items-start justify-start px-8 pt-8">
        <span className="normal-case tracking-normal text-2xs md:text-xs text-gray-100 leading-2 font-normal bg-[#1D7349] px-3 py-1 rounded-md">
          Nesto badge
        </span>
        <p className="text-md lg:text-2xl xl:text-3xl tracking-normal text-white leading-7 font-semibold ">
          Cardiovascular strength
        </p>
      </div>

      <div className="flex flex-col pt-8 mx-8">
        <p className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae
          obcaecati eius illo assumenda fugiat, ut quae mollitia{" "}
        </p>
      </div>

      <div className="border-b border-gray-600 flex items-center justify-between mx-8 pt-12 pb-4 normal-case tracking-normal text-md md:text-md lg:text-lg text-gray-100 leading-2 font-normal">
        <span className="flex flex-row gap-2 normal-case tracking-normal text-2xs text-gray-100 leading-2 font-normal rounded-md">
          <DumbellIcon /> 24 Number Of 
        </span>
        <span className="flex flex-row gap-2 normal-case tracking-normal text-2xs text-gray-100 leading-2 font-normal rounded-md">
          <DumbellIcon />7 Ways for 
        </span>
      </div>

      <div className="flex flex-row justify-between items-center mx-8 pt-2">
        <p className="font-semibold text-[#1D7349] text-lg md:text-xl lg:text-2xl tracking-wide uppercase">
          $130.00
        </p>
      </div>

      {/* <p className="flex px-4 items-center gap-4 justify-end text-md tracking-wider lg:text-lg text-white leading-2 font-medium">
        Discover More
        <RightIcon strokeOne="#FFFFFF" strokeTwo="#FFFFFF" />
      </p> */}
    </Link>
  );
}

type SectionWrapperProps = {
  children: ReactNode;
};

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="w-full flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-8 md:px-14 lg:px-28 xl:px-42 2xl:px-48 bg-[#1F2125]">
      {children}
    </section>
  );
}

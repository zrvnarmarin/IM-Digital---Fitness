import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import ShareIcon from "../../public/share-arrow-svgrepo-com.png";
import TestImage from "../../public/CardioBlastImage.jpg";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function OurTeam() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-normal text-white text-2xl tracking-wider mr-4">
          Our Team
        </h1>
        <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Meet the rest
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg gap-6">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
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

type TrainerType = {
  id: number;
  name: string;
  description: string;
  href: string;
  image?: StaticImageData;
};

const trainers: TrainerType[] = [
  {
    id: 1,
    name: "Dave Johnson",
    description: "Bodybuilding And Strength Training",
    href: "/trainers/dave-johnson",
  },
  {
    id: 2,
    name: "John Zherka",
    description: "Calisthenics",
    href: "/trainers/john-zherka",
  },
  {
    id: 3,
    name: "James Bush",
    description: "CrossFit And Mobility",
    href: "/trainers/james-bush",
  },
];

export const TrainerCard = ({ trainer }: { trainer: TrainerType }) => {
  return (
    <Link href={`/our-team/${"fbjkdf"}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>

        {/* On hover image */}
        <div className="absolute top-0 bottom-0 right-0 p-4 transition duration-300 ease-in-out bg-black/10 text-white opacity-0 group-hover:opacity-100">
          <div className="flex flex-col gap-8 pt-4">
            <span>
              <Image src={ShareIcon} width={20} height={20} alt="share_icon" />
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 hover:text:[#1D7349] duration-100">
              fb
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 hover:text:[#1D7349] duration-100">
              li
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 hover:text:[#1D7349] duration-100">
              in
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <p className="font-semibold text-gray-100 text-lg md:text-xl lg:text-2xl tracking-wide pt-4">
          {trainer.name}
        </p>
        <p className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          {trainer.description}
        </p>
      </div>
    </Link>
  );
};

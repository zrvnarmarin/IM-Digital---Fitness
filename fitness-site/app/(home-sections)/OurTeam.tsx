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
        <h2 className="w-full h2">Our Team</h2>
        <div className="w-full hidden md:flex items-center justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white">
            Meet The Rest
          </button>
        </div>
      </div>

      <p className="text-subheading">
        Meet our exceptional team which will test your limits
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg gap-6">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>

      <div className="flex w-full md:hidden items-center justify-center">
        <Link
          href="/instructors"
          className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white"
        >
          Meet The Rest
        </Link>
      </div>
    </SectionWrapper>
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
        <div className="absolute inset-0 p-4 transition duration-300 ease-in-out bg-[#24d17c]/10 text-white opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <p className="h3">Meet John</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-1">
        <h3 className="pt-4 w-full h3">{trainer.name}</h3>
        <p className="text-normal">{trainer.description}</p>
        {/* Ovdje staviti strelicu desno, pogledaj dizajn */}
      </div>
    </Link>
  );
};

// put this code below trainer description
{
  /* <span>
              <Image src={ShareIcon} width={20} height={20} alt="share_icon" />
            </span> */
}
{
  /* <button className="w-full pt-4 text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
              fb
            </button>
            <span className="w-full pt-4 text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
              li
            </span>
            <span className="w-full pt-4 text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
              in
            </span> */
}

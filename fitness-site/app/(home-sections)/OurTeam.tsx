import React from "react";
import Image, { StaticImageData } from "next/image";
import { InstagramIcon, YouTubeIcon } from "@/public/Icons";
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
        <div className="absolute inset-0 p-4 transition duration-300 ease-in-out bg-gradient-to-r from-[#090a0c] to-[#191919]/20 text-white opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <button className="h3  flex items-center gap-2">
              <RightArrow />
              View Profile
            </button>
            <div className="bg-black/30 absolute bottom-0 right-0 left-0 flex flex-row gap-2 items-center justify-center py-4 px-2">
              <span className="text-normal">
                <span className="text-[#24d17c] text-normal font-semibold">
                  300+
                </span>{" "}
                satisfied clients
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="pt-4 w-full h3">{trainer.name}</h3>
        <p className="text-normal">{trainer.description}</p>
        <div className="flex items-center gap-2 pt-2">
          <span className="hover:scale-110 bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-full p-1">
            <YouTubeIcon fillColor={"#ffffff"} />
          </span>
          <span className="hover:scale-110 bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-full p-1">
            <InstagramIcon fillColor={"#ffffff"} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42px"
      height="42px"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          stroke="#24d17c"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 12H3"
        ></path>
        <path
          fill="#24d17c"
          d="m21.643 11.786l-3.431-2.059a.8.8 0 0 0-1.212.686v3.174a.8.8 0 0 0 1.212.686l3.43-2.059a.25.25 0 0 0 0-.428"
        ></path>
      </g>
    </svg>
  );
};

import React from "react";
import { RightIcon } from "@/public/Icons";
import Link from "next/link";
import { programs } from "../data";
import Image from "next/image";
import YogaImage from '../../public/yoga-program.avif'

export default function ExploreOurProgram() {
  return (
    <section className="px-6 md:px-8 lg:px-24 py-24 relative w-full">
      <h1 className="uppercase font-bold text-white text-3xl">
        Explore Our Program
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-8 md:pt-12">
        {programs.map((programCard) => (
          <ProgramCard
            key={programCard.title}
            href={programCard.href}
            title={programCard.title}
            description={programCard.description}
            icon={programCard.icon}
            image={programCard.image}
          />
        ))}
      </div>
    </section>
  );
}

export function ProgramCard({
  href,
  title,
  description,
  icon,
  image
}: {
  href: string;
  title: string;
  description: string;
  icon: () => JSX.Element;
  image: any
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-8 rounded-xl p-6 bg-[#1F2125] hover:scale-105 hover:bg-[#35373B] hover:outline-2 focus:outline-2 outline-[#1D7349] cursor-pointer"
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div>
        <p className="text-md md:text-lg lg:text-xl text-center text-white leading-7 font-semibold">
          {title}
        </p>
      </div>
      <p className="flex-1 text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        {description}
      </p>
      <Link href={"/join-now"} className="flex gap-4 items-center">
        <p className="text-md lg:text-lg text-white leading-2 font-medium">
          Join Now
        </p>
        {<RightIcon strokeOne={"#FFFFFF"} strokeTwo={"#FFFFFF"} />}
      </Link>
    </Link>
  );
}

import React from "react";
import Link from "next/link";
import { programs } from "../data";

export default function ExploreOurProgram() {
  return (
    <section className="px-6 md:px-8 lg:px-24 pt-12 relative w-full">
      <h1 className="uppercase font-normal text-white text-2xl tracking-wider">
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
  image,
}: {
  href: string;
  title: string;
  description: string;
  icon: () => JSX.Element;
  image: any;
}) {
  return (
    <div
      //#1F2125
      className="flex flex-col gap-8 rounded-md p-6 bg-[#111317] duration-100 border border-[#1D7349]"
    >
      <div className="flex flex-row md:flex-col gap-4 items-center">
        <div className="bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div>
        <p className="text-2xl text-start text-[#1D7349] leading-7 font-bold tracking-wider uppercase">
          {title}
        </p>
      </div>
      <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        {description}
      </p>
    </div>
  );
}

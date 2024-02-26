import React from "react";
import Link from "next/link";
import ShareIcon from "../../../public/share-arrow-svgrepo-com.png";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { InstructorType } from "@/app/types";
import { instructors } from "@/app/data/instructors";
import { InstagramIcon } from "@/public/Icons";

export function InstructorCardsSection() {
  return (
    <SectionWrapper>
      {instructors.map((instructor) => (
        <InstructorCard key={instructor.id} instructor={instructor} />
      ))}
    </SectionWrapper>
  );
}

export const InstructorCard = ({
  instructor,
}: {
  instructor: InstructorType;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-[#111111]">
      <div className="flex flex-row">
        <Image
          src={instructor.imageSrc}
          width={300}
          height={300}
          alt="instructor"
          className="w-fit object-cover"
        />
        <div className="w-full group flex flex-col gap-4 rounded-md bg-[#111111] duration-100 hover:bg-[#161616] py-4 px-6">
          <div className="flex flex-row items-center justify-between">
            <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
              {instructor.name}
            </p>
            <span>
              <Image src={ShareIcon} width={20} height={20} alt="share_icon" />
            </span>
          </div>
          <ul className="flex flex-row gap-2">
            {instructor.specializations.map((specialization) => (
              <li key={specialization}>
                <p className=" font-normal text-white text-md tracking-wider w-fit bg-[#1D7349] px-4 rounded">
                  {specialization}
                </p>
              </li>
            ))}
          </ul>
          <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
            +{instructor.experience} years of the experience in the industry
          </p>
          <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
            {instructor.description}
          </p>
          <div className="flex flex-row gap-2">
            <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
              Certifications:
            </p>
            <ul className="flex flex-row gap-2">
              {instructor.certifications.map((certification) => (
                <li key={certification}>
                  <p className="font-normal text-white text-md tracking-wider w-fit bg-[#1D7349] px-4 rounded">
                    {certification}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row gap-4 items-center justify-between">
            <div className="rounded-full cursor-pointer border-2 border-[#1D7349] p-1 hover:bg-white hover:scale-125 duration-200">
              <InstagramIcon />
            </div>
            <div className="flex flex-row items-center gap-4">
              <Link href={`/instructors/${instructor.href}/availability`} className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
                Check Availability
              </Link>
              <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
                Get In Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

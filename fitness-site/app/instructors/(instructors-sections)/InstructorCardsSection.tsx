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
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-row">
        <Image
          src={instructor.imageSrc}
          width={300}
          height={300}
          alt="instructor"
          className="w-fit object-cover"
        />
        <div className="w-full group flex flex-col gap-4 py-4 px-6 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border border-[#292929]">
          <div className="flex flex-row items-center justify-between">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
              {instructor.name}
            </p>
            <span>
              <Image src={ShareIcon} width={20} height={20} alt="share_icon" />
            </span>
          </div>
          <ul className="flex flex-row gap-2">
            {instructor.specializations.map((specialization) => (
              <li key={specialization}>
                <p className="normal-case text-xs text-white leading-2 font-normal bg-[#31C57D] px-3 py-1 rounded-lg">
                  {specialization}
                </p>
              </li>
            ))}
          </ul>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            +{instructor.experience} years of the experience in the industry
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            {instructor.description}
          </p>
          <div className="flex flex-row gap-2">
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              Certifications:
            </p>
            <ul className="flex flex-row gap-2">
              {instructor.certifications.map((certification) => (
                <li key={certification}>
                  <p className="normal-case text-xs text-white leading-2 font-normal bg-[#31C57D] px-3 py-1 rounded-lg">
                    {certification}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row gap-4 items-center justify-between">
            <div className="w-full flex flex-row items-center justify-end gap-4">
              <Link
                href={`/instructors/${instructor.href}/availability`}
                className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
              >
                Check Availability
              </Link>
              <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
                Get In Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

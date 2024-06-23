"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { facilityCardData } from "./../data/facilities";

export default function TheClassYouWillGetThereSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (index: number) => setActiveIndex(index);

  return (
    <SectionWrapper>
      <h1 className="w-full h2">Facilities</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-white flex items-center justify-center">
          <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
            <Image
              priority
              src={facilityCardData[activeIndex].imageSrc}
              alt={facilityCardData[activeIndex].title}
              fill={true}
              className="object-cover w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 relative">
          <ul className="flex flex-col gap-6">
            {facilityCardData.map((card, index) => (
              <li
                key={card.id}
                className={`group flex flex-row gap-4 rounded-lg p-5 ${activeIndex === index ? "bg-gradient-to-r from-[#090a0c] to-[#131313] border-[0.5px] border-[#111316]" : "bg-gradient-to-r from-[#090a0c] to-[#131313] border-[0.5px] border-[#111316]"} cursor-pointer`}
                onClick={() => handleShow(index)}
              >
                {/* First row */}
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-4">
                    {card.icon()}
                  </div>
                  <span
                    className={`${activeIndex === index ? "rotate-90 duration-300" : "rotate-0 duration-300"}`}
                  ></span>
                </div>

                {/* Second row */}
                <div className="flex flex-col items-center justify-center gap-1">
                  <h3 className="w-full h3 text-start">{card.title}</h3>
                  {activeIndex === index ? (
                    <p className="text-normal">{card.description}</p>
                  ) : null}
                </div>

                {/* Third row */}
                <div className="group-hover:bg-red-400 flex items-center justify-end ml-auto">
                  <ArrowRight />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export type FacilityCardType = {
  icon: () => JSX.Element;
  title: string;
  description: string;
};

export const ArrowRight = ({
  width = "40px",
  height = "40px",
}: {
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      fill="#31C57D"
      width={width}
      height={height}
      viewBox="-17.28 -17.28 66.56 66.56"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#31C57D"
      stroke-width="2.6320000000000001"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="2.192"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>{" "}
      </g>
    </svg>
  );
};

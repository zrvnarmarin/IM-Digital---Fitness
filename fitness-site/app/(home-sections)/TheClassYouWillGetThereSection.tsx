"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ExampleImage from "../../public/gymFacilityImage.png";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import SwimmingImage from "../../public/SwimmingFacilityCard.jpg";
import SpaImage from "../../public/WelnessAndSpaCard.jpg";
import StudiosImage from "../../public/StudiosFacilityCard.jpg";
import GymImage from "../../public/gymImage.jpg";
import { TestIcon } from "@/public/Icons";

export default function TheClassYouWillGetThereSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (index: number) => setActiveIndex(index);

  return (
    <SectionWrapper>
      <h1 className="w-full uppercase text-gray-300 text-3xl tracking-tight text-start font-bold">
        Facilities
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-white flex items-center justify-center">
          <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
            <Image
              priority
              src={ExampleImage}
              alt="alt"
              fill={true}
              className="object-cover w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 relative">
          <ul className="flex flex-col gap-6">
            {facilities.map((card, index) => (
              <FacilitiesCard
                key={card.id}
                card={card}
                isActive={activeIndex === index}
                onShow={() => handleShow(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const FacilitiesCard = ({
  card,
  isActive,
  onShow,
}: {
  card: SeconSectionCardType;
  isActive: boolean;
  onShow: () => void;
}) => {
  return (
    <li
      onClick={onShow}
      className={`${isActive ? "cursor-pointer group flex flex-row rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#191919] border border-[#292929]" : "cursor-pointer"}`}
    >
      <div
        className={`${isActive ? "flex flex-row gap-2 items-start" : "rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#292929] border border-[#292929] flex flex-row gap-2 items-start px-6"} `}
      >
        <div className="flex flex-col gap-4">
          <div
            className={`${isActive ? "flex items-center justify-between gap-2 w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold" : "flex items-center gap-2 w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold"}`}
          >
            <div className="flex flex-row items-center gap-2">
              <TestIcon height="1.5em" width="1.5em" iconFill="#31C57D" />
              {card.mainTitle}
            </div>
            <ArrowRight />
          </div>
          {isActive ? (
            <p className="normal-case text-md text-gray-300 leading-2">
              {card.description}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
};

export type SeconSectionCardType = {
  icon: StaticImageData;
  mainTitle: string;
  description: string;
};

const facilities = [
  {
    id: 1,
    imageSrc: SwimmingImage,
    mainTitle: "Swimming",
    color: "#31C57D",
    description:
      "This is a placeholder text and where it will be something eventually written his. This is a placeholder text and where it will be something eventually written his.",
  },
  {
    id: 2,
    icon: SpaImage,
    mainTitle: "Spa And Welness",
    color: "#C57D31",
    description:
      "This is a placeholder text and where it will be something eventually written his. This is a placeholder text and where it will be something eventually written his.",
  },
  {
    id: 3,
    icon: StudiosImage,
    color: "#7D31C5",
    mainTitle: "Studios",
    description:
      "This is a placeholder text and where it will be something eventually written his. This is a placeholder text and where it will be something eventually written his.",
  },
  {
    id: 4,
    icon: GymImage,
    color: "#7D31C5",
    mainTitle: "Gym",
    description:
      "This is a placeholder text and where it will be something eventually written his. This is a placeholder text and where it will be something eventually written his.",
  },
];

export const ArrowRight = () => {
  return (
    <svg
      fill="#31C57D"
      width="40px"
      height="40px"
      viewBox="-17.28 -17.28 66.56 66.56"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#31C57D"
      stroke-width="1.6320000000000001"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.192"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>{" "}
      </g>
    </svg>
  );
};

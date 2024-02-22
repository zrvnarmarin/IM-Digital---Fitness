import React from "react";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { DumbellIcon } from "@/public/Icons";
import Link from "next/link";
import Image from "next/image";
import TestImage from "../../../../public/CardioBlastImage.jpg";
import TestIcon from '../../../../public/mealtiming.png'

export default function ProgramNutritionalGuidance() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-normal text-white text-2xl tracking-wider w-full">
        Nutritional Guidance
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {nutritionalGuidance.map((item) => (
          <NutritionalGudanceCard nutritionalGuideItem={item} key={item.id} />
        ))}
      </ul>
    </SectionWrapper>
  );
}

export const NutritionalGuidanceCard = ({
  nutritionalGuideItem,
}: {
  nutritionalGuideItem: NutritionalGuidanceType;
}) => {
  return (
    <div
      //#1F2125
      className="flex flex-col gap-4 rounded-md p-6 bg-[#111111] duration-100 "
    >
      <div className="flex flex-row md:flex-col gap-4 items-center md:items-start">
        <div className=" bg-[#1D7349] rounded-md p-2 w-fit">
          <DumbellIcon />
        </div>
        <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-[#1D7349] leading-7 font-semibold">
          {nutritionalGuideItem.title}
        </p>
      </div>
      <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
        {nutritionalGuideItem.description}
      </p>
    </div>
  );
};

type NutritionalGuidanceType = {
  id: number;
  title: string;
  description: string;
};

const nutritionalGuidance: NutritionalGuidanceType[] = [
  {
    id: 1,
    title: "Personalized Nutrition Plan",
    description:
      "Each participant will receive a personalized nutrition plan tailored to their specific goals, body composition, and dietary preferences. The nutrition plan will be created by certified nutritionists or registered dietitians in collaboration with our trainers to ensure it complements the strength training program.",
  },
  {
    id: 2,
    title: "Macronutrient Recommendations",
    description:
      "Participants will receive guidance on macronutrient distribution to optimize performance, muscle recovery, and body composition. Specific recommendations will be provided for protein intake to support muscle repair and growth, carbohydrates for energy, and healthy fats for hormone regulation and joint health.",
  },
  {
    id: 3,
    title: "Meal Timing and Frequency",
    description:
      "The nutrition plan will include recommendations for meal timing and frequency to maximize energy levels, muscle protein synthesis, and recovery. Participants will learn about the importance of pre- and post-workout nutrition to fuel workouts, support muscle repair, and replenish glycogen stores.",
  },
  {
    id: 5,
    title: "Hydration and Supplementation",
    description:
      "Hydration guidelines will be included to ensure participants maintain optimal fluid balance for performance, recovery, and overall health. Supplement recommendations may be provided based on individual needs and deficiencies, with a focus on evidence-based options such as protein powder, creatine, and branched-chain amino acids (BCAAs).",
  }
];

const NutritionalGudanceCard = ({
  nutritionalGuideItem,
}: {
  nutritionalGuideItem: NutritionalGuidanceType;
}) => {
  return (
    <Link href={`/news/${"xcfgbnfg"}`}>
      <li className="relative group overflow-hidden cursor-pointer rounded shadow-lg">
        {/* Paragraph before hover */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-white flex flex-col items-center opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out z-10">
            <Image height={100} width={100} alt="fvbd" src={TestIcon} className="bg-white rounded-md " />
            <p className="w-full pt-8 text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 font-semibold">
              {nutritionalGuideItem.title}
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className="group-hover:scale-105 transition duration-500 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-500"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-black opacity-95"></div>

        {/* Text Container */}
        <div
          className="absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 p-4 transition duration-300 ease-in-out w-full bg-[#1D7349]/70
            text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center z-20"
        >
          <p className="normal-case tracking-wider text-md text-center md:text-lg text-gray-300 leading-2 font-medium">
            {nutritionalGuideItem.description}
          </p>
        </div>
      </li>
    </Link>
  );
};

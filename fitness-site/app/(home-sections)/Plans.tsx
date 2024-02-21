import React from "react";
import Image from "next/image";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from '../../public/gymImage.jpg'

export default function Plans() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-normal text-white text-2xl tracking-wider mr-4">
          Plans
        </h1>
        <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          See All Programs
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg gap-6">
          {plans.map((planCard) => (
            <PlanCard key={planCard.id} plan={planCard} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function PlanCard({ plan }: { plan: PlanCardType }) {
  return (
    <div className="relative flex flex-col gap-2 p-8 py-10 bg-[#1F2125] rounded-md">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={TestImage}
          layout="fill"
          objectFit="cover"
          alt="image"
        />
      </div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-black opacity-95"></div>
      
      {/* Text Content */}
      <div className="relative z-10">
        <div className="flex items-center">
          <p className="font-semibold text-white text-lg md:text-xl lg:text-2xl tracking-wide">
            {plan.title}
          </p>
        </div>
        <p className="w-full pt-4 text-xl md:text-xl lg:text-6xl tracking-normal text-start text-[#1D7349] leading-7 font-black">
          ${plan.price}
        </p>
        <p className="font-semibold text-gray-100 text-lg md:text-xl tracking-wide uppercase">
          {plan.description}
        </p>
        <ul className="flex flex-col gap-3 pt-6">
          {plan.perks.map((perk, index) => (
            <li
              key={index} // Use index as the key, since plan.id might not be unique
              className="font-semibold text-gray-100 text-lg md:text-xl tracking-wide"
            >
              &#x2022; {perk}
            </li>
          ))}
        </ul>
        <button className="w-full mt-6 border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Join now
        </button>
      </div>
      
    </div>
  );
}


export type PlanCardType = {
  id: number;
  title: string;
  description: string;
  price: string;
  perks: string[];
};

const plans = [
  {
    id: 1,
    title: "Professional Trainer",
    description: "Single Class",
    price: "49.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
  {
    id: 3,
    title: "Professional Trainer",
    description: "Single Class",
    price: "99.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
  {
    id: 2,
    title: "Professional Trainer",
    description: "Single class",
    price: "199.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
];

import React from "react";
import Image from "next/image";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from '../../public/gymImage.jpg'

export default function Plans() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
          Plans
        </h1>
        <div className="w-full flex items-center justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            See All Plans
          </button>
        </div>
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
    <div className="relative flex flex-col gap-2 p-8 py-10 duration-900 rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={TestImage}
          layout="fill"
          objectFit="cover"
          alt="image"
          className="rounded-lg"
        />
      </div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101010] hover:from-[#101010] hover:to-[#292929] to-[#161616] border border-[#292929] opacity-95 rounded-lg"></div>
      
      {/* Text Content */}
      <div className="relative z-10">
        <div className="flex items-center">
          <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 font-bold">
            {plan.title}
          </p>
        </div>
        <p className="w-full pt-4 text-xl md:text-xl lg:text-5xl tracking-wider underline underline-offset-8 decoration-2 decoration-solid text-center text-[#31C57D] leading-7 font-semibold">
          ${plan.price}
        </p>
        <p className="w-full text-xl pt-2 md:text-md lg:text-lg tracking-normal text-center text-white leading-7 font-semibold uppercase">
          {plan.description}
        </p>
        <ul className="flex flex-col gap-1 items-center pt-6">
          {plan.perks.map((perk, index) => (
            <li
              key={index} // Use index as the key, since plan.id might not be unique
              className="fnormal-case text-md md:text-md text-gray-300 leading-2 font-normal"
            >
              &#x2022; {perk}
            </li>
          ))}
        </ul>
        <button className="w-full mt-6 bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
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
    title: "Standard Package",
    description: "Single Class",
    price: "49.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
  {
    id: 3,
    title: "Advanced Package",
    description: "Single Class",
    price: "99.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
  {
    id: 2,
    title: "Premium Package",
    description: "Single class",
    price: "199.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
];

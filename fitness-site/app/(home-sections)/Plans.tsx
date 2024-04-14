import React from "react";
import Image from "next/image";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from "../../public/gymImage.jpg";
import Link from "next/link";

export default function Plans() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h2 className="w-full h2">Plans</h2>
        <div className="w-full hidden md:flex items-center justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white">
            See All Plans
          </button>
        </div>
      </div>
      <p className="text-subheading">
        We have experience serving members in helping body fitness, and under
        the guidance of a professional trainer
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-lg gap-6">
          {plans.map((planCard) => (
            <PlanCard key={planCard.id} plan={planCard} />
          ))}
        </div>
      </div>
      <div className="flex w-full md:hidden items-center justify-center">
        <Link
          href="/plans"
          className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white"
        >
          See All Plans
        </Link>
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
          alt="image"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101010]  to-[#161616] border border-[#292929] opacity-95 rounded-lg"></div>

      {/* Text Content */}
      <div className="relative z-10">
        <div className="flex items-center">
          <h3 className="w-full h3 text-center">{plan.title}</h3>
        </div>
        <p
          className={`w-full pt-4 text-4xl md:text-5xl  tracking-wider text-center bg-gradient-to-r bg-clip-text text-transparent pr-2 from-[#1D7349] to-[#31C57D] leading-7 font-semibold`}
        >
          ${plan.price}
        </p>
        <h4 className="w-full text-lg pt-1 md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold uppercase">
          {plan.description}
        </h4>
        <ul className="flex flex-col gap-1 items-center pt-6">
          {plan.perks.map((perk, index) => (
            <li key={index} className="text-normal">
              &#x2022; {perk}
            </li>
          ))}
        </ul>
        <div className="w-full flex items-center justify-center p-2">
          <button className="w-fit mt-6 bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white">
            Join now
          </button>
        </div>
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
  mostPopular: boolean;
};

const plans = [
  {
    id: 1,
    title: "Standard Package",
    description: "Single Class",
    mostPopular: false,
    price: "49.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
  {
    id: 3,
    title: "Advanced Package",
    description: "Single Class",
    price: "99.77",
    mostPopular: true,
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
  {
    id: 2,
    title: "Premium Package",
    description: "Single class",
    mostPopular: false,
    price: "199.77",
    perks: ["Perk One", "Perk Two", "Perk Three", "Perk Four"],
  },
];

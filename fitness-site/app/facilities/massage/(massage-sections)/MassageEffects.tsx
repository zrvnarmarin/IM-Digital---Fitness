"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from "../../../public/ImageForArticle_22825_16576273997625986.webp";
import Link from "next/link";
import { UniqueSellingPointIconThree } from "@/app/data/uniqueSellingPoints";

// look this: https://figura-fit.hr/miofascijalna-relaksacija/

export default function MassageEffects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeMassageType = (index: number) => setActiveIndex(index);

  return (
    <SectionWrapper>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12">
        <div className="relative flex flex-col gap-3 bg-gradient-to-r from-[#090a0c] to-[#191919] border-[0.5px] border-[#111316] p-5 rounded-lg">
          {/* Blur background */}
          {/* <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div> */}

          <div className="flex flex-col z-20">
            <p className="text-above-heading">Effects</p>
            <h3 className="w-full h3 text-3xl pt-1">What to expect</h3>
            <div className="relative flex items-center justify-start gap-6 mt-4 py-1 px-1 rounded-lg ">
              {massageTypes.map((massageType, index) => (
                <button
                  key={massageType.id}
                  onClick={() => changeMassageType(index)}
                  className={`rounded-lg py-2 px-4 ${activeIndex === index ? "bg-black text-[#24d17c] text-normal" : "text-normal"}`}
                >
                  {massageType.title}
                </button>
              ))}
            </div>
          </div>
          <p className="text-normal z-20 pt-4">
            {massageTypes[activeIndex].shortDescription}
          </p>
          <div className="w-full pt-4 z-20">
            {/* TO DO: change the style of this button */}
            <Link
              href="#massages"
              className="w-fit text-normal rounded-lg bg-black py-2 px-4 text-[#ffffff] hover:text-[#24d17c]"
            >
              Choose the massage
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 bg-gradient-to-r from-[#090a0c] to-[#161616] border-[0.5px] border-[#111316] p-5 rounded-lg">
          {/* Blur background */}
          {/* <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div> */}

          {massageTypes[activeIndex].effects.map(({ name, value }, index) => (
            <div
              key={name}
              className={`group flex flex-row gap-4 pb-4 border-b border-[#292929]`}
            >
              {/* First row */}
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <UniqueSellingPointIconThree />
                </div>
                <span className={``}></span>
              </div>

              {/* Second row */}
              <div className="flex flex-col items-center justify-center gap-1">
                <h3 className="w-full h3 text-start">{name}</h3>
                <p className="text-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem, esse?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export const massageTypes: any[] = [
  {
    id: 1,
    href: "/classical-massage",
    title: "Classical",
    shortDescription:
      "11111111 Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      { name: "Antistress", value: true },
      { name: "Pain Reduction", value: true },
      { name: "Increased Mobility", value: true },
      { name: "Drowsiness", value: true },
    ],
  },
  {
    id: 2,
    href: "/deep-tissue",
    title: "Deep Tissue",
    shortDescription:
      "2222222 Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      { name: "Antistress", value: true },
      { name: "Pain Reduction", value: true },
      { name: "Increased Mobility", value: true },
      { name: "Drowsiness", value: true },
    ],
  },
  {
    id: 3,
    href: "/sport-massage",
    title: "Sport",
    shortDescription:
      "3333333 Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      { name: "Antistress", value: true },
      { name: "Pain Reduction", value: true },
      { name: "Increased Mobility", value: true },
      { name: "Drowsiness", value: true },
    ],
  },
  {
    id: 4,
    href: "/medical-massage",
    title: "Medical",
    shortDescription:
      "44444444 Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      { name: "Antistress", value: true },
      { name: "Pain Reduction", value: true },
      { name: "Increased Mobility", value: true },
      { name: "Drowsiness", value: true },
    ],
  },
];

export type MassageType = {
  id: number;
  title: string;
  href: string;
  shortDescription: string;
  effects: MassageEffectType[];
};

export type MassageEffectType = {
  id: number;
  antistress: boolean;
  painReduction: boolean;
  increasedMobility: boolean;
  drowsiness: boolean;
};

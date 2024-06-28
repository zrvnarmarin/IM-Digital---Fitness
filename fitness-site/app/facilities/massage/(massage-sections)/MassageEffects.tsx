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

  const handleShow = (index: number) => setActiveIndex(index);

  return (
    <SectionWrapper>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12">
        <div className="relative flex flex-col gap-3 bg-gradient-to-r from-[#090a0c] to-[#191919] border-[0.5px] border-[#111316] p-5 rounded-lg">
          {/* Blur background */}

          <div className="flex flex-col z-20">
            <p className="text-above-heading">Effects</p>
            <h3 className="w-full h3 text-3xl pt-1">What to expect</h3>
            <div className="relative flex items-center justify-start gap-6 mt-4 py-1 px-1 rounded-lg ">
              <button className="text-normal rounded-lg bg-black py-2 px-4 text-[#24d17c]">
                Classical
              </button>
              <button className="text-normal hover:text-[#24d17c]">
                Deep tissue
              </button>
              <button className="text-normal hover:text-[#24d17c]">
                Sport
              </button>
              <button className="text-normal hover:text-[#24d17c]">
                Shiatsu
              </button>
            </div>
          </div>
          <p className="text-normal z-20 pt-4">
            Somethign short about this type of massage: In the “golden days”,
            there weren`t many options for working out. But Joe Gold, our
            founder, had a passion for bodybuilding. He found success as a
            professional “muscleman” and toured with celebrities! But Joe Gold,
            our founder, had a passion for bodybuilding. He found success as a
            professional “muscleman”
          </p>
          <div className="w-full pt-4">
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

          <div
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
              <h3 className="w-full h3 text-start">Antistress</h3>
              <p className="text-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, esse?
              </p>
            </div>
          </div>
          <div
            className={`group flex flex-row gap-4 pb-4 pt-2 border-b border-[#292929]`}
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
              <h3 className="w-full h3 text-start">Pain Reduction</h3>
              <p className="text-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, esse?
              </p>
            </div>
          </div>
          <div
            className={`group flex flex-row gap-4 pb-4 pt-2 border-b border-[#292929]`}
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
              <h3 className="w-full h3 text-start">Increased Mobility</h3>
              <p className="text-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, esse?
              </p>
            </div>
          </div>
          <div
            className={`group flex flex-row gap-4 pb-4 pt-2 border-b border-[#292929]`}
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
              <h3 className="w-full h3 text-start">Drowsiness</h3>
              <p className="text-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, esse?
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const massageTypes: MassageType[] = [
  {
    id: 1,
    href: "/classical-massage",
    title: "Classical Massage",
    shortDescription:
      "Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      {
        id: 1,
        antistress: true,
        painReduction: true,
        increasedMobility: true,
        drowsiness: true,
      },
    ],
  },
  {
    id: 2,
    href: "/deep-tissue",
    title: "Deep Tissue Massage",
    shortDescription:
      "Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      {
        id: 1,
        antistress: true,
        painReduction: true,
        increasedMobility: true,
        drowsiness: true,
      },
    ],
  },
  {
    id: 3,
    href: "/sport-massage",
    title: "Sport Massage",
    shortDescription:
      "Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      {
        id: 1,
        antistress: true,
        painReduction: true,
        increasedMobility: true,
        drowsiness: true,
      },
    ],
  },
  {
    id: 4,
    href: "/medical-massage",
    title: "Medical Massage",
    shortDescription:
      "Somethign short about this type of massage: In the “golden days”, there weren`t many options for working out. But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman” and toured with celebrities! But Joe Gold, our founder, had a passion for bodybuilding. He found success as a professional “muscleman”",
    effects: [
      {
        id: 1,
        antistress: true,
        painReduction: true,
        increasedMobility: true,
        drowsiness: true,
      },
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

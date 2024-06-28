import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from "../../../public/ImageForArticle_22825_16576273997625986.webp";
import Link from "next/link";
import { RightArrow } from "@/app/(home-sections)/OurTeam";
import { ProgramSmallIcon } from "@/app/(home-sections)/Programs";
import { UniqueSellingPointIconThree } from "@/app/data/uniqueSellingPoints";
import MassageEffects from "./(massage-sections)/MassageEffects";

// look this: https://figura-fit.hr/miofascijalna-relaksacija/

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection />
      <AboutMassage />
      <MassageEffects />
      <MassageTypeCardsSection />
    </main>
  );
}

export function AboutMassage() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Something about massage</h2>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12">
        <div className="w-full relative flex items-center justify-start lg:justify-center">
          {/* Image */}
          <Image
            priority
            src={TestImage}
            alt="alt"
            className="md:max-h-[400px] md:max-w-[800px] lg:max-w-full z-20 object-cover rounded-md"
          />
        </div>

        <div className="relative flex flex-col gap-3 bg-gradient-to-r from-[#090a0c] to-[#161616] border-[0.5px] border-[#111316] p-5 rounded-lg">
          {/* Blur background */}
          <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>

          <div className="flex flex-col z-20">
            <p className="text-above-heading">Assets</p>
            <h3 className="w-full h3 text-3xl pt-1">
              Best Quality Facilities And Program
            </h3>
          </div>
          <p className="text-normal z-20 pt-4">
            In the “golden days”, there weren`t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman”
          </p>
          <div className="flex flex-row items-center justify-between pt-4">
            <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
              <ProgramSmallIcon />
              <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                <span className="font-semibold">4</span> types of massages
              </p>
            </div>
            <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
              <ProgramSmallIcon />
              <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                <span className="font-semibold">8+</span> positive effects on
                body
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function MassageTypeCardsSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-1">
        <p className="text-above-heading">Types</p>
        <h2 id="massages" className="w-full h2">
          Massages
        </h2>
        <p className="text-subheading">
          Lorem ipsum dolor sit opsidium lorem dolor
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {massageTypes.map((massageType) => (
          <WelnessServiceCard key={massageType.id} massageType={massageType} />
        ))}
      </ul>
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

export const WelnessServiceCard = ({ massageType }: { MassageType }) => {
  return (
    <Link href={`/facilities/massage${massageType.href}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md rounded-lg">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>

        {/* On hover image */}
        <div className="absolute inset-0 p-4 transition duration-300 ease-in-out bg-gradient-to-r from-[#131313] to-[#191919]/10 text-white opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <button className="h3 flex items-center gap-2">
              <RightArrow />
              {massageType.title}
            </button>
            <div className="bg-black/30 absolute bottom-0 right-0 left-0 flex flex-row gap-2 items-center justify-center py-4 px-2">
              <span className="text-normal">
                <span className="text-[#24d17c] text-normal font-semibold">
                  300+
                </span>{" "}
                satisfied clients
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h3 pt-4 w-full">{massageType.title}</div>
    </Link>
  );
};

export function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Image spans across the width and height of the screen */}
      <div className="absolute inset-0">
        <Image
          priority
          src={TestImage}
          alt="alt"
          layout="fill"
          objectPosition="center"
          className="rounded-md object-cover"
        />
      </div>

      {/* Overlaying color */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Overlaying text content */}
      <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center text-white p-2 px-8 md:px-14 lg:px-28 xl:px-36 2xl:px-42 3xl:px-80">
        <div className="flex flex-col ">
          <div className="w-full flex pt-2 justify-center">
            <h1 className="text-white text-7xl tracking-tight text-center font-bold">
              Massage
            </h1>
          </div>
          <div className="w-full flex pt-6 justify-center">
            <p className="text-subheading">
              Dive into a world of aquatic adventure and skill-building with our
              premier swimming lessons. Whether you're dipping your toes into
              the water for the first time or looking to refine your stroke
              technique, our team of certified instructors is here to guide you
              through every splash.
            </p>
          </div>
        </div>

        <div>
          <Link href={"/contact"} className="btn-primary">
            Reserve Massage
          </Link>
        </div>
      </div>
    </div>
  );
}

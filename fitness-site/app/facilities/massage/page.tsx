import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from "../../../public/HeroTestTest.jpg";
import { FAQType } from "@/app/types";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import Link from "next/link";

// look this: https://figura-fit.hr/miofascijalna-relaksacija/

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection />
      <AboutMassage />
      <MassageBenefitsTable />
      <MassageTypeCardsSection />
    </main>
  );
}

export function AboutMassage() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Something about massage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-white flex items-center justify-center">
          <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
            <Image
              priority
              src={TestImage}
              alt="alt"
              fill={true}
              // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="text-above-heading">Assets</p>
            <h3 className="w-full h3">Best Quality Facilities And Program</h3>
          </div>
          <p className="text-normal">
            In the “golden days”, there weren’t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman”
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function MassageBenefitsTable() {
  return (
    <SectionWrapper>
      return (
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gradient-to-r from-[#101010] to-[#161616] text-center text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Tip tretmana/učinak
              </th>
              <th className="px-6 py-3 bg-gradient-to-r from-[#101010] to-[#161616] text-center text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Klasicna masaža
              </th>
              <th className="px-6 py-3 bg-gradient-to-r from-[#101010] to-[#161616] text-center text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Relaksacijska masaža
              </th>
              <th className="px-6 py-3 bg-gradient-to-r from-[#101010] to-[#161616] text-center text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Sportska masaža
              </th>
              <th className="px-6 py-3 bg-gradient-to-r from-[#101010] to-[#161616] text-center text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Medicinska masaža
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Antistresni učinak
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
            </tr>
            {/* Other rows */}
            <tr>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Smanjenje boli
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
            </tr>
            {/* Add other rows similarly */}
            <tr>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Povećanje pokreltjivosti
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] text-md text-gray-300 leading-2 uppercase font-semibold border border-[#292929]">
                Omamljenost nakon tretmana
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
              <td className="px-8 py-6 text-center whitespace-nowrap bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  ✓
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      );
    </SectionWrapper>
  );
}

export function MassageTypeCardsSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-1">
        <h2 className="w-full h2">Massages</h2>
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
  },
  {
    id: 2,
    href: "/relaxational-massage",
    title: "Relaxational Massage",
  },
  {
    id: 3,
    href: "/sport-massage",
    title: "Sport Massage",
  },
  {
    id: 4,
    href: "/medical-massage",
    title: "Medical Massage",
  },
];

export type MassageType = {
  id: number;
  title: string;
  href: string;
};

export const WelnessServiceCard = ({ massageType }: { MassageType }) => {
  return (
    <Link href={`/facilities/massage${massageType.href}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
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
        <div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{ backgroundColor: "rgba(29, 115, 73, 0.5)" }}
        >
          <h3 className="w-full h3 text-center">{massageType.title}</h3>
        </div>
      </div>
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

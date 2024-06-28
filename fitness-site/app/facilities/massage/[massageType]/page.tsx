import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from "../../../../public/ImageForArticle_22825_16576273997625986.webp";
import { formatString } from "./../../../utils/helpers";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import Link from "next/link";
import { ProgramSmallIcon } from "@/app/(home-sections)/Programs";
import { RightArrow } from "@/app/(home-sections)/OurTeam";

export default function Page({ params }: { params: { massageType: string } }) {
  const { massageType } = params;

  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <HeroSection massageTypeTitle={massageType} />
      <AboutMassageSection />
      <PricingSection />
      <FaqSection />
      <OtherMassagesSection />
    </main>
  );
}

export function HeroSection({
  massageTypeTitle,
}: {
  massageTypeTitle: string;
}) {
  return (
    <SectionWrapper>
      <div className="flex flex-row gap-4 items-center pt-4 md:pt-8 lg:pt-[96px]">
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Blur background */}
          <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>
          <p className="text-above-heading z-20">Relax in our expert hands</p>
          <h1 className="w-full text-white text-[84px]  text-center font-medium z-20">
            {formatString(massageTypeTitle)}
          </h1>
        </div>
      </div>
      <div className="text-white flex items-center justify-center p-2 ">
        <div className="relative flex items-center ">
          <Image
            priority
            src={TestImage}
            alt="alt"
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-lg md:max-h-[600px] z-20"
          />
        </div>
      </div>
      <p className="text-normal text-center md:px-24">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        necessitatibus corrupti quaerat. Eveniet odio hic, blanditiis quasi,
        culpa voluptatibus nam, provident exercitationem incidunt quam expedita
      </p>
    </SectionWrapper>
  );
}

export function PricingSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Pricing</h2>
      <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="relative w-full flex flex-col gap-2 bg-gradient-to-r from-[#090a0c] to-[#212121] border-[0.5px] border-[#111316] rounded-lg p-6">
          <h3 className="w-full h3 text-3xl">Parcijalna masaža</h3>
          <p className="pt-1 xs:pl-2 sm:pl-0 text-start  text-normal">
            &#x2022; <span className="font-semibold">35</span> min
          </p>
          <p className="text-normal">Leđa ili noge</p>
          <div className="flex flex-row justify-between items-center pt-2">
            <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
              $35.00
            </p>
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2  bg-gradient-to-r from-[#090a0c] to-[#212121] border-[0.5px] border-[#111316] rounded-lg p-6">
          <h3 className="w-full h3 text-3xl">Masaža cijelog tijela</h3>
          <p className="pt-1 xs:pl-2 sm:pl-0 text-start  text-normal">
            &#x2022; <span className="font-semibold">55</span> min
          </p>
          <p className="text-normal">Leđa ili noge</p>
          <div className="flex flex-row justify-between items-center pt-2">
            <p className="text-[#31C57D] text-2xl tracking-normal text-start font-semibold">
              $65.00
            </p>
            <button className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <p className="text-normal">
        If you have our app, you can manage your appointment from there. <br />
      </p>
      <div className="w-full flex items-center justify-center">
        <Link
          href={"/contact"}
          className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
        >
          Log In To App
        </Link>
      </div>
    </SectionWrapper>
  );
}

export function FaqSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Frequently Asked Questions</h2>
      <Accordion faqArray={massageFaqArray} />
    </SectionWrapper>
  );
}

export const massageFaqArray = [
  {
    id: 1,
    title: "What is the duration of the Cardio Blast program?",
    answer: "The Cardio Blast program has a duration of 4 weeks.",
  },
  {
    id: 2,
    title: "Which key exercises are included in the Strength Builder program?",
    answer:
      "The Strength Builder program includes key exercises like Squats, Deadlifts, and Bench Press.",
  },
  {
    id: 3,
    title: "What is the intensity level of the CrossFit Challenge program?",
    answer: "The CrossFit Challenge program has a very high intensity level.",
  },
  {
    id: 4,
    title: "Which yoga poses are part of the Yoga and Meditation program?",
    answer:
      "The Yoga and Meditation program includes key poses like Sun Salutations, Warrior Series, and Balancing Poses.",
  },
];

export function AboutMassageSection() {
  return (
    <SectionWrapper>
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
            <p className="text-above-heading">Lorem</p>
            <h3 className="w-full h3 text-3xl pt-1">
              Benefits of this massage
            </h3>
          </div>
          <p className="text-normal z-20 pt-4">
            In the “golden days”, there weren`t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman”
          </p>
          <div className="w-full flex flex-col items-start justify-start gap-4 pt-4">
            <div className="w-full flex items-center justify-between">
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
              <div className="z-20 flex flex-col xs:flex-row sm:flex-col md:flex-row gap-2 items-center md:items-center">
                <ProgramSmallIcon />
                <p className="xs:pl-2 sm:pl-0 text-start sm:text-center text-normal">
                  <span className="font-semibold">4</span> types of massages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12">
        <div className="relative flex flex-col gap-3 bg-gradient-to-r from-[#090a0c] to-[#161616] border-[0.5px] border-[#111316] p-5 rounded-lg">
          {/* Blur background */}
          <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>

          <div className="flex flex-col z-20">
            <p className="text-above-heading">Assets</p>
            <h3 className="w-full h3 text-3xl pt-1">
              What to expect from this massage
            </h3>
          </div>
          <p className="text-normal z-20 pt-4">
            In the “golden days”, there weren`t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman”
          </p>
        </div>
        <div className="w-full relative flex items-center justify-start lg:justify-center">
          {/* Image */}
          <Image
            priority
            src={TestImage}
            alt="alt"
            className="md:max-h-[400px] md:max-w-[800px] lg:max-w-full z-20 object-cover rounded-md"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export function OtherMassagesSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start justify-start gap-1">
        <p className="text-above-heading">Other Massages</p>
        <h1 className="h2">You might be interested in this</h1>
      </div>

      <div className="flex flex-row items-center gap-6 relative">
        <div className="flex-grow">
          <div className="grid grid-cols-3 gap-6">
            {otherMassageTypes.map((otherMassageType) => (
              <OtherMassageTypeCard
                key={otherMassageType.id}
                otherMassageType={otherMassageType}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function OtherMassageTypeCard({
  otherMassageType,
}: {
  otherMassageType: OtherMassageType;
}) {
  return (
    <Link href={`/facilities/massage${"/deep-tissue"}`}>
      <div className="relative group overflow-hidden cursor-pointer shadow-md rounded-lg">
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
              {otherMassageType.name}
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
      <div className="h3 pt-4 w-full"> {otherMassageType.name}</div>
    </Link>
  );
}

export type OtherMassageType = {
  id: number;
  name: string;
  duration: string;
  intensity: string;
};

const otherMassageTypes = [
  {
    id: 1,
    name: "Relaxational Massage",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
  {
    id: 1,
    name: "Sport Massage",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
  {
    id: 3,
    name: "Medical Massage",
    duration: "6 Weeks",
    intensity: "Very Intensive",
  },
];

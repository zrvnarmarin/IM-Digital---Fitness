import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from "../../../../public/HeroTestTest.jpg";
import { formatString } from "./../../../utils/helpers";
import { Accordion } from "@/app/(home-sections)/FAQSection";
import Link from "next/link";

// ovo prekopiraj - https://figura-fit.hr/masaza/terapijska-masaza/#1673872946705-11c1c832-7c99

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
      <div className="flex flex-row gap-4 items-center">
        {/* <div className="flex flex-row justify-start gap-3">
          {[...Array(7)].map((_, index) => (
            <span key={index} className="w-2.5 h-6 bg-[#31C57D]" />
          ))}
        </div> */}
        <div className="flex flex-col">
          <p className="text-above-heading">Relax in our expert hands</p>
          <h1 className="text-white text-7xl tracking-tight text-start font-bold">
            {formatString(massageTypeTitle)}
          </h1>
        </div>
      </div>
      <div className="text-white flex items-center justify-center">
        <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
          <Image
            priority
            src={TestImage}
            alt="alt"
            width={0}
            height={0}
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <p className="text-subheading">
        Dive into a world of massage and relaxing with our premier swimming
        lessons. Whether you're dipping your toes into the water for the first
        time or looking to refine your stroke technique, our team of certified
        instructors is here to guide you through every splash.
      </p>
    </SectionWrapper>
  );
}

export function PricingSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full h2">Pricing</h2>
      <div className="w-full flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="w-full flex flex-col gap-2 p-6 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
          <h3 className="w-full h3">Parcijalna masaža</h3>
          <p className="pt-1 normal-case text-sm text-white leading-2 font-semibold">
            &#x2022; 35 min
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

        <div className="w-full flex flex-col gap-2 p-6 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
          <h3 className="w-full h3">Masaža cijelog tijela</h3>
          <p className="pt-1 normal-case text-sm text-white leading-2 font-semibold">
            &#x2022; 55 min
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
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        Frequently Asked Questions
      </h1>
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
      <ul className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {benefits.map((benefit, index) => (
          <BenefitsSection key={benefit.id} benefit={benefit} index={index} />
        ))}
      </ul>

      <ul className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <li className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
          {/* Right section */}
          <div className="order-2 relative group flex flex-col gap-4 p-6 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
            <div className="flex flex-col gap-6 z-20">
              <h2 className="w-full h2">What to expect</h2>
              <p className="text-subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quo veritatis perferendis fugit repellat unde. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quo veritatis perferendis fugit repellat unde. <br />{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quo veritatis perferendis fugit repellat unde. <br />{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, quo veritatis perferendis fugit repellat unde.
              </p>
            </div>
          </div>

          {/* Left section - image */}
          <div
            className={`relative flex flex-col justify-center items-center gap-6`}
          >
            <div className="absolute z-10 inset-0 bg-black opacity-40 border border-[#292929] rounded-lg"></div>
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
          </div>
        </li>
      </ul>
    </SectionWrapper>
  );
}

export const BenefitsSection = ({ benefit }: { benefit: BenefitType }) => {
  return (
    <li className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
      {/* Right section */}
      <div className="relative group flex flex-col gap-4 p-6 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
        {/* <div className="absolute inset-0 bg-black opacity-80 border border-[#292929] rounded-lg"></div> */}
        <div className="flex flex-col gap-6 z-20">
          <h2 className="w-full h2">Benefits</h2>
          <div className="flex flex-col gap-4 px-6">
            {benefit.sentences.map((sentence) => (
              <div key={sentence} className="flex flex-row gap-4">
                <span className="w-fit h-fit text-white rounded-full px-2 py-0.5 bg-gradient-to-r from-[#31C57D] to-[#31C68D] border border-[#292929]">
                  &#10003;
                </span>
                <p className="text-normal">{sentence}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Left section */}
      <div
        className={`relative flex flex-col justify-center items-center gap-6`}
      >
        <div className="absolute z-10 inset-0 bg-black opacity-40 border border-[#292929] rounded-lg"></div>
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
      </div>
    </li>
  );
};

export type BenefitType = {
  id: number;
  sentences: string[];
};

export const benefits: BenefitType[] = [
  {
    id: 1,
    sentences: [
      "The first phase focuses on establishing a solid foundation of strength and movement proficiency.",
      "Workouts emphasize compound lifts such as squats, deadlifts, bench presses, and rows, along with foundational accessory exercises to address muscular imbalances and weak points.",
      "Participants will learn proper exercise technique, breathing mechanics, and lifting cues to ensure safety and effectiveness.",
    ],
  },
];

export function OtherMassagesSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-3">
          <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
            Lorem ipsum
          </p>
          <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
            Other Massages
          </h1>
          <p className="text-white">
            See other massages for best relaxation experiences
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
            &larr;
          </button>
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
            &rarr;
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end gap-4"></div>
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
    <div
      key={otherMassageType.id}
      className="flex flex-col gap-2 rounded-lg bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
    >
      <Image
        src={TestImage}
        width={0}
        height={0}
        alt="slika"
        className="rounded-lg"
      />
      <p className="px-2 text-lg tracking-normal text-center pb-2 leading-7 font-medium text-white">
        {otherMassageType.name}
      </p>
    </div>
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

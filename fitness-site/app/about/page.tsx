import React from "react";
import Image from "next/image";
import HeroSection from "./(about-sections)/HeroSection";
import { RightIcon } from "@/public/Icons";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from "../../public/CardioBlastImage.jpg";
import ShareIcon from "../../public/share-arrow-svgrepo-com.png";
import {
  SuccessStoryCard,
} from "../(home-sections)/SuccessStories";
import { testimonials } from "../data";
import BrandImageLogo from '../../public/fifaLogo.jpg'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <HeroSection />
      {/* <LegacyOfStrengthSection /> */}
      <LegacyOfCourageSection />
      <FoundersSection />
      <LongParagraphsSection />
      <MissionAndValuesSection />
      <TestimonialsSection />
      <SectionWrapper>
        <p className="w-full text-xl md:text-xl lg:text-xl text-center tracking-normal text-white leading-7 font-semibold">
          Trusted by top private gyms
        </p>
        <div className="flex flex-wrap gap-6 justify-evenly">
        {['li', 'fb', 'li', 'fb', 'li'].map(n =>
          <p className="text-white text-xl">
            {n}
          </p>
        )}
        </div>

        <div className="flex flex-wrap gap-6 justify-evenly">
          {['li', 'fb', 'li', 'fb'].map(n =>
            <p className="text-white text-xl">
              {n}
            </p>
          )}
        </div>
      </SectionWrapper>
      <SeeProgramsSection />
    </main>
  );
}

export function LegacyOfCourageSection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
        A Legacy Of Courage 
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6 relative">
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            <span className="text-[#31C57D] font-bold">Our story is more than 46 years</span> in the making and we’re continuing
            to set the bar high when it comes to fitness innovation. Even if
            you’re just starting the first chapter of your personal fitness
            journey!
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            <span className="text-[#31C57D] font-bold">In the “golden days”</span>, there weren’t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and <span className="text-[#31C57D] font-bold">toured with celebrities!</span>
          </p>
          <button className="w-fit border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Meet the rest
          </button>
        </div>
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
      </div>
    </SectionWrapper>
  );
}



export function FoundersSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
          Meet The Founders
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founders.map((founderData) => (
            <FounderCard key={founderData.id} founder={founderData} />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

export const FounderCard = ({ founder }: { founder: FounderType }) => {
  return (
    <Link href={`/about/${""}`}>
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
        <div className="absolute top-0 bottom-0 right-0 p-4 transition duration-300 ease-in-out bg-black/10 text-white opacity-0 group-hover:opacity-100">
          <div className="flex flex-col gap-8 pt-4">
            <span>
              <Image src={ShareIcon} width={20} height={20} alt="share_icon" />
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 hover:text:[#1D7349] duration-100">
              fb
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 hover:text:[#1D7349] duration-100">
              li
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 hover:text:[#1D7349] duration-100">
              in
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 pt-3 font-semibold">
          {founder.name}
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          {founder.proffesion}
        </p>
      </div>
    </Link>
  );
};

export type FounderType = {
  id: number;
  name: string;
  proffesion: string;
};

export const founders: FounderType[] = [
  {
    id: 1,
    name: "James Gordon",
    proffesion: "Founder and CTO",
  },
  {
    id: 2,
    name: "Bruce Wayne",
    proffesion: "Founder and CEO",
  },
  {
    id: 3,
    name: "Rajesh Mayour",
    proffesion: "Founder and Operations Managers",
  },
];

export const LongParagraphsSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-8 px-4 md:px-20 lg:px-32 xl:px-56 2xl:px-72 pt-32">
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
          Something of placeholder
        </h1>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          <span className="text-[#31C57D] font-bold">As we were building</span> our platform, we were looking closely at how
          private healthcare providers get feedback, and what that means for
          their businesses.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          Here`s what most private clinics do: <span className="text-[#31C57D] font-bold">they use pen-and-paper surveys</span>,
          emails, and forms on their websites. But there`s a problem with these
          methods.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          <span className="text-[#31C57D] font-bold">These methods are difficult</span> to analyze, and if patients aren`t
          satisfied, clinics can`t fix things quickly. By the time they analyze
          the survey, the patient is already considering the competition.
        </p>
        <div className="flex flex-col items-center gap-6 px-6 py-6 bg-gradient-to-r from-[#101010] to-[#292929] rounded-lg">
          <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 font-bold">
            <span className="text-[#31C57D]">Enrage {" "}</span>
            your inner beast and {" "}
            <span className="text-[#31C57D]">unleash {" "}</span>
            it today!
          </p>
          <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Meet the rest
          </button>
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          Also, people don`t really like doing surveys. Only about <span className="text-[#31C57D] font-bold">2–4%</span> of
          people actually finish them.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          The result? Private clinics are faced with a lot of guesswork when
          making business decisions.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          We knew <span className="text-[#31C57D] font-bold">there had to be a better way.</span>
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          <span className="text-[#31C57D] font-bold">Our team has worked</span> on setting up feedback systems in multinational
          companies. Combining our backgrounds in data science and psychology,
          we started helping the largest private clinics in Croatia to collect
          feedback using technology.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          That`s how InsiderCX was born.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          Automating clinic operations and ensuring patient happiness became <span className="text-[#31C57D] font-bold">
            our
            daily mission.
          </span>
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          Seeing the impact it had on our first clients, we decided to make it
          accessible to private clinics that want to transform their businesses.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
          Our mission is simple: <span className="text-[#31C57D] font-bold">empower clinics to focus</span> on patient care, while
          we handle the rest.
        </p>
        <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-center text-white leading-7 px-6 font-bold">
          <span className="text-[#31C57D]">Enrage</span> your inner beast and <span className="text-[#31C57D]">unleash</span> it today!
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
            Seeing the impact it had on our first clients, we decided to make it
            accessible to private clinics that want to transform their businesses.
          </p>
          <button className="w-full border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Explore Locations
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export const MissionAndValuesSection = () => {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 ">
        <div className="flex flex-col gap-4">
          <p className="w-full pt-4 text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
            Our Core Values
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quo odio corrupti sint deleniti similique perspiciatis
            reiciendis nulla aliquam placeat placeat placeat placeat placeat
            placeat.
          </p>
          <div className="normal-case text-md md:text-lg text-gray-300 leading-2 font-semibold">
            <p><span className="text-[#31C57D]">Effective.</span> Passion-driven. <span className="text-[#31C57D]">Committed.</span></p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="w-full pt-4 text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
            Our Vision
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quo odio corrupti sint deleniti similique perspiciatis
            reiciendis nulla aliquam placeat placeat placeat placeat placeat
            placeat.
          </p>
          <div className="normal-case text-md md:text-lg text-gray-300 leading-2 font-semibold">
            <p><span className="text-[#31C57D]">Effective.</span> Passion-driven. <span className="text-[#31C57D]">Committed.</span></p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export const TestimonialsSection = () => {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
        See What Other Think Of Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 md:pt-8">
        {testimonials.slice(0, 2).map((testimonial) => (
          <SuccessStoryCard
            key={testimonial.id}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            date={testimonial.date}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export type StatType = {
  id: number;
  statValue: number;
  statDescription: string;
};

export const stats = [
  {
    id: 1,
    statValue: "17.000+",
    statDescription: "Gyms Open In United States",
  },
  {
    id: 2,
    statValue: "85%",
    statDescription: "Gyms Open In United States",
  },
  {
    id: 3,
    statValue: "375+",
    statDescription: "Gyms Open In United States",
  },
];

const StatCard = ({ stat }: { stat: StatType }) => {
  return (
    <li className="col-span-1 md:col-span-1 lg:col-span-1">
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={TestImage}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full opacity-50"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#31C57D] to-[#161616] opacity-30"></div>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl tracking-normal text-start text-white leading-7 font-semibold">
            {stat.statValue}
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal pt-4">
            {stat.statDescription}
          </p>
        </div>
      </div>
    </li>
  );
};

const GalleryCard = () => {
  return (
    <li className="col-span-1 md:col-span-1 lg:col-span-1">
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={TestImage}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full opacity-50"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#31C57D] to-[#161616] opacity-30"></div>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl tracking-normal text-start text-white leading-7 font-semibold">
            Gallery
          </p>
        </div>
      </div>
    </li>
  );
};

// ovo uzor - https://www.insidercx.com/about-us
export const SeeProgramsSection = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 px-6 py-6 bg-gradient-to-r from-[#101010] to-[#292929] rounded-lg">
        <div className="flex flex-col items-center gap-6">
          <h2 className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
            Check our programs — you won`t regret that decision for sure!
          </h2>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal pt-6">
          Analyze patient feedback. Optimize workflows to deliver a superb patient experience. Stop your never-ending battle with patient retention.
          </p>
        </div>
        <button className="w-fit border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          See Programs
        </button>
      </div>
    </SectionWrapper>
  );
};

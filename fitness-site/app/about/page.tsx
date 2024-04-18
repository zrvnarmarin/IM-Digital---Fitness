import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from "../../public/CardioBlastImage.jpg";
import ShareIcon from "../../public/share-arrow-svgrepo-com.png";
import { SuccessStoryCard } from "../(home-sections)/SuccessStories";
import { testimonials } from "../data";
import { QuotationMark, TestIcon, TestIconTwo } from "@/public/Icons";

// TO DO: osmisliti kako ukorporirati galeriju slika (tipa kao na hacksmithu)

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#000000]">
      <HeroSection />
      <FoundersSection />
      <SecondSection />
      <GallerySection />
      <LegacyOfCourageSection />
      <MissionAndValuesSection />
      <StatsSection />
      <LegacyOfCourageSectionTwo />
      <LongParagraphsSection />
      <TestimonialCardsSection />
      <SeeProgramsSection />
    </main>
  );
}

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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-2">
        <p className="uppercase text-md md:text-md text-gray-300 leading-2 font-normal pb-4">
          Brutalize Your Strength
        </p>
        <h1 className="text-xl md:text-4xl lg:text-5xl tracking-normal leading-7 font-semibold">
          About Us
        </h1>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal"></p>
        <div className="mt-6">
          <Link
            href={"/contact"}
            className="bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SecondSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-3 pb-8">
        <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
          Timeline
        </p>
        <h2 className="h2">Embark on our journey of strength</h2>
      </div>
      <div className="flex flex-col gap-16 pb-4">
        {secondSectionArray.map((card, index) => (
          <SecondSectionCard card={card} key={card.id} index={index} />
        ))}
      </div>
      <div className="flex w-full items-center justify-center pt-6">
        <button className="w-fit btn-primary">Read More Stories</button>
      </div>
    </SectionWrapper>
  );
}

export type CardType = {
  year: number;
  title: string;
  description: string;
};

const secondSectionArray = [
  {
    id: 1,
    year: 2012,
    title: "Our Gym Takes Shape",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam.`,
  },
  {
    id: 2,
    year: 2016,
    title: "Mainstream Transformation",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam.`,
  },
  {
    id: 3,
    year: 2020,
    title: "Multi-City Expansion",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam.`,
  },
  {
    id: 4,
    year: 2023,
    title: "World Recognition And Success",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam.`,
  },
  {
    id: 5,
    year: 2024,
    title: "Continuous Growth",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam.`,
  },
];

export const SecondSectionCard = ({
  card,
  index,
}: {
  card: CardType;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <section className="flex flex-col gap-2 md:gap-0 md:flex-row">
      {/* <p className="text-white">{index}</p> */}

      <div
        className={`relative flex flex-row items-center gap-20 w-1/2 ${isEven ? "order-2 justify-start" : "order-0 justify-end"}`}
      >
        <div className={`${isEven ? "order-1" : "order-0"} z-30 flex flex-row`}>
          <p className="order-0 w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
            <span className="bg-gradient-to-r bg-clip-text text-transparent pr-2 from-[#1D7349] to-[#31C57D] italic text-7xl tracking-normal text-start font-semibold">
              {card.year}
            </span>{" "}
          </p>
        </div>
        <div className="flex items-center h-full w-[1px] bg-[#31C57D]"></div>
      </div>

      <div className={`flex flex-col gap-2 w-1/2 ${!isEven ? "pl-8" : "pr-8"}`}>
        <div className="w-full shadow-lg shadow-[#141414] group flex flex-row gap-4 py-6 px-16 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
          <div className="flex flex-col gap-2">
            <p className="w-full h3">{card.title}</p>
            <p className="text-normal">{card.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export function LegacyOfCourageSection() {
  return (
    <SectionWrapper>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <h2 className="h2">Consitency is the key</h2>
            <p className="text-normal">
              In the “golden days”, there weren’t many options for working out.
              But Joe Gold, our founder, had a passion for bodybuilding. He
              found success as a professional “muscleman” and toured with
              celebrities! But Joe Gold, our founder, had a passion for
              bodybuilding. He found success as a professional “muscleman”
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="flex items-center gap-4">
              <TestIcon height="40px" width="40px" iconFill="#31C57D" />
              <p className="text-md md:text-md text-gray-300 leading-2 uppercase font-semibold">
                Mind Over Body
              </p>
            </div>
            <div className="flex items-center gap-4">
              <TestIconTwo height="40px" width="40px" iconFill="#31C57D" />
              <p className="text-md md:text-md text-gray-300 leading-2 uppercase font-semibold">
                Healing Factor Benefits
              </p>
            </div>
          </div>

          <button className="mt-8 w-fit btn-primary">
            Discover Our Programs
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

export function GallerySection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
            See it for yourself
          </h1>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2">
            Browse through our gallery and see what is awaiting you in our area
          </p>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
            &larr;
          </button>
          {/* <div className="flex flex-row justify-center gap-2">
              <span className="w-8 h-1 rounded-md bg-[#31C57D]" />
              <span className="w-8 h-1 rounded-md bg-[#31C57D]" />
              <span className="w-8 h-1 rounded-md bg-[#31C57D]" />
            </div> */}
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">
            &rarr;
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-6 items-center">
        {/* Gallery carousel*/}
        <div className="grid grid-cols-4 gap-6">
          <Image
            priority
            src={TestImage}
            alt="alt"
            height={400}
            width={400}
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-md"
          />
          <Image
            priority
            src={TestImage}
            alt="alt"
            height={400}
            width={400}
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-md"
          />
          <Image
            priority
            src={TestImage}
            alt="alt"
            height={400}
            width={400}
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-md"
          />
          <Image
            priority
            src={TestImage}
            alt="alt"
            height={400}
            width={400}
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1 cursor-pointer scale-75">
          <p className="w-full  text-gray-500 opacity-50 text-2xl tracking-normal text-center font-semibold">
            People
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 text-center opacity-50">
            10/23
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="w-full  text-gray-200 text-2xl tracking-normal text-start font-semibold">
            Gym
          </p>
          <p className="normal-case text-md md:text-md text-gray-300 leading-2 text-center">
            10/23
          </p>
        </div>
        <div className="flex flex-col gap-1 scale-75 cursor-pointer">
          <p className="w-full opacity-50  text-gray-500 text-2xl tracking-normal text-center font-semibold">
            Somehing
          </p>
          <p className="normal-case opacity-50 text-md md:text-md text-gray-300 leading-2 text-center">
            10/23
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function LegacyOfCourageSectionTwo() {
  return (
    <SectionWrapper>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
              Assets
            </p>
            <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
              Best Quality Facilities And Program
            </h1>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2">
              In the “golden days”, there weren’t many options for working out.
              But Joe Gold, our founder, had a passion for bodybuilding. He
              found success as a professional “muscleman” and toured with
              celebrities! But Joe Gold, our founder, had a passion for
              bodybuilding. He found success as a professional “muscleman”
            </p>
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
        <div className="flex flex-col gap-3">
          <h2 className="h2">Meet The Founders</h2>
          <p className="text-subheading">
            We are the founders ofthis wonderful fitness creation
          </p>
        </div>
        <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <div className="flex flex-col items-start gap-1">
        <h2 className="w-full h3 pt-4">{founder.name}</h2>
        <p className="text-normal">{founder.proffesion}</p>
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
  {
    id: 4,
    name: "Joshua Erlington",
    proffesion: "Finances",
  },
];

export const LongParagraphsSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-8 px-64">
        <div className="flex flex-row justify-start gap-3">
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 tracking-wider font-normal">
          <span className="text-[#31C57D] font-medium">
            As we were building
          </span>{" "}
          our platform, we were looking closely at how private healthcare
          providers get feedback, and what that means for <br /> <br />
          their businesses. Here`s what most private clinics do:{" "}
          <span className="text-[#31C57D] font-medium">
            they use pen-and-paper surveys
          </span>
          , emails, and forms on their websites. But there`s a problem with
          these methods. These methods are difficult to analyze, and if patients
          aren`t satisfied, clinics can`t fix things quickly. By the time they
          analyze the survey, the patient is already considering the
          competition.
        </p>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 tracking-wider font-normal">
          <span className="text-[#31C57D] font-medium">
            As we were building
          </span>{" "}
          our platform, we were looking closely at how private healthcare
          providers get feedback, and what that means for <br /> <br />
          their businesses. Here`s what most private clinics do:{" "}
          <span className="text-[#31C57D] font-medium">
            they use pen-and-paper surveys
          </span>
          , emails, and forms on their websites. But there`s a problem with
          these methods. These methods are difficult to analyze, and if patients
          aren`t satisfied, clinics can`t fix things quickly. By the time they
          analyze the survey, the patient is already considering the
          competition.
        </p>
        {/* <div className="flex items-center justify-center">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Read More Stories
          </button>
        </div> */}
        <div className="flex flex-row justify-end gap-3">
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
          <span className="w-2.5  h-6 bg-[#31C57D]" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export const MissionAndValuesSection = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-12">
        <div className="flex flex-col  gap-6">
          <div className="flex flex-col items-center justify-center">
            <h2 className="w-full h2 text-start md:text-center">
              Our Core Values
            </h2>
            <p className="text-normal pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quo odio corrupti sint deleniti similique
              perspiciatis reiciendis nulla aliquam placeat placeat placeat
              placeat placeat placeat.
            </p>
          </div>
          <div className="normal-case text-md text-center md:text-lg text-gray-300 leading-2 font-semibold">
            <p className="flex flex-col items-center gap-24 w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#1D7349] to-[#31C57D] italic text-7xl tracking-normal text-start font-semibold">
                Effective. <br /> Driven. <br /> Great.
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col  gap-6">
          <div className="flex flex-col items-center justify-center">
            <p className="h2">Our Mission</p>
            <p className="text-normal pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quo odio corrupti sint deleniti similique
              perspiciatis reiciendis nulla aliquam placeat placeat placeat
              placeat placeat placeat.
            </p>
          </div>
          <div className="normal-case text-md text-center md:text-lg text-gray-300 leading-2 font-semibold">
            <p className="flex flex-col items-center gap-24 w-full text-xl md:text-xl lg:text-3xl tracking-normal text-white leading-7 font-semibold">
              <span className="text-end bg-gradient-to-r bg-clip-text text-transparent from-[#1D7349] to-[#31C57D] italic text-7xl tracking-normal font-semibold">
                Effective. <br /> Driven. <br /> Great.
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export const StatsSection = () => {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </ul>
    </SectionWrapper>
  );
};

export const TestimonialsSection = () => {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
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
    <li className="col-span-1 md:col-span-1 lg:col-span-1 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl tracking-normal text-start text-white leading-7 font-semibold">
            {stat.statValue}
          </p>
          <p className="normal-case text-right text-md md:text-md text-gray-300 leading-2 font-normal">
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

export function TestimonialCardsSection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
        Read Our Success Stories
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.slice(0, 2).map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </ul>
      <div className="flex flex-row justify-center gap-4">
        <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
        <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
        <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
      </div>
    </SectionWrapper>
  );
}

export type TestimonialType = {
  id: number;
  testimonial: string;
  name: string;
  date: string;
};

export function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  return (
    <li className="p-8 col-span-1 md:col-span-1 lg:col-span-1 shadow-lg rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]">
      <div className="flex flex-col gap-6">
        <div className="w-full flex justify-start">
          <QuotationMark />
        </div>
        <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
          {testimonial.date}
        </p>
        <p className="text-normal">{testimonial.testimonial}</p>
        <div className="flex gap-4 items-center">
          <div className="flex items-center w-12 h-12 rounded-full">
            <Image
              src={TestImage}
              width={100}
              height={100}
              alt="Community Image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="w-full h3">{testimonial.name}</p>
        </div>
      </div>
    </li>
  );
}

export function SeeProgramsSection() {
  return (
    <SectionWrapper>
      <div className="relative w-full h-64 flex flex-row justify-between rounded-lg shadow-lg">
        <Image
          src={TestImage}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full opacity-50"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#31C57D] to-[#161616] opacity-30 rounded-lg"></div>
        <div className="w-full flex flex-row gap-36 items-center justify-between z-30 px-12 py-6">
          <div className="flex flex-col">
            <p className="text-2xl md:text-3xl lg:text-4xl tracking-normal text-start text-white leading-7 font-semibold">
              Start Your Free 7-Day Trial Program Here
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal pt-4">
              Analyze patient feedback. Optimize workflows to deliver a superb
              patient experience. Stop your never-ending battle with patient
              retention.
            </p>
          </div>
          <div className="w-1/3">
            <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

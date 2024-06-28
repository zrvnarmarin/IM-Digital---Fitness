import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from "../../public/CardioBlastImage.jpg";
import ShareIcon from "../../public/share-arrow-svgrepo-com.png";
import { SuccessStoryCard } from "../(home-sections)/SuccessStories";
import { testimonials } from "../data";
import { ParalelogramsSection } from "../components/ParalelogramsSection";
import { NewsletterSectionEmbelishment } from "../(home-sections)/SignUpForAnEmail";
import { RightArrow } from "../(home-sections)/OurTeam";

// TO DO: osmisliti kako ukorporirati galeriju slika (tipa kao na hacksmithu)

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#000000]">
      <HeroSection />
      {/* <FoundersSection /> */}
      <GallerySection />
      <SecondSection />
      <StatsSection />
      <LegacyOfCourageSection />
      <LegacyOfCourageSectionTwo />
      <TestimonialCardsSection />
      <SeeProgramsSection />
    </main>
  );
}

export function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-row gap-4 items-center pt-4 md:pt-8 lg:pt-[96px]">
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Blur background */}
          <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>
          <p className="text-above-heading z-20">Get to know us</p>
          <h1 className="w-full text-white text-[84px]  text-center font-medium z-20">
            About Us
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
      <h3 className="w-full h3 text-xl text-center">Lorem Ipsum Dolor Sit</h3>
      <p className="text-normal text-center md:px-48">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        necessitatibus corrupti quaerat. Eveniet odio hic, blanditiis quasi,
        culpa voluptatibus nam, provident exercitationem incidunt quam expedita
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
        necessitatibus corrupti quaerat. Eveniet odio hic, blanditiis quasi,
        culpa voluptatibus nam, provident exercitationem incidunt quam expedita
      </p>
    </SectionWrapper>
  );
}

export function SecondSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-3 pb-4 lg:pb-8">
        <p className="text-above-heading">Timeline</p>
        <h2 className="h2">Embark on our journey of strength</h2>
      </div>
      <div className="hidden lg:flex flex-col gap-16 pb-4">
        {secondSectionArray.map((card, index) => (
          <SecondSectionCard card={card} key={card.id} index={index} />
        ))}
      </div>

      {/* Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
        {/* Card */}
        {secondSectionArray.map((card) => (
          <div
            key={card.id}
            className="w-full shadow-lg shadow-[#141414] group flex flex-col gap-4 py-4 px-8 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border-y border-[#292929]"
          >
            <p className="order-0 w-full text-lg md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
              <span className="bg-gradient-to-r bg-clip-text text-transparent pr-2 from-[#1D7349] to-[#31C57D] italic text-5xl sm:text-6xl tracking-normal text-center font-semibold">
                {card.year}
              </span>{" "}
            </p>
            <h3 className="h3 text-start">{card.title}</h3>
            <p className="text-normal text-start">{card.description}</p>
          </div>
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
  {
    id: 6,
    year: 2025,
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

//ovo je mission and values section
export function LegacyOfCourageSection() {
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
        </div>
      </div>
    </SectionWrapper>
  );
}

export function GallerySection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3 pb-4 lg:pb-8">
          <p className="text-above-heading">Gallery</p>
          <h2 className="h2">See it for yourself</h2>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          <button className="rotate-180">
            <RightArrow />
          </button>
          <button className="">
            <RightArrow />
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
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-12">
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
      <div className="flex flex-col gap-8">
        <ParalelogramsSection />
        <h2 className="h2">Lorem Ipsum dolor sit</h2>
        <p className="text-normal">
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
        <p className="text-normal">
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
        <div className="flex items-center justify-end">
          <ParalelogramsSection />
        </div>
      </div>
    </SectionWrapper>
  );
};

export const MissionAndValuesSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col  gap-6">
          <div className="flex flex-col items-center justify-center">
            <p className="h2">Our Mission</p>
            <p className="text-normal pt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quo odio corrupti sint deleniti similique
              perspiciatis reiciendis nulla aliquam placeat placeat placeat
              placeat placeat placeat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur, quo odio corrupti sint deleniti
              similique perspiciatis reiciendis nulla aliquam placeat placeat
              placeat placeat placeat placeat.
            </p>
          </div>
        </div>

        <div className="normal-case text-md text-start md:text-lg text-gray-300 leading-2 font-semibold">
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#1D7349] to-[#31C57D] italic text-7xl tracking-normal text-start font-semibold">
            Effective. Driven. Great.
          </span>{" "}
        </div>
      </div>
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

export function StatsSection() {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 ">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </ul>
    </SectionWrapper>
  );
}

export const StatCard = ({ stat }: { stat: StatType }) => {
  return (
    <li className="bg-gradient-to-r from-[#090a0c] to-[#212121] border-[0.5px] border-[#111316] py-4 px-2 xs:py-6 xs:px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-14 lg:px-12 rounded-lg shadow-lg">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <p className="text-3xl xs:text-5xl sm:text-4xl md:text-5xl xl:text-6xl tracking-normal text-start text-white leading-7 font-semibold">
          {stat.statValue}
        </p>
        <p className="text-normal text-center">{stat.statDescription}</p>
      </div>
    </li>
  );
};

export function TestimonialCardsSection() {
  return (
    <SectionWrapper>
      <h2 className="h2">Read Our Success Stories</h2>
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
    <li className="p-8 col-span-1 md:col-span-1 lg:col-span-1 shadow-lg rounded-lg bg-gradient-to-r from-[#090a0c] to-[#191919] border-[0.5px] border-[#111316]">
      <div className="flex flex-col ">
        <div className="w-full flex justify-start">
          <QuotationMarkIcon />
        </div>

        <p className="text-normal pt-2 ">{testimonial.testimonial}</p>

        <div className="flex gap-4 items-center pt-4 ">
          <div className="flex items-center w-12 h-12 rounded-full border-[0.5px] border-[#24D17C]">
            <Image
              src={TestImage}
              width={100}
              height={100}
              alt="Community Image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-lg text-white">{testimonial.name}</p>
        </div>
      </div>
    </li>
  );
}

export function SeeProgramsSection() {
  return (
    <SectionWrapper>
      <div className="relative">
        {/* Blur background */}
        <div className="w-full h-full absolute inset-0 bg-[#061d12] z-10 blur-[128px]"></div>

        {/* Call to action */}
        <div className="relative z-20 py-16 px-24 flex items-center justify-between gap-16 bg-gradient-to-r from-[#161616] to-[#000000] border-[0.5px] border-[#111316] p-5 rounded-lg overflow-hidden">
          {/* Image */}
          <div className="flex items-center justify-center absolute top-0 bottom-0 -left-12 z-0">
            <NewsletterSectionEmbelishment />
          </div>
          {/* Content */}
          <div className="flex flex-col z-20 gap-6">
            <h2 className="h2 text-start normal-case">
              Embark on the path of the strenght!
            </h2>
            <div>
              <p className="text-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                beatae <br /> itaque voluptas voluptates distinctio at aliquam
                nihil quidem tempora <br /> magni tempora magni
              </p>
            </div>
          </div>
          <div className="z-0 flex flex-col justify-center items-center gap-6 mt-4">
            <div className="w-full flex items-center justify-center">
              <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-8 cursor-pointer text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const QuotationMarkIcon = () => {
  return (
    <svg
      fill="#24D17C"
      viewBox="0 0 8 8"
      width="22"
      height="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z"
          transform="translate(0 1)"
        ></path>
      </g>
    </svg>
  );
};

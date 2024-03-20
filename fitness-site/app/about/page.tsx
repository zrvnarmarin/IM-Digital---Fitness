import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from "../../public/CardioBlastImage.jpg";
import ShareIcon from "../../public/share-arrow-svgrepo-com.png";
import { SuccessStoryCard } from "../(home-sections)/SuccessStories";
import { testimonials } from "../data";
import { DumbellIcon } from "@/public/Icons";

// TO DO: osmisliti kako ukorporirati galeriju slika (tipa kao na hacksmithu)

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#000000]">
      <HeroSection />
      <SecondSection />
      {/* <FoundersSection /> */}
      <MissionAndValuesSection />
      <LongParagraphsSection />
      <LegacyOfCourageSection />
      <TestimonialsSection />
      <SeeProgramsSection />
    </main>
  );
}

export function HeroSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="w-full text-xl md:text-xl lg:text-5xl tracking-normal text-end text-white leading-7 font-semibold">
            Our Evolutionary Odissey
          </h1>
          <p className="normal-case text-sm text-gray-300 leading-2 font-normal text-end">
            At Aeon Olympia Strength Gym, we pride ourselves on providing a world-class fitness facility
            equiped with a range of amenities to enhance your workout experience. Our goal is to create a
            comfortable and motivating environment where you can focus on your fitness journey. Our goal is to create a
            comfortable and motivating environment where you can focus on your fitness journey.
          </p>
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
  )
}

export function SecondSection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase italic text-white text-2xl tracking-normal text-center font-semibold">
        History
      </h1>
      <p className="normal-case text-sm text-gray-300 text-center leading-2 font-normal">
        Embark on a journey through our very hubmle beginnings, to the new heights as of today
      </p>
      {secondSectionArray.map((card, index) =>
        <SecondSectionCard card={card} key={card.id} index={index} />  
      )}
    </SectionWrapper>
  )
}

export type CardType = {
  year: number;
  title: string;
  description: string;
}

const secondSectionArray = [
  {
    id: 1,
    year: 2012,
    title: 'Lorem Ipsum Dolor Sit',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam? Quae atque sed distinctio.`
  },
  {
    id: 2,
    year: 2016,
    title: 'Lorem Ipsum Dolor Sit',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam? Quae atque sed distinctio.`
  },
  {
    id: 3,
    year: 2020,
    title: 'Lorem Ipsum Dolor Sit',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam? Quae atque sed distinctio.`
  },
  {
    id: 4,
    year: 2023,
    title: 'Lorem Ipsum Dolor Sit',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eum quod voluptates fuga suscipit quas dolorem saepe voluptatibus explicabo vero consequatur magnam ratione inventore aspernatur numquam? Quae atque sed distinctio.`
  }
]

export const SecondSectionCard = ({ card, index } : { card: CardType, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="flex flex-row">
      {/* <p className="text-white">{index}</p> */}

      <div className={`relative flex flex-row items-center gap-16 w-1/2 ${isEven ? 'order-2 justify-start' : 'order-0 justify-end'}`}>
        <div className={`${isEven ? 'order-1' : 'order-0'} z-30 flex flex-row`}>
          <p className="order-0 w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
            <span className="text-[#31C57D]">{card.year}</span>{" "}
          </p>
        </div>
        <div className="flex items-center h-full w-[1px] bg-[#31C57D]"></div>
      </div>
      

      <div className={`flex flex-col gap-2 w-1/2 ${!isEven ? 'pl-16' : 'pr-16'}`}>
        <div className="w-full group flex flex-row gap-4 py-10 px-10 rounded-lg bg-gradient-to-r from-[#101010] to-[#191919] border border-[#292929]">
          <div className="flex flex-col gap-6">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-gray-100 leading-7 font-semibold">
              {card.title}
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              {card.description}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export function LegacyOfCourageSection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
        Carrying the journey of strength for decades
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6 relative">
          <p className="normal-case text-sm text-gray-300 leading-2 font-normal">
            <span className="text-[#31C57D] font-semibold">Our story is more than 46 years</span> in the making and we’re continuing
            to set the bar high when it comes to fitness innovation. Even if
            you’re just starting the first chapter of your personal fitness
            journey!
          </p>
          <p className="normal-case text-sm text-gray-300 leading-2 font-normal">
            <span className="text-[#31C57D] font-semibold">In the “golden days”</span>, there weren’t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and <span className="text-[#31C57D] font-semibold">toured with celebrities!</span>
          </p>
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
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
      <div className="flex flex-col gap-8 px-4 md:px-20 lg:px-32 xl:px-56 2xl:px-72">
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full text-center">
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
      </div>
    </SectionWrapper>
  );
};

export const MissionAndValuesSection = () => {
  return (
    <SectionWrapper>
       <h1 className="uppercase italic text-white text-2xl tracking-normal text-start font-semibold">
        History
      </h1>
      <p className="normal-case text-sm text-gray-300 text-start leading-2 font-normal">
        Embark on a journey through our very hubmle beginnings, to the new heights as of today
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

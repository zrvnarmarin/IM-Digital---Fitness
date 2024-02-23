import React from "react";
import Image from "next/image";
import HeroSection from "./(about-sections)/HeroSection";
import { RightIcon } from "@/public/Icons";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from "../../public/AboutUsHeroImage.avif";
import ShareIcon from "../../public/share-arrow-svgrepo-com.png";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <HeroSection />
      {/* <LegacyOfStrengthSection /> */}
      <LegacyOfCourageSection />
      <FoundersSection />
      <LongParagraphsSection />
      <MissionAndValuesSection />
    </main>
  );
}

// export function LegacyOfStrengthSection() {
//   return (
//     <section className="px-6 md:px-8 lg:px-24 pl-8 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
//       {/* 2 grid columns */}
//       <div className=" text-white col-span-2">
//         <h1 className="uppercase font-normal text-white text-2xl tracking-wider">
//           A Legacy Of Strength
//         </h1>{" "}
//         <br />
//         <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
//           In the early 1960’s, one man set out on a mission to change the world
//           by improving people’s lives through fitness- and that he did. What
//           started out as a small, single location in Los Angeles, California,
//           has exploded to become an iconic, globally recognized gym brand that
//           has fueled the modern fitness industry for decades. During this time,
//           World Gym has produced some of the most legendary and iconic
//           bodybuilders; has shaped and sculpted the Hollywood elite; has
//           inspired millions of workout enthusiasts to lead an active lifestyle
//           and transform their bodies; and it has welcomed all who were serious
//           about improving their health and fitness.
//         </p>{" "}
//         <br />
//         <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
//           Today, World Gym is an iconic, globally recognized gym brand with over
//           four decades of experience helping people get fit, feel good, and live
//           better. A serious gym for serious workouts, our sprawling gym floor
//           offers the best in free weights, cardio equipment and strength
//           training machines. We also offer indoor turf training areas, amazing
//           group fitness classes, personal training, wellness and recovery
//           options and more. Please check your local World Gym for a complete
//           list of amenities.
//         </p>{" "}
//         <br />
//         <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
//           Our story is more than 46 years in the making and we’re continuing to
//           set the bar high when it comes to fitness innovation. Even if you’re
//           just starting the first chapter of your personal fitness journey, our
//           legendary path to greatness can be an inspiration to you, like it has
//           to so many others. Join us!{" "}
//         </p>{" "}
//         <br />
//         <h2 className="uppercase font-normal text-white text-2xl tracking-wider">
//           1960s | Before World Gym
//         </h2>
//         <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
//           In the “golden days”, there weren’t many options for working out. But
//           Joe Gold, our founder, had a passion for bodybuilding. He found
//           success as a professional “muscleman” and toured with celebrities. Out
//           of necessity, he built much of his own training equipment. He would go
//           on to launch an international fitness brand while becoming known as
//           the father of bodybuilding.
//         </p>{" "}
//         <br />
//         <h2 className="uppercase font-normal text-white text-2xl tracking-wider">
//           1970s | Muscle Beach
//         </h2>
//         <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
//           World Gym and the modern fitness revolution can be traced back to the
//           glory days of Muscle Beach in Los Angeles, California. In 1976, Joe
//           Gold opened a small gym filled with custom-made equipment. Before
//           long, World Gym was the fitness destination for celebrity bodybuilding
//           greats such as Arnold Schwarzenegger, Lou Ferrigno, and Dave Draper.
//         </p>{" "}
//         <br />
//         <h2 className="uppercase font-normal text-white text-2xl tracking-wider">
//           1980s | Muscle Bench
//         </h2>
//         <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
//           1970s | Muscle Beach World Gym and the modern fitness revolution can
//           be traced back to the glory days of Muscle Beach in Los Angeles,
//           California. In 1976, Joe Gold opened a small gym filled with
//           custom-made equipment. Before long, World Gym was the fitness
//           destination for celebrity bodybuilding greats such as Arnold
//           Schwarzenegger, Lou Ferrigno, and Dave Draper.
//         </p>{" "}
//         <br />
//       </div>

//       <div className="col-span-1">
//         <div className="col-span-1 sticky top-48">
//           <AboutCard />
//         </div>
//       </div>
//       {/* End */}
//     </section>
//   );
// }

export function LegacyOfCourageSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
            A Legacy Of Courage That Redefined The Training Methods
          </h1>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            Our story is more than 46 years in the making and we’re continuing
            to set the bar high when it comes to fitness innovation. Even if
            you’re just starting the first chapter of your personal fitness
            journey!
          </p>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            In the “golden days”, there weren’t many options for working out.
            But Joe Gold, our founder, had a passion for bodybuilding. He found
            success as a professional “muscleman” and toured with celebrities!
          </p>
          <button className="w-fit border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
            See The Gallery
          </button>
        </div>
        <Image
          src={TestImage}
          alt="program_image"
          width={0}
          height={0}
          className="rounded-t-md"
        />
      </div>
    </SectionWrapper>
  );
}

export function FoundersSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <h1 className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
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
        <p className="font-semibold text-gray-100 text-lg md:text-xl lg:text-2xl tracking-wide pt-4">
          {founder.name}
        </p>
        <p className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
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
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          As we were building our platform, we were looking closely at how
          private healthcare providers get feedback, and what that means for
          their businesses.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          Here`s what most private clinics do: they use pen-and-paper surveys,
          emails, and forms on their websites. But there`s a problem with these
          methods.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          These methods are difficult to analyze, and if patients aren`t
          satisfied, clinics can`t fix things quickly. By the time they analyze
          the survey, the patient is already considering the competition.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          Also, people don`t really like doing surveys. Only about 2–4% of
          people actually finish them.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          The result? Private clinics are faced with a lot of guesswork when
          making business decisions.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          We knew there had to be a better way.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          Our team has worked on setting up feedback systems in multinational
          companies. Combining our backgrounds in data science and psychology,
          we started helping the largest private clinics in Croatia to collect
          feedback using technology.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          That`s how InsiderCX was born.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          Automating clinic operations and ensuring patient happiness became our
          daily mission.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          Seeing the impact it had on our first clients, we decided to make it
          accessible to private clinics that want to transform their businesses.
        </p>
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          Our mission is simple: empower clinics to focus on patient care, while
          we handle the rest.
        </p>
      </div>
    </SectionWrapper>
  );
};

export const MissionAndValuesSection = () => {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 lg:px-16">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 lg:px-16 pt-16">
        <div className="flex flex-col gap-4">
          <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
            Our Core Values
          </p>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quo odio corrupti sint deleniti similique perspiciatis
            reiciendis nulla aliquam placeat placeat placeat placeat placeat
            placeat.
          </p>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-semibold">
            <p>Effective. Passion-driven. Committed.</p>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold">
            Our Vision
          </p>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, quo odio corrupti sint deleniti similique perspiciatis
            reiciendis nulla aliquam placeat placeat placeat placeat placeat
            placeat.
          </p>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-semibold">
            <p>Effective. Passion-driven. Committed.</p>
          </p>
        </div>
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
    statValue: '17.000+',
    statDescription: "Gyms Open In United States",
  },
  {
    id: 2,
    statValue: '85%',
    statDescription: "Gyms Open In United States",
  },
  {
    id: 3,
    statValue: '375+',
    statDescription: "Gyms Open In United States",
  },
];

const StatCard = ({ stat } : { stat: StatType }) => {
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
        <div className="absolute inset-0 bg-[#1D7349] opacity-20"></div>
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl md:text-5xl lg:text-6xl tracking-normal text-start text-white leading-7 font-semibold">
            {stat.statValue}
          </p>
          <p className="font-semibold text-gray-100 text-md md:text-lg lg:text-xl tracking-wide pt-4">
            {stat.statDescription}
          </p>
        </div>
      </div>
    </li>
  );
};

// export function AboutCard() {
//   return (
//     <div className={`flex flex-row gap-8 rounded-xl p-8 bg-[#1F2125] relative`}>
//       <div className="flex flex-col gap-8">
//         <div className="flex gap-4 items-center">
//           <p className="text-md md:text-lg lg:text-3xl text-white leading-7 font-semibold">
//             About
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 px-4">
//           <Link
//             href="/about/photo-gallery"
//             className="flex flex-row gap-4 text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7"
//           >
//             <RightIcon strokeOne={"#1D7349"} strokeTwo={"#1D7349"} />
//             Photo Gallery
//           </Link>
//           <Link
//             href="/about/testimonials"
//             className="flex flex-row gap-4 text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7"
//           >
//             <RightIcon strokeOne={"#1D7349"} strokeTwo={"#1D7349"} />
//             Testimonials
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function DiscoverOurProgramsSection() {
//   return (
//     <div className="md:pt-32 flex justify-center">
//       <Link
//         href="/programs"
//         className="text-white uppercase hover:scale-105 text-lg lg:text-xl xl:text-2xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-1 rounded-full"
//       >
//         See Our Programs
//       </Link>
//     </div>
//   );
// }

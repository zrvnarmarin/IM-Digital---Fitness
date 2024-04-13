import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutUsHeroImage from "../../public/heroSectionImage.png";

// to do:see if on section element should be 2xl:px-32 or px-28

export default function HeroSection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-24 lg:pt-28 px-8 md:px-14 lg:px-20 xl:px-24 2xl:px-32 min-w-screen min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#000000] relative">
      <div className="flex flex-col gap-2 items-center justify-center z-20">
        <p className="w-full uppercase text-lg bg-gradient-to-r bg-clip-text text-transparent pr-2 from-[#1D7349] to-[#31C57D] tracking-widest text-start font-medium">
          Learn from the best
        </p>
        <h1 className="w-full h1">
          Transform your{" "}
          <span className="font-bold bg-gradient-to-r bg-clip-text text-transparent pr-2 from-[#1D7349] to-[#31C57D] capitalize">
            Fitness
          </span>{" "}
          Into Shape
        </h1>
        <p className="text-heading pt-8">
          Unleash your strength, transform your body, conquer your fitness
          journey, transform your body, conquer your fitness journey
        </p>
        <div className="w-full flex items-center justify-start gap-6 pt-6">
          <Link
            href={"/programs"}
            className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-xl py-3 px-7 cursor-pointer text-md text-white font-normal"
          >
            See Programs
          </Link>
          <Link
            href={"/contact"}
            className="w-fit bg-gradient-to-r border-2 border-[#31C57D] rounded-xl py-3 px-7 cursor-pointer text-md text-white font-normal"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
        <Image
          priority
          src={AboutUsHeroImage}
          alt="alt"
          fill={true}
          // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
          className="object-cover rounded-md"
        />
      </div>
    </section>
  );
}

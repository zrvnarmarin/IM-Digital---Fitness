import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutUsHeroImage from "../../public/heroSectionGymBaja.png";

export default function HeroSection() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-20 pb-4 px-8 md:px-14 lg:px-28 xl:px-42 2xl:px-48 min-w-screen min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#000000] relative">
      {/* <div
        className="absolute top-36 left-4 w-[32rem] h-64 bg-[#0f3d27] opacity-60 z-10 blur-3xl"
      /> */}
      <div className="flex flex-col gap-6 items-center justify-center z-20">
        <p className="w-full uppercase text-md md:text-lg text-gray-300 leading-2 text-start font-normal">
          Gym areas
        </p>
        <h1 className="w-full text-xl md:text-xl lg:text-7xl tracking-normal text-start text-white leading-7 font-semibold">
          We create simple and effective plans 
        </h1>
        <p className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae aliquid deserunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-full flex items-center justify-start">
          <Link 
            href={'/contact'} 
            className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
        <div
          className="absolute bottom-4 left-0 right-0 w-[32rem] h-24 bg-[#000000] opacity-100 z-10 blur-lg"
        />
        <Image
          priority
          src={AboutUsHeroImage}
          alt="alt"
          fill={true}
          // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
}

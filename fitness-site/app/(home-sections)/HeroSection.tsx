import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar"; // Import the Navbar component
import AboutUsHeroImage from "../../public/anastase-maragos-9dzWZQWZMdE-unsplash.jpg";

export default function HeroSection() {
  return (
    <div>
      <>
        {/* Include the Navbar component */}
        {/* <Navbar /> */}
        
        <div className="relative text-white min-h-screen flex items-center justify-center">
          <div className=" brightness-50">
            <Image
              src={AboutUsHeroImage}
              alt="Image"
              className="z-10 w-full object-cover h-[40rem] brightness-100"
              height={0}
              width={0}
            />
          </div>
          <div className="text-[#FFFFFF] pt-72 flex flex-col gap-4 opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black absolute z-20 top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="flex flex-col gap-8">
              <span className="z-10 text-white opacity-100 text-7xl leading-10 tracking-wide md:text-8xl lg:text-9xl text-center uppercase font-black">
                Aeon
              </span>
              <span className="z-10 text-white opacity-100 text-7xl leading-10 tracking-wide md:text-8xl lg:text-9xl text-center uppercase font-black">
                 Olympia
              </span>
            </div>
            <span className="z-10 text-[#FFFFFF] opacity-40 lg:opacity-50 text-5xl md:text-8xl lg:text-9xl uppercase font-black">
              Strenght
            </span>
            {/* <p className="flex flex-col gap-2 text-[#DCEAE3] text-sm md:text-xl lg:text-2xl tracking-wider text-center md:text-end font-semibold z-20">
              <span>Unlock Your</span>
              <span className="">Strongest Version</span>
            </p> */}
            <div className="pt-16 md:pt-32 flex justify-center">
              <Link
                href="/programs"
                className="text-white hover:scale-105 text-xl lg:text-lg xl:text-xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-2 rounded-full"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

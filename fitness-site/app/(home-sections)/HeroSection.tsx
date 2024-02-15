import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutUsHeroImage from "../../public/HeroTestTest.jpg";

export default function HeroSection() {
  return (
    <div className="min-w-screen min-h-screen w-full flex items-center justify-center bg-slate-700 relative">
      <Image
        src={AboutUsHeroImage}
        alt="Image"
        className="absolute z-10 inset-0 w-full h-full object-cover"
        layout="fill"
      />
      <div className="absolute z-20 text-white text-center sm:text-left left-4 sm:left-16 top-1/2 transform -translate-y-1/2">
        <h1 className="text-3xl sm:text-9xl font-black mb-4 uppercase">
          Be fit
        </h1>
        <h1 className="text-3xl sm:text-9xl font-black mb-4 uppercase">
           be stronger
        </h1>
        <p className="text-lg sm:text-3xl">
          Unleash your potential at out cutting edge gym. <br /> Elevate your
          strength.
        </p>
        <div className="flex flex-row items-center gap-8">
          <Link
            href="/programs"
            className=" bg-white text-[#1D7349] hover:bg-[#1D7349] hover:text-white duration-100 text-2xl pt-4 tracking-tight uppercase font-semibold pb-4 px-12 rounded-lg"
          >
            Become a member
          </Link>

          <Link
            href="/programs"
            className="border-2 border-[#1D7349] hover:bg-white hover:text-[#1D7349] duration-100 text-2xl pt-5 tracking-tight uppercase font-medium pb-4 px-12 rounded-lg"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

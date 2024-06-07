"use client";
import { useState } from "react";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutUsHeroImage from "../../public/heroSectionImage.png";

// to do:see if on section element should be 2xl:px-32 or px-28

export default function HeroSection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-24 lg:pt-28 ppx-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 min-w-screen min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-16 bg-[#000000] relative">
      <div className="flex flex-col gap-2 items-center justify-center z-20 pt-20 sm:pt-8 md:pt-6 lg:pt-2">
        <p className="w-full text-above-heading text-start">
          Learn from the best
        </p>
        <h1 className="w-full h1 text-start 2xl:text-8xl">
          Transform Your{" "}
          <span className="font-bold bg-gradient-to-r bg-clip-text text-transparent pr-2 from-[#1D7349] to-[#31C57D] capitalize">
            Body
          </span>
          , Shape Your future
        </h1>
        <p className="text-subheading pt-2 md:pt-4 text-start">
          Unleash your strength, transform your body, conquer your fitness
          journey, transform your body
        </p>
        <div className="sm:hidden relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
          <Image
            priority
            src={AboutUsHeroImage}
            alt="alt"
            fill={true}
            // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
            className="object-cover rounded-md"
          />
        </div>
        <div className="w-full flex items-start justify-start">
          <Link href={"/programs"} className="btn-primary ">
            See Programs
          </Link>
        </div>
      </div>
      <div className="relative hidden sm:flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
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

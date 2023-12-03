"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UseScrollPosition } from "../hooks/UseScrollPosition";

export default function Navbar() {
  const pathname = usePathname();

  const scrolPosition = UseScrollPosition();

  return (
    <header
      className={`w-full sticky top-0 z-30 ${
        scrolPosition > 0 ? "bg-[#1F2125] duration-700" : ""
      }`}
    >
      <nav className="flex flex-row justify-between items-center py-6 bg-[#111317] lg:bg-inherit px-8">
        <Link href={"/"}>
          <p className="text-3xl sm:text-4xl leading-10 font-black italic text-[#1D7349] md:text-6xl lg:text-[#1D7349]">
            LOGO
          </p>
        </Link>
        <ul className="hidden lg:flex flex-row items-center justify-between gap-12">
          <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
            <Link href={"/programs"}>Programs</Link>
          </li>
          <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div>
          <button className="hidden lg:block text-white lg:text-lg xl:text-xl font-semibold leading-7 bg-[#1D7349]  hover:bg-[#34a26d] hover:scale-105  px-8 py-4 rounded-md">
            Join Now
          </button>
        </div>
        <div className="flex flex-col gap-2 items-end lg:hidden cursor-pointer">
          <div className="w-8 h-[2px] bg-white"></div>
          <div className="w-4 h-[2px] bg-white"></div>
        </div>
      </nav>
    </header>
  );
}

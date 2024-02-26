import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full">
      <p className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
        About Us
      </p>
      <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
        Find More Things About Us
      </p>
      <Link className="text-2xl bg-red-400 rounded-full px-4 text-white" href={'/about/subfolder'} >About Us Subfolder Link</Link>
    </div>
  );
}

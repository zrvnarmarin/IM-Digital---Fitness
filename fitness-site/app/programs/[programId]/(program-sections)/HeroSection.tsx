import { formatString } from "@/app/utils/helpers";
import React from "react";

export default function HeroSection({ programId } : { programId: string }) {
  return (
    <div className="w-full">
        <p className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
          {formatString(programId)}
        </p>
        <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
          Our best program
        </p>
      </div>
  );
}

import { LogoImage } from "@/app/(home-sections)/Navbar";
import React from "react";
import Link from "next/link";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function ProgramBuyAndDiscoundSection({
  programId,
}: {
  programId: string;
}) {
  return (
    <section className="w-full flex flex-col gap-6 pt-10 sm:pt-12 md:pt-16 lg:pt-16 px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-80 bg-[#000000]">
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-24 py-6 bg-slate-800">
        <LogoImage width={80} height={80} />
        <p className="normal-case text-md md:text-md text-gray-300 leading-2">
          Join <span className="font-semibold">{programId}</span> today and get
          access to MFT28 <span className="font-semibold">PLUS</span> over 60{" "}
          <br /> other{" "}
          <span className="font-semibold">expert-designed fitness plans</span>.
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-1">
            <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-xl py-3 px-7 cursor-pointer text-md text-white font-normal">
              Start My 7-Day Free Trial
            </button>
            <p className="normal-case text-sm text-white leading-2 font-normal">
              Already a subscriber?{" "}
              <Link
                href={"programs"}
                className="normal-case text-md text-white leading-2 font-medium"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

import { LogoImage } from "@/app/(home-sections)/Navbar";
import React from "react";
import Link from "next/link";

export default function ProgramBuyAndDiscoundSection({ programId } : { programId: number}) {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-6">
            <LogoImage  />
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
                Join {" "}
                <span className="font-semibold">{programId}</span> {" "}
                today and get access to MFT28 {" "}
                <span className="font-semibold">PLUS</span> {" "}
                over 60 <br /> other {" "}
                <span className="font-semibold">expert-designed fitness plans</span>.
            </p>
            <div className="flex flex-col">
            <div className="flex flex-col items-center gap-1">
                <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
                    Start My 7-Day Free Trial 
                </button>
                <p className="text-xs tracking-normal text-end text-white leading-7 font-normal">
                    Already a subscriber? {" "}
                    <Link href={'programs'} className="font-medium">Log in</Link>
                </p>
            </div>
            </div>
        </section>
    )
}
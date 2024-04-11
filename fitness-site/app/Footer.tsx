import React from "react";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/public/Icons";
import FooterWrapper from "./components/wrappers/FooterWrapper";
import { LogoImage } from "./(home-sections)/Navbar";

// https://produce-ui.com/components?section-category=footer

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-start">
          <LogoImage width={110} height={110} />
          <div className="flex flex-col items-start gap-1">
            <h2 className="bg-gradient-to-r bg-clip-text text-transparent pr-2 from-[#1D7349] to-[#31C57D] text-xl md:text-xl lg:text-3xl tracking-normal text-center leading-7 font-bold">
              Aeon Olympia Strength
            </h2>
            <p className="normal-case text-center text-md text-gray-300 leading-2">
              We providing the worlds best programs
            </p>
          </div>
        </div>
      </div>

      <ul className="flex flex-row flex-wrap items-center justify-start gap-16 border-b border-[#292929] pb-6">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.name}>
            <div className="flex flex-col gap-2">
              <Link
                href={footerLink.link}
                key={footerLink.name}
                className="normal-case text-center text-lg text-gray-300 leading-2"
              >
                {footerLink.name}
              </Link>
            </div>
          </div>
        ))}
      </ul>

      <div className="flex flex-row items-center justify-between border-b border-[#292929] pb-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-[#31C57D]">&#169;</span>
            <span className="text-xs text-[#31C57D]">Developed By</span>
          </div>
          <span className="normal-case text-center text-md text-gray-300 leading-2">
            MarinZrvnar
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <div className="rounded-full cursor-pointer border-2 border-[#1D7349] p-1 hover:bg-white hover:scale-125 duration-200">
            <InstagramIcon />
          </div>
          <div className="rounded-full border-2 cursor-pointer border-[#1D7349] p-1 hover:bg-white hover:scale-125 duration-200">
            <FacebookIcon />
          </div>
          <div className="rounded-full border-2 cursor-pointer border-[#1D7349] p-1 hover:bg-white hover:scale-125 duration-200">
            <YouTubeIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 justify-center border-b border-[#292929] pb-6">
        <p className="normal-case text-md text-center md:text-md text-gray-300 leading-2">
          Terms And Conditions
        </p>
        <p className="normal-case text-md text-center md:text-md text-gray-300 leading-2">
          |
        </p>
        <p className="normal-case text-md text-center md:text-md text-gray-300 leading-2">
          Privacy Policy
        </p>
      </div>
    </FooterWrapper>
  );
}

export const footerLinks = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Programs",
    link: "/programs",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Facilities",
    link: "/facilities",
  },
];

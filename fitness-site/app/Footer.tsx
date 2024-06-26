import React from "react";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/public/Icons";
import FooterWrapper from "./components/wrappers/FooterWrapper";
import { LogoImage } from "./(home-sections)/Navbar";
import SectionWrapper from "./components/wrappers/SectionWrapper";

// https://produce-ui.com/components?section-category=footer

export default function Footer() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <div className="w-full flex flex-row xs:flex-row items-center justify-start">
          <div className="hidden xs:flex sm:hidden">
            <LogoImage width={95} height={95} />
          </div>
          <div className="flex gap-2 items-center">
            <LogoImage />{" "}
            <span className="text-white text-3xl font-semibold">
              Fitness<span className="text-[#24d17c] font-medium">Lab</span>
            </span>
          </div>
        </div>
      </div>

      <ul className="flex flex-col xs:flex-row items-start xs:justify-between sm:justify-start justify-start gap-4 sm:gap-8 md:gap-12 border-b border-[#292929] pb-6">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.name}>
            <div className="flex flex-col gap-2">
              <Link
                href={footerLink.link}
                key={footerLink.name}
                className="normal-case text-center text-sm xs:text-md lg:text-lg text-gray-300 leading-2"
              >
                {footerLink.name}
              </Link>
            </div>
          </div>
        ))}
      </ul>

      <div className="w-full flex flex-row items-center justify-between border-b border-[#292929] pb-6">
        <div className="w-full flex flex-col sm:flex-row items-start sm:gap-2">
          <div className="flex items-center gap-1">
            <span className="text-[#31C57D]">&#169;</span>
            <span className="text-xs md:text-md text-[#31C57D]">
              Developed By
            </span>
          </div>
          <span className="normal-case text-center text-md text-gray-300 leading-2">
            MarinZrvnar
          </span>
        </div>
        <div className="w-full flex flex-row sm:justify-end gap-4">
          <div className="rounded-full cursor-pointer border-2 border-[#31C57D] p-1 hover:bg-white hover:scale-125 duration-200">
            <InstagramIcon />
          </div>
          <div className="rounded-full border-2 cursor-pointer border-[#31C57D] p-1 hover:bg-white hover:scale-125 duration-200">
            <FacebookIcon />
          </div>
          <div className="rounded-full border-2 cursor-pointer border-[#31C57D] p-1 hover:bg-white hover:scale-125 duration-200">
            <YouTubeIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 justify-center border-b border-[#292929] pb-6">
        <p className="normal-case text-xs sm:text-sm text-center md:text-md text-gray-300 leading-2">
          Terms And Conditions
        </p>
        <p className="normal-case text-md text-center md:text-md text-gray-300 leading-2">
          |
        </p>
        <p className="normal-case text-xs sm:text-sm text-center md:text-md text-gray-300 leading-2">
          Privacy Policy
        </p>
      </div>
    </SectionWrapper>
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

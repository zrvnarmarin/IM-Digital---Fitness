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
        <h2 className="normal-case text-md text-center md:text-md text-gray-300 leading-2">User interface design made simple</h2>
        <p className="normal-case text-center text-md md:text-md text-gray-300 leading-2">We providing the worlds best and the mkost reusable components that will 10x your business and its growth</p>
        <div className="w-full flex flex-row gap-2 justify-center items-center">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Contact Us
          </button>
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            See Our Programs
          </button>
        </div>
        <Link href={'/'} className="w-full flex flex-row justify-center items-center">
          <LogoImage />
          <p className="normal-case text-md md:text-md text-gray-300 leading-2">Aeon Olympia Strenght</p>
        </Link>
        {/* <p className="uppercase font-normal text-white text-2xl tracking-wider">
          Unlock Your Strongest Version
        </p>
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
        </div> */}
      </div>

      <ul className="flex flex-row items-center justify-evenly border-b border-[#292929] pb-6">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.name}>
            <div className="flex flex-col gap-2">
                <Link
                  href={footerLink.link}
                  key={footerLink.name}
                  className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal hover:underline hover:underline-offset-4 hover:decoration-[#1D7349]"
                >
                  {footerLink.name}
                </Link>
            </div>
          </div>
        ))}
      </ul>

      <div className="flex flex-row items-center justify-between border-b border-[#292929] pb-6">
        <h3 className="tracking-wider text-md text-white md:text-md lg:text-lg">
          <span className="text-[#1D7349]">&#169;</span> <span className="text-xs text-[#1D7349]">Developed By</span> Marin Zrvnar
        </h3>
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
        <p className="normal-case text-md text-center md:text-md text-gray-300 leading-2">Terms And Conditions</p>
        <p className="normal-case text-md text-center md:text-md text-gray-300 leading-2">|</p>
        <p className="normal-case text-md text-center md:text-md text-gray-300 leading-2">Terms And Conditions</p>
      </div>
    </FooterWrapper>
  );
}


    export const footerLinks = [
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Programs',
        link: '/programs'
      },
      {
        name: 'Services',
        link: '/services'
      },
      {
        name: 'Contact',
        link: '/contact'
      },
      {
        name: 'Facilities',
        link: '/facilities'
      },

    ]
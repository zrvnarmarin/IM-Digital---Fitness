"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import XImageIcon from "../../public/icons8-x-50.png";
import Image from "next/image";
import { InstagramIcon, YouTubeIcon, FacebookIcon } from "@/public/Icons";
import LogoWhite from '../../public/logo-white.png'
import { MotionAside } from "./MotionDiv";

export default function Sidebar({
  isSideBarOpen,
  onCloseSidebar,
}: {
  isSideBarOpen: boolean;
  onCloseSidebar: () => void;
}) {
  useEffect(() => {
    if (isSideBarOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isSideBarOpen]);

  return (
    <>
      {isSideBarOpen && (
        <MotionAside
          className="top-0 left-0 bottom-0 bg-[#000000] w-full h-screen sticky z-40"
        >
          <div className="flex justify-between items-center py-2 px-4">
            <LogoImage onCloseSidebar={onCloseSidebar} />
            <button onClick={() => onCloseSidebar()}>
              <Image src={XImageIcon} alt="X-button" width={0} height={0} />
            </button>
          </div>
          <div className="flex flex-col">
            <NavbarLinksSection onCloseSidebar={onCloseSidebar} />
            <GetInTouchWithUsSection />
          </div>
        </MotionAside>
      )}
    </>
  );
}

const NavbarLink = ({
  navbarLink,
  onCloseSidebar,
}: {
  navbarLink: NavbarLink;
  onCloseSidebar: () => void;
}) => {
  return (
    <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal tracking-wider hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
      <Link
        href={`${navbarLink.link}`}
        onClick={() => onCloseSidebar()}
        className=" font-normal text-white text-lg tracking-wider"
      >
        {navbarLink.name}
      </Link>
    </li>
  );
};

const NavbarLinksSection = ({
  onCloseSidebar,
}: {
  onCloseSidebar: () => void;
}) => {
  return (
    <ul className="lg:flex flex flex-col items-end justify-between gap-6 pt-16 py-2 px-4">
      {navbarLinks.map((link) => (
        <NavbarLink
          key={link.name}
          navbarLink={link}
          onCloseSidebar={onCloseSidebar}
        />
      ))}
    </ul>
  );
};

export const GetInTouchWithUsSection = () => {
  return (
    <div className="bg-[#111317] mt-16 flex flex-col gap-8 items-end py-2 px-4 w-full">
      <div className="flex flex-col gap-2">
        <p className="font-normal text-white uppercase text-end text-lg tracking-wider">
          Get In Touch With Us
        </p>
        <Link
          href="/"
          className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal tracking-wider hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7"
        >
          info@aeonolympiastrength.com
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-normal text-white uppercase text-end text-lg tracking-wider">
          Follow Us
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
        </div>
      </div>
    </div>
  );
};

export const LogoImage = ({
  onCloseSidebar,
}: {
  onCloseSidebar: () => void;
}) => {
  return (
    <Link href={"/"} onClick={onCloseSidebar}>
      <Image
        src={LogoWhite}
        alt="logo"
        width={60}
        height={60}
      />
    </Link>
  );
};

export const XButton = () => {
  return (
    <button>
      <Image src={XImageIcon} alt="X-button" width={0} height={0} />
    </button>
  );
};

const navbarLinks = [
  {
    name: "Programs",
    link: "/programs",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Instructors",
    link: "/instructors",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Testimonials",
    link: "/about/testimonials",
  },
  {
    name: "Facilities",
    link: "/facilities",
  }
];

export type NavbarLink = {
  name: string;
  link: string;
};

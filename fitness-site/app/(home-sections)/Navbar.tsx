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
      <nav className="flex flex-row justify-between items-center py-2 bg-[#111317] lg:bg-inherit px-8">
        <Logo />
        <NavbarLinksSection />
        <JoinNowButton />
        <HamburgerMenuButton />
      </nav>
    </header>
  );
}

const NavbarLink = ({ navbarLink }: { navbarLink: NavbarLink }) => {
  return (
    <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal tracking-wider hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
      <Link href={`${navbarLink.link}`}>{navbarLink.name}</Link>
    </li>
  );
};

const NavbarLinksSection = () => {
  return (
    <ul className="hidden lg:flex flex-row items-center justify-between gap-12">
      {navbarLinks.map((link) => (
        <NavbarLink key={link.name} navbarLink={link} />
      ))}
    </ul>
  );
};

const HamburgerMenuButton = () => {
  return (
    <div className="flex flex-col gap-2 items-end lg:hidden cursor-pointer">
      <div className="w-8 h-[2px] bg-white"></div>
      <div className="w-4 h-[2px] bg-white"></div>
    </div>
  );
};

const JoinNowButton = () => {
  return (
    <div>
      <button className="hidden lg:block uppercase text-white hover:scale-105 text-lg lg:text-xl xl:text-2xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-1 rounded-full">
        Join Now
      </button>
    </div>
  );
};

const Logo = () => {
  return (
    <Link href={"/"}>
      <p className="text-3xl sm:text-4xl leading-10 font-black italic text-[#1D7349] md:text-6xl lg:text-[#1D7349]">
        LOGO
      </p>
    </Link>
  );
};

export type NavbarLink = {
  name: string;
  link: string;
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
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

"use client";

import Link from "next/link";
import React, { useState } from "react";
import XImageIcon from '../../public/icons8-x-50.png'
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="py-2 px-8 top-0 left-0 bottom-0 bg-gray-800 w-1/3 h-screen sticky z-40">
      <div className="flex justify-between items-center">
        <span className="uppercase text-3xl sm:text-4xl leading-10 font-black italic text-[#1D7349] md:text-6xl lg:text-[#1D7349]">L</span>
        <XIcon />
      </div>
      <NavbarLinksSection />
    </aside>
  );
}

export const XIcon = () => {
  return (
    <Image src={XImageIcon} alt="X-button" width={0} height={0} />
  )
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

export type NavbarLink = {
  name: string;
  link: string;
};

const NavbarLink = ({ navbarLink }: { navbarLink: NavbarLink }) => {
  return (
    <li className="text-[#F3F4F6] xs:text-md lg:text-lg xl:text-xl font-normal tracking-wider hover:underline hover:underline-offset-8 hover:decoration-[#1D7349] leading-7">
      <Link href={`${navbarLink.link}`}>{navbarLink.name}</Link>
    </li>
  );
};

const NavbarLinksSection = () => {
  return (
    <ul className="hidden pt-32 lg:flex flex-col items-center justify-between gap-12">
      {navbarLinks.map((link) => (
        <NavbarLink key={link.name} navbarLink={link} />
      ))}
    </ul>
  );
};

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UseScrollPosition } from "../hooks/UseScrollPosition";
import LogoWhite from "../../public/logo-white.png";
import { TestIconTwo } from "@/public/Icons";

export default function Navbar({
  onOpenSidebar,
}: {
  isSideBarOpen: boolean;
  onOpenSidebar: () => void;
}) {
  const scrolPosition = UseScrollPosition();

  return (
    <header
      className={`w-full fixed z-30  ${scrolPosition > 0 ? "duration-700 bg-[#090909]" : "bg-[#090909]"}`}
    >
      <nav className="flex flex-row justify-between items-center lg:bg-inherit px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72">
        <LogoImage width={80} height={80} />
        <ul className="relative hidden lg:flex items-center justify-between gap-8">
          {navbarLinks.map((navbarLink) => (
            <>
              {navbarLink.dropdown === true ? (
                <DropdownLink
                  name={navbarLink.name}
                  dropdownItems={navbarLink.dropdownItems}
                />
              ) : (
                <NavbarLink key={navbarLink.name} navbarLink={navbarLink} />
              )}
            </>
          ))}
        </ul>
        <button
          onClick={() => onOpenSidebar()}
          className="flex lg:hidden flex-col gap-2 items-end"
        >
          <div className="w-8 h-[2px] bg-white"></div>
          <div className="w-4 h-[2px] bg-white"></div>
        </button>
        <div className="hidden lg:flex items-center justify-between gap-8">
          <p className="normal-case text-md text-white leading-2 font-normal">
            Log In
          </p>
          <Link
            href={"/programs"}
            className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-xl py-3 px-7 cursor-pointer text-md text-white font-normal"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

const NavbarLink = ({ navbarLink }: { navbarLink: NavbarLink }) => {
  return (
    <li className="normal-case text-md text-white leading-2 font-normal">
      <Link href={`${navbarLink.link}`}>{navbarLink.name}</Link>
    </li>
  );
};

export type NavbarLink = {
  name: string;
  link: string;
};

export const LogoImage = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Link href={"/"}>
      <Image src={LogoWhite} alt="logo" width={width} height={height} />
    </Link>
  );
};

const navbarLinks = [
  {
    name: "Programs",
    link: "/programs",
    dropdown: false,
  },
  {
    name: "Services",
    link: "/services",
    dropdown: false,
  },
  {
    name: "Facilities",
    link: "/facilities",
    dropdown: false,
  },
  {
    name: "About",
    link: "/about",
    dropdown: true,
    dropdownItems: [
      {
        name: "Instructors",
        link: "/instructors",
      },
      {
        name: "Testimonials",
        link: "/testimonials",
      },
    ],
  },
];

export function DropdownLink({
  name,
  dropdownItems,
}: {
  name: string;
  dropdownItems: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="flex items-center gap-1.5"
    >
      <a
        className="normal-case text-md text-white leading-2 font-normal"
        href="#0"
      >
        {name}
      </a>
      <button
        className="flex items-center"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-3 h-3 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="4"
        >
          <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        </svg>
      </button>
      {/* 2nd level menu */}
      <ul
        className={`origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] p-2 rounded-lg shadow-xl ${!open && "hidden"}`}
      >
        {dropdownItems.map((item, index) => (
          <DropdownLinkElement key={index} name={item.name} link={item.link} />
        ))}
      </ul>
    </div>
  );
}

export const DropdownLinkElement = ({
  name,
  link,
}: {
  name: string;
  link: string;
}) => {
  return (
    <li>
      <Link
        className="text-slate-800 hover:bg-gradient-to-r from-[#1D7349] to-[#31C57D] flex items-center p-2 rounded-md"
        href={link}
      >
        <div className="flex items-center justify-center bg-[#31C57D] shadow-sm h-7 w-7 shrink-0 mr-3 p-1 rounded-md">
          <TestIconTwo iconFill="#ffffff" />
        </div>
        <span className="whitespace-nowrap normal-case text-md text-white leading-2 font-normal">
          {name}
        </span>
      </Link>
    </li>
  );
};

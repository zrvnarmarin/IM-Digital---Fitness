"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UseScrollPosition } from "../hooks/UseScrollPosition";
import LogoWhite from "../../public/logo-white.png";

export default function Navbar({
  isSideBarOpen,
  onOpenSidebar,
}: {
  isSideBarOpen: boolean;
  onOpenSidebar: () => void;
}) {
  const pathname = usePathname();

  const scrolPosition = UseScrollPosition();

  return (
    <header
      className={`w-full fixed z-30 ${scrolPosition > 0 ? "duration-700" : ""}`}
    >
      <nav className="flex flex-row justify-between items-center py-2 lg:bg-inherit px-8 md:px-14 lg:px-20 xl:px-24 2xl:px-32">
        <LogoImage width={80} height={80} />
        <ul className="hidden lg:flex items-center justify-between gap-8">
          {navbarLinks.map((navbarLink) => (
            <div>
              {navbarLink.dropdown === true ? (
                <DropDwonTest />
              ) : (
                <NavbarLink key={navbarLink.name} navbarLink={navbarLink} />
              )}
            </div>
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
    name: "Instructors",
    link: "/instructors",
    dropdown: false,
  },
  {
    name: "About",
    link: "/about",
    dropdown: true,
    dropdownItems: [
      <Link href={"/instructors"} />,
      <Link href={"/testimonials"} />,
    ],
  },

  // {
  //   name: "Testimonials",
  //   link: "/about/testimonials",
  // },
  {
    name: "Facilities",
    link: "/facilities",
  },
];

export function DropDwonTest() {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <a className="normal-case text-md text-white leading-2 font-normal" href="#0">
        About
      </a>
      <button
        className="shrink-0 p-1"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Show submenu for "Flyout Menu"</span>
        <svg
          className="w-3 h-3 fill-slate-500"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
        >
          <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        </svg>
      </button>
      {/* 2nd level menu */}
      <ul
        className={`origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl ${!open && "hidden"}`}
      >
        <li>
          <Link
            className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
            href="#"
          >
            <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
              <svg
                className="fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="12"
              >
                <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0 0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0 0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
              </svg>
            </div>
            <span className="whitespace-nowrap">Priority Ratings</span>
          </Link>
        </li>
        {/* Additional <li> elements here */}
      </ul>
    </div>
  );
}

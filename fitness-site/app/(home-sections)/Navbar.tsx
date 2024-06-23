"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TestIconTwo } from "@/public/Icons";
import { UseScrollPosition } from "../hooks/UseScrollPosition";

export default function Navbar({
  onOpenSidebar,
}: {
  isSideBarOpen: boolean;
  onOpenSidebar: () => void;
}) {
  const scrollPosition = UseScrollPosition();

  return (
    <header
      className={`w-full fixed z-30 opacity-90 bg-[#000000] border-b border-gray-900 ${scrollPosition > 20 ? "opacity-90 bg-[#090a0c] border-b border-gray-900 backdrop-blur-xl duration-700" : ""} }`}
    >
      <nav className="flex flex-row justify-between items-center lg:bg-inherit px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 py-4">
        <div className="flex gap-2 items-center">
          <LogoImage />{" "}
          <span className="text-white text-3xl font-semibold">
            Fitness<span className="text-[#24d17c] font-medium">Lab</span>
          </span>
        </div>
        <ul className="relative hidden lg:flex items-center justify-between gap-10">
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
            className="w-fit bg-black rounded-[0px] border border-[#31C57D] py-2.5 px-8 cursor-pointer text-md text-white font-normal"
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
    <li className="normal-case text-base text-white font-normal">
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
  width?: number;
  height?: number;
}) => {
  return (
    <Link href={"/"}>
      <svg
        width="35"
        height="42"
        viewBox="0 0 35 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.213 0.000488281L34.7533 0.000488281L24.1045 18.4857C22.5133 15.6612 21.6864 12.4705 21.7055 9.22871C21.7245 5.98691 22.5888 2.80613 24.213 0.000488281ZM34.8092 41.9987L10.5403 0.00223828L0 0.00223828L12.1083 21.0285L0 42.0005H10.5403L17.4038 30.1635L24.2148 42.0005L34.8092 41.9987Z"
          fill="#24D17C"
        />
      </svg>
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
      <a className="normal-case text-base text-white font-normal" href="#0">
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

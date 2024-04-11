"use client";

import React from "react";
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
            <NavbarLink key={navbarLink.name} navbarLink={navbarLink} />
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

  // {
  //   name: "Testimonials",
  //   link: "/about/testimonials",
  // },
  {
    name: "Facilities",
    link: "/facilities",
  },
];

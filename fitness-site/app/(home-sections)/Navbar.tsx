"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UseScrollPosition } from "../hooks/UseScrollPosition";
import LogoWhite from '../../public/logo-white.png'


export default function Navbar({
  isSideBarOpen,
  onOpenSidebar
}: {
  isSideBarOpen: boolean;
  onOpenSidebar: () => void
}) {
  const pathname = usePathname();

  const scrolPosition = UseScrollPosition();

  return (
    <header
      className={`w-full fixed z-30 ${
        scrolPosition > 0 ? "duration-700" : ""
      }`}
    >
      <nav className="flex flex-row justify-between items-center py-2  lg:bg-inherit px-4">
        <LogoImage />
        <button onClick={() => onOpenSidebar()} className="flex flex-col gap-2 items-end">
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-3 h-[2px] bg-white"></div>
        </button>
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

export type NavbarLink = {
  name: string;
  link: string;
};

export const LogoImage = () => {
  return (
    <Link href={"/"}>
      <Image
        src={LogoWhite}
        alt="logo"
        width={60}
        height={60}
      />
    </Link>
  );
};
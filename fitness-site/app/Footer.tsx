import React from "react";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "@/public/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#111317] px-8 flex flex-col">
      <div className="flex flex-col gap-6">
        <Link href={"/"}>
          <p className="text-3xl sm:text-4xl leading-10 font-black italic text-[#1D7349] md:text-6xl lg:text-[#1D7349]">
            LOGO
          </p>
        </Link>
        <p className="text-lg font-normal text-gray-200">
          We will help you shape the body of your dreams
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

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.heading}>
            <h3 className="text-white leading-2 text-xl pb-8 font-semibold">
              {footerLink.heading}
            </h3>
            <div className="flex flex-col gap-2">
              {footerLink.links.map((link) => (
                <Link
                  href={`/${link}`}
                  key={link}
                  className="text-gray-200 leading-2 text-md hover:underline hover:underline-offset-4 hover:decoration-[#1D7349]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </ul>
      <h3 className="text-white text-sm md:text-md lg:text-lg pt-16 pb-8">
        &#169; IM Digital Ltd.
      </h3>
    </footer>
  );
}

const footerLinks = [
  {
    heading: "Quick Links",
    links: ["Home", "About", "Appointment", "Blog"],
  },
  {
    heading: "About",
    links: ["Testimonials", "Gallery", "Appointment", "Blog"],
  },
  {
    heading: "Super link",
    links: ["Home", "About", "Appointment", "Blog"],
  },
];

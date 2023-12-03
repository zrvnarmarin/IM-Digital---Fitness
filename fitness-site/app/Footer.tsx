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
        <p className="uppercase font-normal text-white text-2xl tracking-wider">
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
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.heading}>
            <h3 className="text-xl tracking-wider md:text-lg lg:text-xl text-start text-white leading-7 font-medium pb-8">
              {footerLink.heading}
            </h3>
            <div className="flex flex-col gap-2">
              {footerLink.links.map((link) => (
                <Link
                  href={link.link}
                  key={link.name}
                  className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normalhover:underline hover:underline-offset-4 hover:decoration-[#1D7349]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </ul>
      <h3 className="tracking-wider text-md text-white md:text-md lg:text-lg pt-16 pb-8">
        <span className="text-[#1D7349]">&#169;</span> <span className="text-xs text-[#1D7349]">Developed By</span> IM Digital Ltd.
      </h3>
    </footer>
  );
}

const footerLinks = [
  {
    heading: "General",
    links: [
      {
        name: 'About',
        link: '/about-us'
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
    ]
  },
  {
    heading: "More About Us",
    links: [
      {
        name: 'Testimonials',
        link: '/about-us/testimonials'
      },
      {
        name: 'Photo Gallery',
        link: '/about-us/photo-gallery'
      },
    ]
  },
];

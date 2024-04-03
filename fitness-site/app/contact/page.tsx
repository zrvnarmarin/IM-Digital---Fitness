import React from "react";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import TestImage from '../../public/heroSectionGymBaja.png'
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/public/Icons";

// inspiracija: https://www.behance.net/gallery/176961341/Contact-Us-Page-Design?tracking_source=search_projects|contact+us+page&l=46

export default function ContactSection() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-4 bg-[#000000]">
      <HeroSection />
    </main>
  );
}

export function HeroSection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-20 pb-4 px-8 md:px-14 lg:px-28 xl:px-42 2xl:px-48 min-w-screen min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#000000] relative">
      <div className="flex flex-col gap-6 items-center justify-start pt-16 z-20">
        <h1 className="w-full text-xl md:text-xl lg:text-7xl tracking-normal text-start text-white leading-7 font-semibold">
          Contact Us
        </h1>
        <p className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae aliquid deserunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-full flex flex-col justify-start gap-2">
          <p className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal">
            Follow Us:
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
      <div className="relative group flex flex-col gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616]">
        <div className="absolute inset-0">
          <Image
            priority
            src={TestImage}
            alt="alt"
            layout="fill"
            objectPosition="center"
            className="rounded-md object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-70 border border-[#292929] rounded-lg"></div>
        
        <form className="flex flex-col gap-6 z-20">
          <h1 className="w-full pb-6 text-gray-200 text-2xl tracking-normal text-start font-semibold">
            Send Us A Message
          </h1>
          <div className="flex flex-row gap-4 w-full">
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="full-name-input"
                className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal"
              >
                Full Name
              </label>
              <input
                id="full-name-input"
                type="text"
                className="text-white bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] opacity-90 rounded-lg px-4 py-4"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email-address-input"
                className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal"
              >
                Email Adress
              </label>
              <input
                id="email-adress-input"
                type="text"
                className="text-white bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] opacity-90 rounded-lg px-4 py-4"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="subject-input"
              className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal"
            >
              Subject
            </label>
            <input
              id="subject-input"
              type="text"
              className="text-white bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] opacity-90 rounded-lg px-4 py-4"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="subject-input"
              className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal"
            >
              Message
            </label>
            <textarea
            rows={10}
              id="subject-input"
              className="text-white bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] opacity-90 rounded-lg px-4 py-4"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-6">
            <div className="flex flex-row items-center gap-2">
              <input
                id="send-newsletter-checkbox"
                type="checkbox"
                className="text-white bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] opacity-90 rounded-lg px-4 py-4"
              />
              <p className="normal-case text-md md:text-lg text-gray-300 leading-2 font-normal">Send me a newsletter</p>
            </div>
            <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}

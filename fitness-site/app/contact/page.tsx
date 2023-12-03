import React from "react";
import Navbar from "@/app/(home-sections)/Navbar";
import Link from "next/link";
import Footer from "@/app/Footer";
import Image from "next/image";
import ContactImage from "../../public/AboutUsHeroImage.avif";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center lg:pt-4 bg-[#111317]">
      {/* <div className='px-8 pt-12 pb-6'>
        <HeroSection />
      </div> */}
      <HeroSectionTwo />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 lg:px-24 pl-8 py-24">
        <ContactFormSection />
        <ContactInfoSection />
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <div>
      <h1 className="font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFFFFF] leading-10 mb-6">
        Contact Us
      </h1>
      <p className="text-[#bcd3d5] text-center text-md sm:text-lg leading-7 mb-8">
        Have questions or need assistance? Feel free to reach out to our team.
        We are here to help you.
      </p>
    </div>
  );
}

export function HeroSectionTwo() {
  return (
    <>
      <div className="relative text-white min-h-64 flex items-center justify-center">
        <div className="relative brightness-50 max-h-1/2 w-screen">
          <Image
            src={ContactImage}
            alt="Image"
            className="z-10 w-full object-cover h-[24rem] brightness-50"
            height={0}
            width={0}
          />
        </div>
        <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Contact
        </p>
      </div>
    </>
  );
}

export function ContactFormSection() {
  return (
    <form className="flex flex-col gap-10 bg-[#1F2125] p-6 rounded-md shadow-md">
      <h2 className="uppercase font-normal text-white text-2xl tracking-wider">
        Send us a Message
      </h2>
      <div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="john doe"
            className="mt-1 p-2 w-full rounded-md text-gray-300 tracking-wider border-slate-700 border bg-[#111317]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@gmail.com"
            className="mt-1 p-2 w-full rounded-md text-gray-300 tracking-wider border-slate-700 border bg-[#111317]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="My future goals are..."
            rows={4}
            className="mt-1 p-2 w-full rounded-md text-gray-300 tracking-wider border-slate-700 border bg-[#111317]"
          ></textarea>
        </div>
        <div className="pt-16 md:pt-32 flex justify-center">
          <Link
            href="/programs"
            className="text-white hover:scale-105 text-lg lg:text-xl xl:text-2xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-1 rounded-full"
          >
            Send A Mesagge
          </Link>
        </div>
      </div>
    </form>
  );
}

export function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-10 bg-[#1F2125] p-6 rounded-md shadow-md ">
      <h2 className="uppercase font-normal text-white text-2xl tracking-wider">
        Contact Information
      </h2>
      <div>
        <p className="mb-2 text-white">
          <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            Address:
          </span>{" "}
          123 Main Street, Cityville, Country
        </p>
        <p className="mb-2 text-white">
          <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            Phone:
          </span>{" "}
          +1 (123) 456-7890
        </p>
        <p className="mb-2 text-white">
          <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            Email:
          </span>{" "}
          info@example.com
        </p>
        <p className="mb-2 text-white">
          <span className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            Business Hours:
          </span>{" "}
          Monday - Friday, 9:00 AM - 5:00 PM
        </p>
      </div>
    </div>
  );
}

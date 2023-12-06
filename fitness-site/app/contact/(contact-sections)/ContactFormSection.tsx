import React from "react";
import Link from "next/link";

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
  
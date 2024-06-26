"use client";

import React from "react";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { CarouselSectionHomePage } from "../components/Carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "@/app/data";
import { Fragment } from "react";
import Image from "next/image";
import TestImage from "../../public/gymFacilityImage.png";

export default function SuccessStories() {
  return (
    <SectionWrapper>
      {/* <div className="flex items-center justify-between">
        <h2 className="w-full h2">Success Stories</h2>
        <div className="w-full hidden md:flex items-center justify-end">
          <Link
            href="/"
            className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white"
          >
            Read More Stories
          </Link>
        </div>
      </div>
      <CarouselSectionHomePage /> */}
      <div className="grid grid-cols-2 bg-gradient-to-r from-[#090a0c] to-[#191919] border-[0.5px] border-[#111316]">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-8 border-b-[0.5px] border-[#292929]"
          >
            <QuotationMarkIcon />
            <p className="pt-2 text-normal">{testimonial.testimonial}</p>
            <div className="flex gap-4 items-center pt-4 ">
              <div className="flex items-center w-12 h-12 rounded-full">
                <Image
                  src={TestImage}
                  width={100}
                  height={100}
                  alt="Community Image"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className=" h3">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export const QuotationMarkIcon = () => {
  return (
    <svg
      fill="#24D17C"
      viewBox="0 0 8 8"
      width="22"
      height="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z"
          transform="translate(0 1)"
        ></path>
      </g>
    </svg>
  );
};

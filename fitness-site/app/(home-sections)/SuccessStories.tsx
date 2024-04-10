"use client";

import React from "react";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { CarouselSectionHomePage } from "../components/Carousel";
import "react-multi-carousel/lib/styles.css";

export default function SuccessStories() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h2 className="w-full uppercase text-gray-300 text-3xl tracking-tight text-start font-bold">
          Success Stories
        </h2>
        <div className="w-full flex items-center justify-end">
          <Link
            href="/"
            className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-3 px-6 cursor-pointer text-white"
          >
            Read More Stories
          </Link>
        </div>
      </div>
      <CarouselSectionHomePage />
    </SectionWrapper>
  );
}

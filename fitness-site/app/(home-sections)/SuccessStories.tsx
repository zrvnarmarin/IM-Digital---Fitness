'use client'

import React from "react";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import { CarouselSectionHomePage } from "../components/Carousel";
import 'react-multi-carousel/lib/styles.css';

export default function SuccessStories() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold w-full">
          Success Stories
        </h1>
        <div className="w-full flex items-center justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Read More Stories
          </button>
        </div>
      </div>
      <CarouselSectionHomePage />
    </SectionWrapper>
  );
}
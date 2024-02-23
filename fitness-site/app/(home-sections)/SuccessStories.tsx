import React from "react";
import Image from "next/image";
import { testimonials } from "../data";
import { QuotationMark } from "@/public/Icons";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from '../../public/gymImage.jpg'

export default function SuccessStories() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-normal text-white text-2xl tracking-wider mr-4">
          Success Stories
        </h1>
        <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Read More Stories
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 md:pt-8">
        {testimonials.slice(0, 2).map((testimonial) => (
          <SuccessStoryCard
            key={testimonial.id}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            date={testimonial.date}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center gap-4">
        <button className="w-8 h-2 rounded-md bg-[#1D7349]" />
        <button className="w-8 h-2 rounded-md bg-[#1D7349]" />
        <button className="w-8 h-2 rounded-md bg-[#1D7349]" />
      </div>
    </SectionWrapper>
  );
}

export function SuccessStoryCard({
  name,
  testimonial,
  date,
}: {
  name: string;
  testimonial: string;
  date: string;
}) {
  return (
    <div className="flex flex-col gap-8 p-8 border-l-2 border-[#1D7349] rounded-md">
      <div className="flex justify-start">
        <QuotationMark />
      </div>
      <div className="flex flex-row gap-2">
        <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          {testimonial}
        </p>
      </div>
      <div className="flex gap-4 items-center">
      <div className="flex items-center w-12 h-12 rounded-full">
          <Image
            src={TestImage}
            width={100}
            height={100}
            alt="Community Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="font-semibold text-gray-100 text-lg md:text-xl lg:text-2xl tracking-wide">
          {name}
        </p>
      </div>
      {/* <p className="flex-1 text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        {date}
      </p> */}
    </div>
  );
}

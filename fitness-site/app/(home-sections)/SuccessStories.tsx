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
        <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
          Success Stories
        </h1>
        <div className="w-full flex items-center justify-end">
          <button className="w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
            Read More Stories
          </button>
        </div>
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
        <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
        <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
        <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
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
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-r from-[#101010] to-[#292929] rounded-lg">
      <div className="flex justify-start">
        <QuotationMark />
      </div>
      <div className="flex flex-row gap-2">
        <p className="normal-case text-md text-gray-300 leading-2 font-normal">
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
        <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
          {name}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { QuotationMark } from "@/public/Icons";
import { testimonials } from "@/app/data";

export function TestimonialsSection() {
  return (
    <section className="px-6 md:px-8 lg:px-32 md:py-8 lg:py-16 grid gap-4 grid-cols-gallery bg-[#111317]">
      <div className="grid grid-cols-1  gap-10 pt-16 md:pt-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            date={testimonial.date}
          />
        ))}
      </div>
    </section>
  );
}

export function TestimonialCard({
    name,
    testimonial,
    date,
  }: {
    name: string;
    testimonial: string;
    date: string;
  }) {
    return (
      <div className="flex flex-col gap-8 p-6 border-l-4 border-white hover:bg-[#1F2125] rounded-r-md">
        <div className="flex gap-4 items-center">
          <div className="bg-[#1D7349] rounded-full py-2 px-4 w-fit">
            <p className="font-normal text-white text-lg tracking-wider">
              {name}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex justify-start">
            <QuotationMark />
          </div>
          <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
            {testimonial}
          </p>
        </div>
        <p className="flex-1 text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          {date}
        </p>
      </div>
    );
  }
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import React from "react";
import Image from "next/image";
import TestImage from '../../../../public/HeroTestTest.jpg'
import { TestimonialCard, TestimonialCardsSection } from "@/app/about/page";
import { testimonials } from "@/app/data";

export default function SuccessStoriesSection() {
    return (
        <SectionWrapper>
            <div className="flex flex-col gap-2">
                <h1 className="uppercase italic text-gray-200 text-3xl tracking-normal text-start font-bold">
                    Success Stories
                </h1>
                <p className="normal-case text-md md:text-md text-gray-300 leading-2">
                    MFT-28 has changed thousands of lives. Here's what those who followed it have to say.
                </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.slice(0, 2).map(testimonial =>
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />  
                )}
            </ul>
            <div className="flex flex-row justify-center gap-4">
                <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
                <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
                <button className="w-8 h-2 rounded-md bg-[#31C57D]" />
            </div>
        </SectionWrapper>
    )
}
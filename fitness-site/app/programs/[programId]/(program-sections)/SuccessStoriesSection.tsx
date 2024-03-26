import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import React from "react";
import Image from "next/image";
import TestImage from '../../../../public/HeroTestTest.jpg'
import { TestimonialCard, TestimonialCardsSection } from "@/app/about/page";

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
                {[1,2].map(element =>
                <TestimonialCard key={element} />  
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

const programSuccessStories = [
    {
        id: 1,
        personName: 'Igor Bogzmec',
        story: `There is no program out there like this one. Is it insanely intense? Yes. Is the nutrition unique 
        and different? Of course. This is not meant to be a long-term, every-day lifestyle program. I was 
        205 pounds before I started and after the 28 days were over, I weighed 175 pounds at 8 percent 
        body fat. Doing it with 100 percent effort is the only way you will see legendary results. It is 
        tough, but well worth it.`
    },
    {
        id: 2,
        personName: 'Igor Bogzmec',
        story: `In the last four weeks of MFT28, my biceps have grown from 13 to 14 inches, my body fat has 
        decreased significantly, and I'm feeling more of a man than I did before. Hats off to Greg Plitt.`
    },
    {
        id: 3,
        personName: 'Igor Bogzmec',
        story: `There is no program out there like this one. Is it insanely intense? Yes. Is the nutrition unique 
        and different? Of course. This is not meant to be a long-term, every-day lifestyle program. I was 
        205 pounds before I started and after the 28 days were over, I weighed 175 pounds at 8 percent 
        body fat. Doing it with 100 percent effort is the only way you will see legendary results. It is 
        tough, but well worth it.`
    },
]
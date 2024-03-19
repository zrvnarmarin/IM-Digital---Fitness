import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import React from "react";
import Image from "next/image";
import TestImage from '../../../../public/HeroTestTest.jpg'

export default function SuccessStoriesSection() {
    return (
        <SectionWrapper>
            <div className="flex flex-col gap-2">
                <h1 className="uppercase italic text-white text-2xl tracking-normal font-semibold">
                    Success Stories
                </h1>
                <p className=" text-white">
                    MFT-28 has changed thousands of lives. Here's what those who followed it have to say.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {programSuccessStories.map(story =>
                    <div key={story.id} className="w-full flex flex-col items-center gap-6">
                        <div className="relative">
                            <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-black opacity-10"></div>
                            <Image src={TestImage} alt="Image" />
                            <div className="w-full flex justify-center absolute bottom-2 left-2">
                                <p className="rounded-full p-2 normal-case bg-gradient-to-r from-[#1D7349] to-[#31C57D] py-2 px-4 text-white">
                                    {story.personName}
                                </p>
                            </div>
                        </div>
                        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
                            {story.story}
                        </p>
                    </div>
                )}
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
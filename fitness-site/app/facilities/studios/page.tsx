import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import TestImage from '../../../public/model2.png'

//TO DO: napisati copy za svaki od ovih studija i napraviti posebne rute za njih, ili staviti alternativu da se vidi timetable samo

export default function Page() {
    return (
        <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
            <HeroSection />
            <ListOfStudios />
        </main>
    )
}

export function HeroSection() {
    return (
      <div className="w-full">
        <h1 className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
          Studios
        </h1>
        <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
          Engage in one of our studios
        </p>
      </div>
    );
}

export function ListOfStudios() {
    return (
        <SectionWrapper>
            <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">Studios</h1>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga esse maxime officia vitae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi sit esse molestiae debitis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit illo quo eligendi sunt odio quidem?
            </p>
            <ul className="grid grid-cols-1 gap-6">
                {studiosArray.map((studioData) => (
                    <StudioCard
                        key={studioData.id}
                        studioData={studioData}
                    />
                ))}
            </ul>
        </SectionWrapper>
    )
}

export const StudioCard = ({ studioData }: { studioData: StudioDataType }) => {
    return (
      <li className="group cursor-pointer grid grid-cols-2 rounded-lg p-6 gap-6 bg-gradient-to-r from-[#101010] to-[#161616] hover:from-[#101010] hover:to-[#292929] border border-[#292929] duration-900">
        <div
          className="relative flex flex-col gap-8 p-8 py-10 bg-[#111111] items-center justify-center"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image src={TestImage} layout="fill" objectFit="cover" alt="image" />
          </div>
        </div>
        <div className="flex items-center justify-center text-white">
            {/* Text Content */}
          <div className="relative z-10 flex flex-col gap-6 items-center justify-center">
            <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] leading-7 font-semibold">
                {studioData.title}
            </p>
            <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
              {studioData.description}
            </p>
            <div className="w-full flex items-center justify-end">
                <button className="border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
                    See Timetable
                </button>
            </div>
          </div>
        </div>
      </li>
    );
};

export type StudioDataType = {
    id: number;
    title: string;
    description: string;
}

const studiosArray: StudioDataType[] = [
    {
        id: 1,
        title: 'Strength and conditioning',
        description: 'Team challenges, partner workouts and you-go, I-go efforts. Strength and Conditioning is for the team. Let the room fuel your movements and drive each other on. The group’s energy is your energy.'
    },
    {
        id: 2,
        title: 'Yoga',
        description: 'Team challenges, partner workouts and you-go, I-go efforts. Strength and Conditioning is for the team. Let the room fuel your movements and drive each other on. The group’s energy is your energy.'
    },
    {
        id: 3,
        title: 'Pilates',
        description: 'Team challenges, partner workouts and you-go, I-go efforts. Strength and Conditioning is for the team. Let the room fuel your movements and drive each other on. The group’s energy is your energy.'
    }
]
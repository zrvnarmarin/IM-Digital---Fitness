import React from "react";
import Link from "next/link";
import { DotsImage, TwoHumansIcons } from "@/public/Icons";
import Image from "next/image";
import ExampleImage from "../../public/homePageSecondImage.jpg";

export default function TheClassYouWillGetThereSection() {
  return (
    <section className="flex flex-col md:flex-row  bg-[#111111] mt-24">

      <h1 className="uppercase font-normal text-white text-2xl tracking-wider w-full px-6 md:px-8 lg:px-24 pt-12 pb-12">
        Fitness All About
      </h1>

      <div className="w-full px-6 md:px-8 lg:px-24 pl-8 pb-24 grid grid-cols-1 xl:grid-cols-2 gap-8">
      
        <div className="text-white flex items-center justify-center">
          <div className="relative flex items-center justify-center group h-full w-full rounded-xl  cursor-pointer">
            <Image
              priority
              src={ExampleImage}
              alt="alt"
              // fill={true} slika s ovim propertijem ocito zauzima mjesta koliko mu flexbox sirina i njegova visina dopustaju
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 py-8 relative">
          {/* <div className="absolute right-0 top-0 z-30 hidden md:block">
            <DotsImage />
          </div> */}
          {/* <h1 className="uppercase font-normal text-white text-2xl tracking-wider">
            Explore Our Program
          </h1> */}
          <ul className="flex flex-col gap-6">
            {secondSectionCardsData.map(card =>
              <SecondHomeSectionCard key={card.id} card={card} />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export const SecondHomeSectionCard = ({ card } : { card: SeconSectionCardType }) => {
  return (
    <li
      //#1F2125
      className="group flex flex-col md:flex-row gap-8 rounded-md bg-[#111111] duration-100 hover:bg-[#161616] py-2 px-6"
    >
      <div className="flex gap-4 items-center">
        <div className="border border-[#1D7349] group-hover:border-white group-hover:bg-white duration-100 rounded-md p-4 md:p-6 lg:p-10">
          <span className="text-[#1D7349]">{card.icon}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row md:flex-col items-center md:items-start">
          {/* <div className=" bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div> */}
          <p className="font-semibold text-[#1D7349] text-lg md:text-xl lg:text-2xl tracking-wide uppercase">
            {card.mainTitle}
          </p>
        </div>
        <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-normal">
          {card.description}
        </p>
      </div>
    </li>
  );
};

export type SeconSectionCardType = {
  icon: string; //za sad
  mainTitle: string;
  description: string;
}

const secondSectionCardsData = [
  {
    id: 1,
    icon: 'Icon',
    mainTitle: 'Bodybuilding training',
    description: 'This is a placeholder text and where it will be something eventually written his is a placeholder text and where it will be something eventually written.'
  },{
    id: 2,
    icon: 'Icon',
    mainTitle: 'Cardiovascular training',
    description: 'This is a placeholder text and where it will be something eventually written this is a placeholder text and where it will be something eventually written.'
  },{
    id: 3,
    icon: 'Icon',
    mainTitle: 'CrossFit training',
    description: 'This is a placeholder text and where it will be something eventually written this is a placeholder text and where it will be something eventually written.'
  }
]
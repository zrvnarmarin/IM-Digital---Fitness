import React from "react";
import CardioIcon from '../../public/jumping-rope-svgrepo-com.png'
import Image, { StaticImageData } from "next/image";
import ExampleImage from "../../public/desktop-wallpaper-muscles-black-women-body-building.jpg";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function TheClassYouWillGetThereSection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-normal text-white text-2xl tracking-wider w-full">
        The Class You Will Get There
      </h1>

      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-8">
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
        <div className="flex flex-col gap-6 relative">
          <ul className="flex flex-col gap-6">
            {secondSectionCardsData.map((card) => (
              <SecondHomeSectionCard key={card.id} card={card} />
            ))}
          </ul>
        </div>
      </div>

      {/* <div className=" grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6 py-8 relative">
          <ul className="flex flex-col gap-6">
            {secondSectionCardsData.map((card) => (
              <SecondHomeSectionCard key={card.id} card={card} />
            ))}
          </ul>
        </div>
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
      </div> */}
    </SectionWrapper>
  );
}

export const SecondHomeSectionCard = ({
  card,
}: {
  card: SeconSectionCardType;
}) => {
  return (
    <li
      //#1F2125
      className="group flex flex-col md:flex-row gap-8 rounded-md bg-[#111111] duration-100 hover:bg-[#161616] py-2 px-6"
    >
      <div className="flex gap-4 items-center">
        <div className="border border-[#1D7349] group-hover:border-white group-hover:bg-white duration-100 rounded-md p-4 md:p-6 lg:p-10">
          <span className="text-[#1D7349]"><Image src={card.icon} width={20} height={20} alt="share_icon" /></span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row md:flex-col items-center md:items-start">
          {/* <div className=" bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div> */}
          <p className="font-semibold text-[#1D7349] text-lg md:text-xl lg:text-2xl tracking-wide uppercase">
            {card.mainTitle}
          </p>
        </div>
        <p className="normal-case tracking-wider text-md md:text-lg text-gray-300 leading-2 font-medium">
          {card.description}
        </p>
      </div>
    </li>
  );
};

export type SeconSectionCardType = {
  icon: StaticImageData; 
  mainTitle: string;
  description: string;
};

const secondSectionCardsData = [
  {
    id: 1,
    icon: CardioIcon,
    mainTitle: "Bodybuilding training",
    description:
      "This is a placeholder text and where it will be something eventually written his is a placeholder text and where it will be something eventually written.",
  },
  {
    id: 2,
    icon: CardioIcon,
    mainTitle: "Cardiovascular training",
    description:
      "This is a placeholder text and where it will be something eventually written this is a placeholder text and where it will be something eventually written.",
  },
  {
    id: 3,
    icon: CardioIcon,
    mainTitle: "CrossFit training",
    description:
      "This is a placeholder text and where it will be something eventually written this is a placeholder text and where it will be something eventually written.",
  },
];

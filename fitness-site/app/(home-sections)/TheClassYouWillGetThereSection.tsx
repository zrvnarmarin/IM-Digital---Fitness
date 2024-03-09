import React from "react";
import CardioIcon from '../../public/jumping-rope-svgrepo-com.png'
import Image, { StaticImageData } from "next/image";
import ExampleImage from "../../public/CardioBlastImage.jpg";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function TheClassYouWillGetThereSection() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
        The Class You Will Get There
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-white flex items-center justify-center">
          <div className="relative flex items-center justify-center group h-full w-full rounded-xl cursor-pointer">
            <Image
              priority
              src={ExampleImage}
              alt="alt"
              fill={true}
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
      className="group flex flex-row gap-4 rounded-lg p-6 bg-gradient-to-r from-[#101010] to-[#161616] hover:from-[#101010] hover:to-[#292929] border border-[#292929] duration-900"
    >
      <div className="flex gap-4 items-center">
        <div className="border border-[#31C57D] group-hover:border-white group-hover:bg-white rounded-md p-4 md:p-6 lg:p-10">
          <span className="text-[#1D7349]"><Image src={card.icon} width={20} height={20} alt="share_icon" /></span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row md:flex-col items-center md:items-start">
          {/* <div className=" bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div> */}
          <p className="w-full text-xl md:text-xl lg:text-xl tracking-normal text-start text-[#31C57D] group-hover:text-[#C57D31] leading-7 font-semibold">
            {card.mainTitle}
          </p>
        </div>
        <p className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
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
    color: '#31C57D',
    description:
      "This is a placeholder text and where it will be something eventually written his.",
  },
  {
    id: 2,
    icon: CardioIcon,
    mainTitle: "Cardiovascular training",
    color: '#C57D31',
    description:
      "This is a placeholder text and where it will be something eventually written his.",
  },
  {
    id: 3,
    icon: CardioIcon,
    color: '#7D31C5',
    mainTitle: "CrossFit training",
    description:
      "This is a placeholder text and where it will be something eventually written his.",
  },
];

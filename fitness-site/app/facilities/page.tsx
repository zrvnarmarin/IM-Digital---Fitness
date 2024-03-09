import SectionWrapper from "../components/wrappers/SectionWrapper";
import TestImage from '../../public/gym.avif'
import SwimmingFacilityCardImage from '../../public/SwimmingFacilityCard.jpg'
import StudiosFacilityCardImage from '../../public/StudiosFacilityCard.jpg'
import CyclingFacilityCardImage from '../../public/CyclingFacility.jpg'
import WelnessAndSpaCardImage from '../../public/WelnessAndSpaCard.jpg'
import FoodieCardImage from '../../public/FoodieFacilityCard.jpg'
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
      <HeroSection />
      <AboutFacilities />
      <FacilitiesSection facilities={facilities} />
    </main>
  );
}

export function HeroSection() {
  return (
    <div className="w-full">
      <h1 className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
        Facilities
      </h1>
      <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
        See All Facilities
      </p>
    </div>
  );
}

export function AboutFacilities() {
  return (
    <SectionWrapper>
      <h1 className="uppercase font-semibold text-white text-2xl tracking-wider w-full">
        Facilities
      </h1>
      <h2 className="normal-case text-md md:text-md text-gray-300 leading-2 font-normal">
        On the gym floor, in a class or in the pool. It all counts.
      </h2>
    </SectionWrapper>
  )
}

const FacilitiesSection = ({ facilities } : { facilities: FacilityType[] }) => {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <FacilityCard facility={facility} key={facility.id} />
        ))}
      </ul>
    </SectionWrapper>
  )
}

export const FacilityCard = ({ facility }: { facility: FacilityType }) => {
  return (
    <Link href={`/facilities/${facility.href}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={facility.cardImageSrc}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>

        {/* On hover image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 transition duration-300 ease-in-out bg-black/20 text-white opacity-0 group-hover:opacity-100">
          <div className="flex flex-col items-center gap-8">
            <span className="font-black capitalize text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 duration-100">
              {facility.facilityName}
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 duration-100">
              Discover More
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export type FacilityType = {
  id: number;
  href: string;
  facilityName: string;
  cardImageSrc: StaticImageData;
}
  
  const facilities: FacilityType[] = [
    {
      id: 1,
      href: '/swimming',
      facilityName: 'swimming',
      cardImageSrc: SwimmingFacilityCardImage
    },
    {
      id: 2,
      href: '/studios',
      facilityName: 'studios',
      cardImageSrc: StudiosFacilityCardImage
    },
    {
      id: 3,
      href: '/cycle-studios',
      facilityName: 'cycle studios',
      cardImageSrc: CyclingFacilityCardImage
    },
    {
      id: 4,
      href: '/welness-and-spa',
      facilityName: 'welness and spa',
      cardImageSrc: WelnessAndSpaCardImage
    },
    {
      id: 5,
      href: '/gym',
      facilityName: 'gym',
      cardImageSrc: TestImage
    },
    {
      id: 6,
      href: 'Foodie',
      facilityName: 'foodie',
      cardImageSrc: FoodieCardImage
    }
  ]
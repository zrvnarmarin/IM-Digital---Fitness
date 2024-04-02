import SectionWrapper from "../components/wrappers/SectionWrapper";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import TestImage from '../../public/HeroTestTest.jpg'

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <FacilitiesSection facilities={facilities} />
    </main>
  );
}

const FacilitiesSection = ({ facilities } : { facilities: FacilityType[] }) => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-2">
          <p className=" italic uppercase text-xs tracking-wide font-medium w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-5 cursor-pointer text-white">
            Facilities
          </p>
          <h1 className="text-white text-7xl tracking-tight text-start font-bold">
            Facilities
          </h1>
          <p className="normal-case text-start text-md md:text-md text-gray-300 leading-2 pr-48">
            At Aeon Olympia Strength Gym, we pride ourselves on providing a world-class fitness facility
            equiped with a range of amenities to enhance your workout experience. Our goal is to create a
            comfortable and motivating environment where you can focus on your fitness journey. From
            state-of-the-art equipment to convenient services, our gym amenities are designed to cater to
            your needs.
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-8">
        {facilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export type FacilityType = {
  id: number;
  href: string;
  facilityName: string;
  description: string;
  cardImageSrc: StaticImageData;
}
  
const facilities: FacilityType[] = [
  {
    id: 1,
    href: '/swimming',
    facilityName: 'swimming',
    description: ` Dive into a world of aquatic bliss in our pristine swimming pool. Whether you're seeking a leisurely swim or a rigorous aquatic workout, our pool offers an invigorating experience for all.`,
    cardImageSrc: TestImage
  },
  {
    id: 2,
    href: '/studios',
    facilityName: 'studios',
    description: ` Ignite your passion for movement in our versatile studios. From high-intensity cardio to mind-body practices, our studio classes cater to a variety of fitness interests and levels.`,
    cardImageSrc: TestImage
  },
  {
    id: 4,
    href: '/massage',
    facilityName: 'Massage',
    description: ` Immerse yourself in a world of relaxation and rejuvenation at our Wellness and Spa facility. Indulge in a range of luxurious spa treatments designed to pamper your body and soothe your mind.`,
    cardImageSrc: TestImage
  },
  {
    id: 5,
    href: '/gym',
    facilityName: 'gym',
    description: ` Elevate your fitness journey in our state-of-the-art gym facility. Equipped with the latest exercise machines and free weights, our gym offers a dynamic environment for achieving your fitness goals.`,
    cardImageSrc: TestImage
  }
]

export function FacilityCard({ facility } : { facility: FacilityType}) {
  return (
    <Link 
      href={`/facilities/${facility.href}`}
      key={facility.id} 
      className="flex flex-col items-center rounded-lg p-10 bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929]"
    >
      <div className="grid grid-cols-2 gap-6">
        <Image
          className="object-cover rounded-lg w-full h-300 transform group-hover:scale-105 duration-300"
          src={facility.cardImageSrc}
          alt="Card Background"
          width={300}
          height={300} 
        />
        <Image
          className="object-cover rounded-lg w-full h-300 transform group-hover:scale-105 duration-300"
          src={facility.cardImageSrc}
          alt="Card Background"
          width={300}
          height={300} 
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between pt-6">
        <p className="w-full capitalize text-gray-200 text-2xl tracking-normal text-start font-semibold">
          {facility.facilityName}
        </p>
        <div className="flex flex-row items-center justify-between gap-4">
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">&larr;</button>
          <div className="flex flex-row justify-center gap-2">
            <span className="w-8 h-1 rounded-md bg-[#31C57D]" />
            <span className="w-8 h-1 rounded-md bg-[#31C57D]" />
            <span className="w-8 h-1 rounded-md bg-[#31C57D]" />
          </div>
          <button className="bg-gradient-to-r from-[#101010] to-[#161616] border border-[#292929] text-gray-300 px-4 py-3 rounded-lg text-xl font-bold">&rarr;</button>
        </div>
      </div>
      
      <p className="w-full normal-case text-md text-gray-300 leading-2 font-normal pt-4">
        {facility.description}
      </p>

      {/* TO DO: check with designer for the styling and is it really neccessary */}
      {/* <div className="w-full flex items-center justify-center">
        <button className="mt-6 w-fit bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-3xl py-2 px-4 cursor-pointer text-white">
          Discover More
        </button>
      </div> */}
    </Link>
  )
}
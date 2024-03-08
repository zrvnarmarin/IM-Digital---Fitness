import React from 'react'
import SectionWrapper from '../components/wrappers/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { LocationType } from '../types';
import ShareIcon from '../../public/share-arrow-svgrepo-com.png'
import { locations } from '../data/locations';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-4 bg-[#181a1f]">
      <HeroSection />
      <AboutLocations />
      <LocationsSection />
    </main>
  )
}

export function HeroSection() {
  return (
    <div className="w-full">
      <p className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
        Locations
      </p>
      <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
        See All Locations
      </p>
    </div>
  );
}

export function AboutLocations() {
  return (
    <SectionWrapper>
      <h1 className='uppercase font-semibold text-white text-2xl tracking-wider w-full'>Nesto nesto nesto nesto</h1>
      <p className='normal-case text-md md:text-md text-gray-300 leading-2 font-normal'>
          As the largest Croatian chain of fitness centers, we are always looking for new locations to expand in order to
          provide our members with even greater availability throughout Croatia.
          Gyms4you is a European concept of fitness centers with an excellent ratio 
          of quality service and price. We are open 24 hours a day, 365 days a year, and with one membership card, 
          our members can train in any of our gyms.
      </p>
    </SectionWrapper>
  )
}

export function LocationsSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg gap-6">
        {locations.map((location) => (
          <LocationCard 
              key={location.id} 
              location={location}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export const LocationCard = ({ location }: { location: LocationType }) => {
  return (
    <Link href={`/locations/${location.href}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={location.locationCardImageSrc}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>

        {/* Default text at bottom */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center p-4 bg-black/70 text-white z-10 group-hover:opacity-0 transition duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-4">
            <span className="w-full pt-4 text-xl md:text-xl lg:text-xl tracking-normal text-start text-white leading-7 font-semibold">
              {location.locationName}
            </span>
            <span className="w-full pt-4 text-xl md:text-xl lg:text-xl tracking-normal text-center text-white leading-7 font-semibold">
              {location.locationCity}
            </span>
            <button className="w-fit border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
             Gallery
            </button>
          </div>
        </div>

        {/* On hover text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 transition duration-300 ease-in-out bg-black/20 text-white opacity-0 group-hover:opacity-100 z-20">
          <div className="flex flex-col items-center gap-8">
            <span className="font-black capitalize text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 duration-100">
              {location.locationName}
            </span>
            <span className="font-black text-sm md:text-md lg:text-lg xl:text-xl text-gray-100 duration-100">
              {location.locationCity}
            </span>
            <button className="w-fit border-2 border-[#1D7349] rounded-3xl py-2 px-4 cursor-pointer text-white">
             View Details
            </button>
          </div>
        </div>

      </div>
    </Link>
  );
};
import React from "react";
import { locations } from './../../data/locations';
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { LocationType } from "@/app/types";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ShareIcon from '../../../public/share-arrow-svgrepo-com.png'

export default function Page({ params }: { params: { locationName: string } }) {
  const location = locations.find(location => params.locationName === location.href)

  return (
    <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
      <HeroSection locationName={location?.locationName} />
      <AboutLocation location={location} />
      <GallerySection />
    </main>
  );
}

export function HeroSection({ locationName } : { locationName: string | undefined }) {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-normal text-white text-2xl tracking-wider mr-4">
          {locationName}
        </h1>
      </div>
      <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
        Each Gyms4you fitness center will provide you with training according to the European concept, top equipment and the 
        possibility of training 24 hours a day. The opening of the gym in Sloboština
        was a response to the wishes and requests of our clients in Novi Zagreb, who have been training there since October 2022.
      </p>
    </SectionWrapper>
  );
}

export function AboutLocation({ location } : { location: LocationType | undefined }) {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-row items-center gap-6">
          <div className="rounded-full p-2 bg-green-900">
            <Image src={ShareIcon} width={40} height={40} alt="share_icon" />
          </div>
          <div className="flex flex-col items-start gap-2 text-white">
            <h2>
              Reception Working Hours
            </h2>
            <p>
              {location?.workingHours}
            </p>
            <p>
              Weekends and holidays closed.
            </p>
            <p>
              AEON OLYMPIA STRENGHT IS ALWAYS OPENED FOR OUR MEMBERS. 24/7, 365 DAYS A YEAR.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <div className="rounded-full p-2 bg-green-900">
            <Image src={ShareIcon} width={40} height={40} alt="share_icon" />
          </div>
          <div className="flex flex-col items-start gap-2 text-white">
            <h2>
              Address
            </h2>
            <p>
              {location?.address}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <div className="rounded-full p-2 bg-green-900">
            <Image src={ShareIcon} width={40} height={40} alt="share_icon" />
          </div>
          <div className="flex flex-col items-start gap-2 text-white">
            <h2>
              Telephone
            </h2>
            <p>
              +3859874568
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <div className="rounded-full p-2 bg-green-900">
            <Image src={ShareIcon} width={40} height={40} alt="share_icon" />
          </div>
          <div className="flex flex-col items-start gap-2 text-white">
            <h2>
              Email
            </h2>
            <p>
              {location?.email}
            </p>
          </div>
        </div>
      </ul>
    </SectionWrapper>
  )
}

const GallerySection = () => {
  return (
    <SectionWrapper>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <GallerySectionCard location={location} key={location.id} />
        ))}
      </ul>
    </SectionWrapper>
  )
}

export const GallerySectionCard = ({ location }: { location: LocationType }) => {
  return (
    <Link href={`/locations/${location.locationName}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md hover:scale-105 duration-300">
        <Image
          className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96"
          src={location.locationCardImageSrc}
          alt="Card Background"
          width={0}
          height={0}
        />
      </div>
    </Link>
  );
};
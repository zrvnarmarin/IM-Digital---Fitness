import React from "react";
import { locations } from './../../data/locations';
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";
import { LocationType } from "@/app/types";

export default function Page({ params }: { params: { locationName: string } }) {
    const location = locations.find(location => params.locationName === location.href)

  return (
    <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
        <HeroSection locationName={location?.locationName} />
        <AboutLocation location={location} />
    </main>
  );
}

export function HeroSection({ locationName } : { locationName: string | undefined }) {
    return (
      <div className="w-full">
        <h1 className="px-6 md:px-8 lg:px-24 text-[#F3F3F3] opacity-100 text-4xl md:text-6xl lg:text-8xl uppercase font-black text-start">
          {locationName}
        </h1>
        <p className="px-6 md:px-8 lg:px-24 uppercase font-normal text-[#1D7349] text-2xl tracking-wider">
          See All Locations
        </p>
      </div>
    );
}

export function AboutLocation({ location } : { location: LocationType | undefined }) {
    return (
        <SectionWrapper>
            <h1>
                Section
            </h1>
        </SectionWrapper>
    )
}
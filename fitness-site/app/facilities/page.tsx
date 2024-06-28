import SectionWrapper from "../components/wrappers/SectionWrapper";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import TestImage from "../../public/gym.avif";
import { RightArrow } from "../(home-sections)/OurTeam";

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-[#111317]">
      <FacilitiesSection facilities={facilities} />
    </main>
  );
}

const FacilitiesSection = ({ facilities }: { facilities: FacilityType[] }) => {
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
          At Aeon Olympia Strength Gym, we pride ourselves on providing a
          world-class fitness facility equiped with a range of amenities to
          enhance your workout experience.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-8">
        {facilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export type FacilityType = {
  id: number;
  href: string;
  facilityName: string;
  description: string;
  cardImageSrc: StaticImageData;
};

const facilities: FacilityType[] = [
  {
    id: 1,
    href: "/swimming",
    facilityName: "Swimming",
    description: ` Dive into a world of aquatic bliss in our pristine swimming pool. Whether you're seeking a leisurely swim or a rigorous aquatic workout, our pool offers an invigorating experience for all.`,
    cardImageSrc: TestImage,
  },
  {
    id: 2,
    href: "/studios",
    facilityName: "Studios",
    description: ` Ignite your passion for movement in our versatile studios. From high-intensity cardio to mind-body practices, our studio classes cater to a variety of fitness interests and levels.`,
    cardImageSrc: TestImage,
  },
  {
    id: 4,
    href: "/massage",
    facilityName: "Massage",
    description: ` Immerse yourself in a world of relaxation and rejuvenation at our Wellness and Spa facility. Indulge in a range of luxurious spa treatments designed to pamper your body and soothe your mind.`,
    cardImageSrc: TestImage,
  },
  {
    id: 5,
    href: "/gym",
    facilityName: "Gym",
    description: ` Elevate your fitness journey in our state-of-the-art gym facility. Equipped with the latest exercise machines and free weights, our gym offers a dynamic environment for achieving your fitness goals.`,
    cardImageSrc: TestImage,
  },
];

export const FacilityCard = ({ facility }: { facility: FacilityType }) => {
  return (
    <Link href={`/facilities/${facility.href}`}>
      <div className="relative group rounded overflow-hidden cursor-pointer shadow-md">
        {/* Background Image */}
        <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
          <Image
            className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transform group-hover:scale-105 duration-300"
            src={TestImage}
            alt="Card Background"
            width={0}
            height={0}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* On hover image */}
        <div className="absolute inset-0 p-4 transition duration-300 ease-in-out bg-gradient-to-r from-[#131313] to-[#191919]/10 text-white opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <button className="h3 flex items-center gap-2">
              <RightArrow />
              {facility.facilityName}
            </button>
            <div className="bg-black/30 absolute bottom-0 right-0 left-0 flex flex-row gap-2 items-center justify-center py-4 px-2">
              <span className="text-normal">
                <span className="text-[#24d17c] text-normal font-semibold">
                  300+
                </span>{" "}
                satisfied clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

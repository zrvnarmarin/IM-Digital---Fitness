import React from "react";
import Navbar from "./../../(home-sections)/Navbar";
import Image from "next/image";
import GymImage from "../../../public/gym.avif";
import { formatString } from "@/app/utils/helpers";
import { programs } from "@/app/data";
import YogaImage from "../../../public/yoga-program.avif";
import Link from "next/link";
import { RightIcon } from "@/public/Icons";

export default function Page({ params }: { params: { programId: string } }) {
  const program = programs.find(
    (program) => program.title === params.programId
  );

  return (
    //ovdje ispod u main tag stavi min-h-screen ako zelis veliki razmak izmedju ovog i footera
    <main className="flex flex-col items-center lg:py-4 bg-[#111317]">
      <Navbar />
      <p className="text-[#FFFFFF] text-center text-6xl md:text-8xl lg:text-9xl uppercase font-black">
        {formatString(params.programId)}
      </p>

      <section className="text-white px-6 md:px-8 lg:px-24 pl-8 py-16 lg:py-24 flex flex-col gap-12">
        <div>
          <p>
            Yoga, an ancient practice that originated in India, is a holistic
            approach to physical, mental, and spiritual well-being. Rooted in a
            philosophy that seeks harmony and balance, yoga encompasses a
            diverse range of practices, each offering unique benefits for
            individuals of all ages and fitness levels.
          </p>
          <br />
          <p>
            At its core, yoga combines physical postures (asanas), breath
            control (pranayama), meditation, and ethical principles to promote
            overall health and inner peace. The practice is not just a form of
            exercise; it's a journey that encourages self-discovery and
            mindfulness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={YogaImage} alt="image" width={0} height={0} />
          <div className="flex flex-col gap-2 lg:justify-around lg:gap-0 md:py-2">
            <h2 className="text-center">Benefits Of Yoga</h2>
            <ul>
              {obj?.benefits.map((benefit) => (
                <li key={benefit} className="px-2">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-start text-xl">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {obj.categories.map((category) => (
              <ProgramCategoryCard
                key={category.name}
                name={category.name}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const obj = {
  title: "Yoga Practices",
  href: "/programs/yoga-practices",
  description: "Discover harmony and flexibility through our Yoga program. ",
  duration: "8 weeks",
  intensity: "Low",
  image: YogaImage,
  benefits: [
    "Flexibility: Improves range of motion and reduces stiffness.",
    "Strength: Engages various muscle groups, promoting overall body strength.",
    "Balance: Enhances stability and core strength through balancing poses.",
    "Stress Reduction: Incorporates mindfulness and relaxation techniques.",
  ],
  categories: [
    {
      name: "Hatha Yoga",
      description: "Focuses on physical postures and breathing exercises.",
    },
    {
      name: "Vinyasa Yoga",
      description: "Emphasizes flowing movements synchronized with breath.",
    },
    {
      name: "Ashtanga Yoga",
      description:
        "Follows a set sequence of postures with a focus on breath and movement.",
    },
    {
      name: "Bikram Yoga",
      description:
        "Practiced in a heated room, consists of a fixed sequence of 26 postures.",
    },
    {
      name: "Yin Yoga",
      description:
        "Involves passive, long-held poses to target connective tissues.",
    },
    {
      name: "Kundalini Yoga",
      description:
        "Aims to awaken spiritual energy through breath, mantra, and postures.",
    },
  ],
};

export function ProgramCategoryCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-8  shadow-md shadow-slate-700">
      <Image src={YogaImage} alt="program_image" width={0} height={0} className="overflow-hidden" />
      <div className="flex flex-col gap-2 px-6 pb-6">
        <div className="flex gap-4 items-center">
        
          <p className="flex-1 text-md md:text-lg lg:text-xl text-white leading-7 font-semibold">
            {name}
          </p>
        </div>
        <p className="flex-1 text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          {description}
        </p>
        <Link href={"/join-now"} className="flex gap-4 items-center">
          <p className="text-md flex items-center gap-2 lg:text-lg text-white leading-2 font-medium">
            Book Now
            <RightIcon strokeOne="#FFFFFF" strokeTwo="#FFFFFF" />
          </p>
        </Link>
      </div>
    </div>
  );
}

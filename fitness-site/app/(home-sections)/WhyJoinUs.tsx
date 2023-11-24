import React from "react";
import Image from "next/image";
import { TwoHumansIcons } from "@/public/Icons";
import { CameraIcon } from "@/public/Icons";
import { CalendarIcon } from "@/public/Icons";
import ExampleImage from "../../public/AboutUsHeroImage.avif";

export default function WhyJoinUs() {
  return (
    <section className="w-full px-6 md:px-8 lg:px-24 pl-8 pb-24 pt-8 flex flex-col gap-8">
      <h1 className="uppercase font-bold text-white text-3xl">Why Join Us</h1>
      <p className="text-md text-gray-300 leading-2 font-normal pt-4">
        We have experience serving members in helping body fitness, and under
        the guidance of a professional trainer
      </p>
      <div className="pt-10">
        <div className="relative h-[24rem] w-full p-12 overflow-hidden cursor-pointer">
          <Image
            priority
            src={ExampleImage}
            alt="alt"
            fill={true}
            className="object-cover rounded-t-2xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
          {reasonsToJoin.map((programCard) => (
            <ReasonToJoinCard
              key={programCard.title}
              title={programCard.title}
              description={programCard.description}
              icon={programCard.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReasonToJoinCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: () => JSX.Element;
}) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-[#1F2125]">
      <div className="flex gap-4 items-center">
        <div className="bg-[#1D7349] rounded-xl p-2 w-fit">{icon()}</div>
        <p className="text-xl text-white leading-2 font-medium">{title}</p>
      </div>
      <p className="text-md text-gray-300 leading-2 font-normal">
        {description}
      </p>
    </div>
  );
}

const reasonsToJoin = [
  {
    title: "Professional Trainer",
    description: "We have professional trainers to help you",
    icon: TwoHumansIcons,
  },
  {
    title: "Practice Videos",
    description:
      "Maintain body fitness by doing physical exercise at least 2-3 time a week",
    icon: CameraIcon,
  },
  {
    title: "Good Management",
    description:
      "Aim to reduce fat as much as possible from the body to about 2-4%",
    icon: CalendarIcon,
  },
];

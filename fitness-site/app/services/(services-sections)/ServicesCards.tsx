import React, { useState } from "react";
import { services } from "@/app/data";
import { HeartIcon } from "@/public/Icons";

export default function ServicesCards() {
  const [isAccordionShown, setIsAccordionShown] = useState(false);

  return (
    <section className="flex flex-col gap-2 text-white text-center w-full">
      <div className="px-6 md:px-8 lg:px-24">
        <h2 className="uppercase text-start font-normal text-white text-2xl tracking-wider">
          Forge Programs Include
        </h2>
        <p className="uppercase font-normal text-start text-[#1D7349] text-xs tracking-wider">
          WORKOUTS FOR HOME, GYM OR PRETTY MUCH ANYWHERE!
        </p>
      </div>
      <div className="px-6 pt-8 pb-24 md:py-16 lg:py-24 grid gap-16 grid-cols-1 bg-[#111317]S">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSetIsAccordionShwon={setIsAccordionShown}
            isAccordionShown={isAccordionShown}
          />
        ))}
      </div>
    </section>
  );
}

export const ServiceCard = ({
  service,
  isAccordionShown,
  onSetIsAccordionShwon,
}: {
  service: Service;
  isAccordionShown: boolean,
  onSetIsAccordionShwon: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-2">
        <div className="mb-2 rounded-full w-fit cursor-pointer border-2 border-[#1D7349] p-1 hover:bg-white hover:scale-125 duration-200">
          <HeartIcon />
        </div>
        <h2 className="uppercase text-start font-normal text-white text-3xl tracking-wider">
          {service.type}
        </h2>
        <p className=" font-normal text-start text-[#1D7349] text-md tracking-wider">
          {service.calls}
        </p>
        <p className="tracking-wider leading-2 text-start text-xl text-white py-4">
          {service.cost}
        </p>
        <p className="text-start normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
          {service.details}
        </p>
        <div
          onClick={(e) => {
            onSetIsAccordionShwon((prev) => !prev);
          }}
          className="flex items-center justify-between gap-6 cursor-pointer my-2 cursor-pointe border-white border-b-[1px] py-2"
        >
          <h3 className="tracking-wider leading-2 text-start text-xl text-white py-4">
            View Program Details
          </h3>
          {isAccordionShown ? (
            <p className="text-4xl font-medium md:font-semibold text-[#1D7349]">
              -
            </p>
          ) : (
            <p className="text-4xl font-medium md:font-semibold text-[#1D7349]">
              +
            </p>
          )}
        </div>
        {isAccordionShown ? (
          <div className="flex flex-col gap-4 pl-2 font-normal text-gray-400 text-md lg:text-lg py-2">
            <h2 className="text-start text-lg text-white">The program</h2>
            <p className="text-start normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              {service.program}
            </p>
            <h2 className="text-start text-lg text-white">Meal Plan</h2>
            <p className="text-start normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              {service.mealPlan}
            </p>
          </div>
        ) : null}
        <div>
          <button className="mt-8 uppercase text-white hover:scale-105 text-lg lg:text-xl xl:text-2xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-2 rounded-full">
            Join Now
          </button>
        </div>
      </div>
      {/* <div className="flex items-center justify-center text-5xl bg-[#111317]">
                <p className="bg-[#1D7349] rounded-full font-bold p-24">
                  {service.id}
                </p>
              </div> */}
    </div>
  );
};

export type Service = {
  id: number;
  type: string;
  calls: string;
  cost: string;
  details: string;
  program: string;
  mealPlan: string;
};

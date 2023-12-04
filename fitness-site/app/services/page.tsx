"use client";

import React, { useState } from "react";
import Navbar from "../(home-sections)/Navbar";
import Image, { StaticImageData } from "next/image";
import { HeartIcon } from "@/public/Icons";
import HeroSection from "./(services-sections)/HeroSection";
import AboutServicesSection from "./(services-sections)/AboutServicesSection";
import ServicesPerksSection from "./(services-sections)/ServicesPerksSection";
import VideoTestimonialsSection from "./(services-sections)/VideoTestimonialsSection";
import ServicesCards from "./(services-sections)/ServicesCards";

export default function Page() {
  const [isAccordionShown, setIsAccordionShown] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <HeroSection />
      <AboutServicesSection />

      {/* Make this better section - ovdje idu ikone  */}
      <ServicesPerksSection />

      {/* Sekcija za testimoniale. Mozda mogu ici neki videi ili jednostavno povucem testimonialse u obliku teksta */}
      <VideoTestimonialsSection />

      {/* Sekcija za services */}
      <ServicesCards />
      {/* <p className="font-normal text-center text-white text-xs tracking-wider">
        Strength Ipsum
      </p> */}
    </main>
  );
}


import React from "react";
import Navbar from "@/app/(home-sections)/Navbar";
import { QuotationMark } from "@/public/Icons";
import { TestimonialsSection } from "./(testimonials-sections)/TestimonialsSection";
import HeroSection from "./(testimonials-sections)/HeroSection";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
    </main>
  );
}
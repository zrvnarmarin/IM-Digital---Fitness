import React from "react";
import { TestimonialsSection } from "./(testimonials-sections)/TestimonialsSection";
import HeroSection from "./(testimonials-sections)/HeroSection";
import { motion } from "framer-motion";

export default function Page() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <main
      className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#111317]"
    >
      <HeroSection />
      <TestimonialsSection />
    </main>
  );
}

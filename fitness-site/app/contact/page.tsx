import React from "react";
import { HeroSection } from './(contact-sections)/HeroSection';
import { ContactFormSection } from './(contact-sections)/ContactFormSection';
import { ContactInfoSection } from './(contact-sections)/ContactInfoSection';


export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center lg:pt-4 bg-[#111317]">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 lg:px-24 pl-8 py-24">
        <ContactFormSection />
        <ContactInfoSection />
      </div>
    </section>
  );
}

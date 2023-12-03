import React from "react";
import Navbar from "@/app/(home-sections)/Navbar";
import Image from "next/image";
import PhotoGallerySection from "./(photo-gallery-sections)/PhotoGallerySection";

export default function Page() {
  return (
    <main className="lg:pt-4 bg-[#111317]">
      <p className="text-[#FFFFFF] opacity-100 text-6xl md:text-8xl lg:text-9xl uppercase font-black px-6 md:px-8 lg:px-24 pt-24 pb-8 text-center">
        Gallery
      </p>
      <PhotoGallerySection />
    </main>
  );
}
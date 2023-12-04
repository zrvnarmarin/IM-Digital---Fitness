import React from 'react'
import { ImgContainer } from '@/app/about/photo-gallery/(photo-gallery-sections)/PhotoGallerySection'
import ServiceImageOne from '../../../public/ServiceImageOne.avif'

export default function VideoTestimonialsSection() {
  return (
    <section className="w-full py-12">
        <div className="px-6 md:px-8 lg:px-24">
          <h2 className="uppercase text-start font-normal text-white text-2xl tracking-wider">
            Real Life. Real People. Real Results.
          </h2>
          <p className="uppercase font-normal text-start text-[#1D7349] text-xs tracking-wider">
            See what some of our clients have to say
          </p>
        </div>
        <section className="px-6 md:px-8 lg:px-24 py-8 gap-4 grid grid-cols-1 sm:grid-cols-3 justify-center">
          <ImgContainer  />
          <ImgContainer  />
          <ImgContainer  />
        </section>
      </section>
  )
}

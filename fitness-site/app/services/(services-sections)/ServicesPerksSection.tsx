import React from 'react'
import { ImgContainer } from '@/app/about/photo-gallery/(photo-gallery-sections)/PhotoGallerySection'
import ServiceImageOne from '../../../public/ServiceImageOne.avif'

export default function ServicesPerksSection() {
  return (
    <section className="w-full">
        <div className="px-6 md:px-8 lg:px-24">
          <h2 className="uppercase text-start font-normal text-white text-2xl tracking-wider">
            We specialize in you
          </h2>
          <p className="uppercase font-normal text-start text-[#1D7349] text-xs tracking-wider">
            WORKOUTS FOR HOME, GYM OR PRETTY MUCH ANYWHERE!
          </p>
        </div>
      </section>
  )
}

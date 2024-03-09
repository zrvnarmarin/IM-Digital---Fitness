import React from 'react'
import ServicesIlustration from '../../../public/ServiceIlustration.png'

export default function AboutServicesSection() {
  return (
    <section className="px-6 md:px-8 lg:px-24 pl-8 py-24 gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-normal text-white text-2xl tracking-wider">
              Online Personal Training
            </h1>
            <p className="normal-case tracking-wider text-md md:text-md lg:text-lg text-gray-300 leading-2 font-normal">
              Forge fitness and nutrition coaching programs are based on your
              current condition and ultimate goal while considering your access
              to workout equipment, experience, and food preferences. Your
              program is conveniently delivered right to your mobile device.
              Track your stats, earn badges, and communicate with your coach
              with the in-app messenger. Select a plan below that meets your
              one-on-one coaching needs. Cancel anytime 10 days prior to your
              billing.
            </p>
          </div>
        </div>
      </section>
  )
}

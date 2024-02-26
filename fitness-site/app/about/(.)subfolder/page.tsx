'use client'

import { LogoImage } from '@/app/(home-sections)/Navbar'
import Modal from '@/app/components/Modal'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlackLogoImage from '../../../public/logo-black.png'

export default function InterceptedSubfolderPage() {
  return (
    <Modal>
      <section className='flex flex-col gap-6 bg-white'>
        <div className='flex justify-center'>
            <Image src={BlackLogoImage} width={70} height={70} alt='logo_image' />
        </div>
        <form className="flex flex-col gap-10 bg-[#1F2125] p-6 rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-300">Remember me</label>
            </div>
            <Link href="/forgot-password">
              <p className="text-gray-300">Forgot Password</p>
            </Link>
          </div>
          <div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="john doe"
                className="mt-1 p-2 w-full rounded-md text-gray-300 tracking-wider border-slate-700 border bg-[#111317]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="normal-case tracking-wider text-sm md:text-md lg:text-lg text-gray-300 leading-2 font-normal"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@gmail.com"
                className="mt-1 p-2 w-full rounded-md text-gray-300 tracking-wider border-slate-700 border bg-[#111317]"
              />
            </div>
          </div>
          <div className="pt-16 md:pt-32 flex justify-center">
            <Link
              href="/programs"
              className="text-white hover:scale-105 text-lg lg:text-xl xl:text-2xl font-normal leading-10 tracking-wider bg-[#1D7349] hover:bg-[#34a26d] px-10 py-1 rounded-full"
            >
              Send A Message
            </Link>
          </div>
        </form>
      </section>
    </Modal>
  )
}

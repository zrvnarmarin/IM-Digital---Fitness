import React from 'react';
import Navbar from '@/app/(home-sections)/Navbar';
import Footer from '@/app/Footer';

export default function ContactSection() {
  return (
    <section className='flex flex-col items-center justify-center lg:pt-4 bg-[#111317]'>
      <Navbar />
      <div className='px-8 pt-12 pb-6'>
        <HeroSection />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 px-8'>
        <ContactFormSection />
        <ContactInfoSection />
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <div>
      <h1 className='font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFFFFF] leading-10 mb-6'>
        Contact Us
      </h1>
      <p className='text-[#bcd3d5] text-center text-md sm:text-lg leading-7 mb-8'>
        Have questions or need assistance? Feel free to reach out to our team. We are here to help you.
      </p>
    </div>
  );
}

export function ContactFormSection() {
  return (
    <form className='bg-[#1F2125] p-6 rounded-md shadow-md'>
      <h2 className='text-xl text-white font-bold mb-4'>Send us a Message</h2>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-sm font-medium text-[#FFFFFF]'>Your Name</label>
        <input type='text' id='name' name='name' className='mt-1 p-2 w-full border rounded-md' />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium text-[#FFFFFF]'>Your Email</label>
        <input type='email' id='email' name='email' className='mt-1 p-2 w-full border rounded-md' />
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-sm font-medium text-[#FFFFFF]'>Your Message</label>
        <textarea id='message' name='message' rows={4} className='mt-1 p-2 w-full border rounded-md'></textarea>
      </div>
      <div>
        <button className='bg-[#1D7349]  hover:bg-[#34a26d] text-white hover:scale-105 lg:text-lg xl:text-xl font-semibold leading-7 shadow-2xl duration-100 px-8 py-4 rounded-md'>Send Message</button>
      </div>
    </form>
  );
}

export function ContactInfoSection() {
  return (
    <div className='bg-[#1F2125] p-6 rounded-md shadow-md'>
      <h2 className='text-xl font-bold mb-4 text-white'>Contact Information</h2>
      <p className='mb-2 text-white'>
        <span className='font-semibold text-white'>Address:</span> 123 Main Street, Cityville, Country
      </p>
      <p className='mb-2 text-white'>
        <span className='font-semibold text-white'>Phone:</span> +1 (123) 456-7890
      </p>
      <p className='mb-2 text-white'>
        <span className='font-semibold text-white'>Email:</span> info@example.com
      </p>
      <p className='mb-2 text-white'>
        <span className='font-semibold text-white'>Business Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM
      </p>
    </div>
  );
}

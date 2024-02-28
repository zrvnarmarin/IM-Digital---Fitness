import Modal from '@/app/components/Modal'
import { instructors } from '@/app/data/instructors'
import React from 'react'
import Image from 'next/image'
import { InstructorType } from '@/app/types'
import { AvailabilitySlot } from './AvailabilitySlot'
import AvailabilitySection from './AvailabilitySection'

export default function InstructorAvailability({ params }: { params: { instructorId: string } }) {
  const instructor = instructors.find(instructor => String(instructor.href) === params.instructorId)

  return (
    <Modal>
      <div className='flex flex-col gap-6 bg-[#111111] px-12 py-4 overflow-auto'>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <Image src={instructor?.imageSrc} alt='instructor_image' height={150} width={150} />
          <div className='flex flex-col'>
            <p className='w-full text-xl md:text-xl lg:text-3xl tracking-normal text-start text-white leading-7 font-semibold'>
              {instructor?.name}
            </p>
            <ul className='flex flex-row items-center gap-2'>
              {instructor?.specializations.map(certification =>
                <li>
                  <p className='font-normal text-white text-md tracking-wider w-fit bg-[#1D7349] px-4 rounded'>
                    {certification}
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
        <AvailabilitySection instructor={instructor} />
      </div>
    </Modal>
  )
}


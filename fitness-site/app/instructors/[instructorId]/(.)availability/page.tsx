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
      <div className='px-12 py-4 overflow-auto'>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <Image src={instructor?.imageSrc} alt='instructor_image' height={150} width={150} />
          <div className='flex flex-col'>
            <p>{instructor?.name}</p>
            <ul className='flex flex-row items-center gap-2'>
              {instructor?.specializations.map(certification =>
                <li>
                  <p className='text-md text-white rounded border border-white p-2'>{certification}</p>
                </li>
              )}
            </ul>
          </div>
        </div>
        <p className='text-white text-xl'>{params.instructorId} This is intercepted instructor availability modal</p>
        <AvailabilitySection instructor={instructor} />
      </div>
    </Modal>
  )
}


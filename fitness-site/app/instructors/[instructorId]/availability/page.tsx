import { instructors } from '@/app/data/instructors'
import React from 'react'

export default function Page({ params }: { params: { instructorId: string } }) {
  return (
    <div>
      Instructor availability {params.instructorId}, {JSON.stringify(instructors.find(i => i.href === params.instructorId)?.availability)}
    </div>
  )
}

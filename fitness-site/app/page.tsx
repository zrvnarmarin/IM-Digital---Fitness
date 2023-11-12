import Image from 'next/image'
import Navbar from './(home-sections)/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-8 bg-[#d0ecf4]">
      <Navbar />
    </main>
  )
}

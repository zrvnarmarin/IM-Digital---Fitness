import type { Metadata } from 'next'
import { Inter, Montserrat, Bebas_Neue, Gorditas, Oswald } from 'next/font/google'
import './globals.css'
import Footer from './Footer'
import Sidebar from './components/Sidebar'
import Navbar from './(home-sections)/Navbar'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin']})
const bebasNeue = Oswald({
  subsets: ['latin'],
  weight: '400'
})


export const metadata: Metadata = {
  title: 'Aeon Olympia Strenght | When Strength Overcomes',
  description: 'Aeon Olympia Strenght',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        {/* <Navbar /> */}
        {children}
        <Footer />
        {/* <Sidebar />  */}
      </body>
    </html>
  )
}
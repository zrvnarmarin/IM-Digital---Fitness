import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Footer from './Footer'
import Sidebar from './components/Sidebar'
import Navbar from './(home-sections)/Navbar'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin']})

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
      <body className={montserrat.className}>
        {children}
        <Footer />
        {/* <Sidebar />  */}
      </body>
    </html>
  )
}
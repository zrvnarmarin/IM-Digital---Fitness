import type { Metadata } from "next";
import { Inter, Montserrat, League_Spartan, Saira } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import NavigationWrapper from "./components/NavigationWrapper";

// const inter = League_Spartan({ subsets: ['latin'] })
// const saira = Saira({
//   subsets: ['latin'],
//   weight: '400'
// })
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aeon Olympia Strenght | When Strength Overcomes",
  description: "Aeon Olympia Strenght",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} m-0`}>
        <NavigationWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}

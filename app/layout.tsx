import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'James Niyongira | Software Developer',
  description: 'Seasoned web applications developer, remarkable at shipping clean and maintainable code.',
    icons: {
        icon: './favicon.ico',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-300`}>
      {/*<Navbar/>*/}
      <AppHeader/>
      {children}
<AppFooter/>
      </body>
    </html>
  )
}

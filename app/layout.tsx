import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'James Niyongira - Portfolio',
  description: 'James Niyongira is a web developer based in Ottawa, Canada. He is passionate about building web applications that marry function and beauty.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-300`}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}

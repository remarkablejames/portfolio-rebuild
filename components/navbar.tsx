"use client"
import Link from "next/link";
import DropdownNav from "@/components/small-screen-nav";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
// import my assets here from public folder
//  import

export default function Navbar() {
    const pathname = usePathname()
  return (
      <section className="bg-black  overflow-hidden sticky top-0 z-50">
          <div className="relative w-full mx-auto max-w-7xl">
              <div
                  className="relative flex flex-col w-full p-5 mx-auto lg:px-0 md:flex-row md:items-center md:justify-between md:px-6"
              >
                  <div className="flex flex-row items-center justify-between text-sm text-white lg:justify-start">
                      <a href="/">
                          <div>
                              <p className="text-xl font-bold text-[#50d236]">[remarkableJames]</p>
                          </div>
                      </a>
                      <div
                          className="inline-flex items-center justify-center  text-white focus:outline-none focus:text-black hover:text-black md:hidden">
                          <DropdownNav/>
                      </div>
                  </div>
                  <nav className="{'flex': open, 'hidden': !open} hidden lg:flex">
                      <Link
                          href="/"
                          className={`px-2 py-2 text-sm font-medium ${pathname==='/'? 'text-[#50d236]': 'text-white'} hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto`}
                      >
                          Home
                      </Link>
                      <Link
                          href="/about"
                          className={`px-2 py-2 text-sm font-medium ${pathname==='/about'? 'text-[#50d236]': 'text-white'} hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto`}
                      >
                          About
                      </Link>
                      <Link
                          href="/projects"
                          className={`px-2 py-2 text-sm font-medium ${pathname==='/projects'? 'text-[#50d236]': 'text-white'} hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto`}
                      >
                          Projects
                      </Link>
                      <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                          <Link href="/contact"
                              className="block px-4 py-2 mt-2 text-sm text-white hover:text-white/50 focus:outline-none focus:shadow-outline md:mt-0">
                              Contact
                          </Link>
                          <a href={'/assets/James-Niyongira-Resume.pdf'}
                              className="text-white text-sm py-2 focus:outline-none px-4 active:bg-fuchsia-50 active:text-#279f0e bg-white/10 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 group hover:bg-white/5 inline-flex items-center justify-center rounded-md">
                              Download CV
                          </a>
                      </div>
                  </nav>
              </div>
          </div>
      </section>
  )
}
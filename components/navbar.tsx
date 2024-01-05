import Link from "next/link";
import DropdownNav from "@/components/small-screen-nav";
import {Button} from "@/components/ui/button";

export default function Navbar() {
  return (
      <section className="bg-black border-b border-white/25 overflow-hidden sticky top-0 z-50">
          <div className="relative w-full mx-auto max-w-7xl">
              <div
                  className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6"
              >
                  <div className="flex flex-row items-center justify-between text-sm text-white lg:justify-start">
                      <a href="/">
                          <div>
                              <p className="text-xl font-bold text-[#50d236]">Remarkable James</p>
                          </div>
                      </a>
                      <div
                          className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:text-black hover:text-black md:hidden">
                          <DropdownNav/>
                      </div>
                  </div>
                  <nav className="{'flex': open, 'hidden': !open} hidden lg:flex">
                      <Link
                          href="/"
                          className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto"
                      >
                          Home
                      </Link>
                      <Link
                          href="/about"
                          className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3"
                      >
                          About
                      </Link>
                      <a
                          href="/projects"
                          className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3"
                      >
                          Projects
                      </a>
                      <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                          <button
                              className="block px-4 py-2 mt-2 text-sm text-white hover:text-white/50 focus:outline-none focus:shadow-outline md:mt-0">
                              Blog
                          </button>
                          <button
                              className="text-white text-sm py-2 focus:outline-none px-4 active:bg-fuchsia-50 active:text-#279f0e bg-white/10 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 group hover:bg-white/5 inline-flex items-center justify-center rounded-md">
                              Download CV
                          </button>
                      </div>
                  </nav>
              </div>
          </div>
      </section>
  )
}
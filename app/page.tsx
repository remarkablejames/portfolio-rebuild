import Image from 'next/image'
import Link from "next/link";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";

export default function Home() {
  return (
      <FramerMotionWrapper>
          <section className="relative flex items-center w-full bg-black">
              <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
                  <div className="relative flex-col items-start m-auto align-middle">
                      <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                          <div className="relative items-center gap-12 m-auto lg:inline-flex">
                              <div className="max-w-xl text-center lg:text-left">
                                  <div>
                                      {/*                      <div>*/}
                                      {/*<span className="inline-flex items-center text-3xl font-semibold tracking-tighter text-black">*/}
                                      {/*  <span className="ml-2">I'm James Niyongira</span>*/}
                                      {/*</span>*/}
                                      {/*                      </div>*/}
                                      <p className="mt-8 text-3xl font-bold tracking-tighter lg:text-6xl text-white">
                                          Black belt ninja in the art of software development
                                      </p>
                                      <p className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-white/45">
                                          I&apos;m James Niyongira, a full stack software developer and a student at
                                          Algonquin College in Ottawa, Canada. I&apos;m skilled and passionate about building
                                          software products that solves real world problems.
                                      </p>
                                  </div>
                                  <div
                                      className="flex  justify-start  gap-3  mt-10 sm:flex-row">
                                      <Link
                                          href="/about"
                                          className="text-black font-semibold focus:outline-none inline-flex items-center justify-center rounded-md bg-white duration-200 focus-visible:outline-black focus-visible:ring-black  hover:bg-white/70   lg:w-auto px-6 py-3 text-center w-full"
                                      >
                                          More about me
                                      </Link>
                                      <Link
                                          href="/projects"
                                          className="text-white font-semibold focus:outline-none inline-flex items-center justify-center rounded-md bg-black duration-200 focus-visible:outline-black focus-visible:ring-black hover:bg-white/25 border border-white/25 hover:text-white lg:w-auto px-6 py-3 text-center w-full"
                                      >
                                          View my work
                                      </Link>
                                  </div>
                              </div>
                          </div>
                          <div className="hidden lg:block w-full p-2 mt-12 bg-white/25 lg:mt-0 rounded-3xl">
                              <img
                                  alt="hero"
                                  className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl"
                                  src="https://avatars.githubusercontent.com/u/42360352?v=4"
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </FramerMotionWrapper>
  )
}

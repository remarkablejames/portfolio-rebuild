"use client"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Menu } from "lucide-react"
import { BlackLogoIcon, ShiftWrightLogoIcon } from "@/components/icons"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8">
        {/* Mobile Navigation */}
        <div className="flex justify-between items-center md:hidden mb-6">
          <h2 className="text-lg font-medium">James Niyongira</h2>
          <button
              className="p-1 rounded-md hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex justify-end mb-6 md:mb-8`}>
          <ul className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link href="/" className="text-red-600 hover:text-red-800 block py-1">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/setup" className="text-red-600 hover:text-red-800 block py-1">
                My Setup
              </Link>
            </li>
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="w-32 sm:w-40 md:w-48 h-auto relative flex-shrink-0">
            <Image
                src="https://res.cloudinary.com/dhka6cqkn/image/upload/f_auto,q_auto/v1/potfolio-images/b2usc3c6nwojkg0zycd8"
                alt="Profile photo"
                width={256}
                height={256}
                className="rounded-full shadow-md"
                priority
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-2">James Niyongira</h1>

            <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center sm:items-start gap-2 sm:gap-0 mb-4">
              <Link href="mailto:remarkablejames@icloud.com" className="text-red-600 text-sm hover:text-red-800">
                remarkablejames@icloud.com
              </Link>
              <div className="flex space-x-4 mt-2 sm:mt-0">
                <Link
                    href="https://github.com/remarkablejames"
                    aria-label="GitHub"
                    className="hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                >
                  <Github className="w-5 h-5 stroke-1 hover:stroke-red-600 transition-colors" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/james-niyongira-551082156/"
                    aria-label="LinkedIn"
                    className="hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                >
                  <Linkedin className="w-5 h-5 stroke-1 hover:stroke-blue-700 transition-colors" />
                </Link>
                <Link
                    href="https://x.com/remarkablejames"
                    aria-label="Twitter"
                    className="hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                >
                  <Twitter className="w-5 h-5 stroke-1 hover:stroke-black transition-colors" />
                </Link>
              </div>
            </div>

            <div className="space-y-3 text-gray-800">
              <p className="text-sm">
                Over a year ago, I graduated with a diploma in Web Application Development. Despite aiming for a traditional dev job, I struggled to break into the industry. Instead of switching paths, I turned my frustration into motivation and dove head-first into the startup grind to push my limits and build something meaningful. I landed a full-time contract as a full-stack engineer at a startup, where I worked for over a year until the contract ended. Since then, I&apos;ve been focused on building my own SaaS startup from the ground up.
              </p>

              <p className="text-sm">
                In the middle of that I am still open to work and looking for a new role.  I genuinely love building software.  I don&apos;t have big tech names on my resume, but I have strong, battle-tested skills that allow me to take an idea from zero to a working prototype in a matter of weeks. My core strengths are in developing Cloud-native applications using Go (Golang) / Nodejs and C#, Test automation and frontend development with Next.js.
              </p>

              <p className="text-sm">
                Outside of software, my life is pretty simple: I code and I bike. That&apos;s about it. If you&apos;re looking for someone who&apos;s all in—someone who builds, ships, and learns fast—try me.
              </p>
            </div>
          </div>
        </div>


        {/* Projects Section */}
        <div id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Notable Projects</h2>

          <Link href={"https://somolabs.com/"} target={"_blank"}>
            <div
                className="group flex flex-col md:flex-row gap-2 lg:gap-6 p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer ">
              <div className="w-full md:w-64 flex-shrink-0 flex justify-start lg:justify-center items-center border-0 lg:border rounded-md">
                <BlackLogoIcon className={"w-16 lg:w-28 h-auto"}/>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                  SomoLabs: A Global Marketplace for Structured Academic Courses
                </h3>
                <p className="text-xs mb-1 text-neutral-500">
                  Contributors: James Niyongira, Elvio Gonzalez Severino and Jean de Dieu Uwizeye
                </p>
                <p className="text-sm mb-3">
                  An innovative platform that connects learners with structured academic courses from expert instructors worldwide. It offers a seamless experience for both learners and educators, facilitating knowledge sharing and skill development.
                </p>
                <p className="text-xs mb-3">
                  Built with Next.js, Golang, PostgreSQL,Redis and deployed on AWS.
                </p>
              </div>
            </div>
          </Link>

          {/* project 2 */}
          <Link href={"https://apps.apple.com/ca/app/shiftwright/id6741173211"} target={"_blank"}>
            <div
                className="group flex flex-col md:flex-row gap-2 lg:gap-6 mt-4 p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer ">
            <div className="w-full md:w-64 flex-shrink-0 flex justify-start lg:justify-center items-center border-0 lg:border rounded-md">
              <ShiftWrightLogoIcon className={"w-8 lg:w-16 h-auto"}/>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">ShiftWright: Staff Management Platform (Web,Android & iOS)</h3>
              <p className="text-xs mb-1 text-neutral-500">
                Proprietary project for Grow Wright Consulting
              </p>
              <p className="text-sm mb-3">
                A comprehensive platform designed to streamline the management of temporary staff for Grow Wright Consulting. It connects employers with available workers, ensuring efficient staffing solutions.
              </p>
                <p className="text-xs mb-3">
                    Built with React Native, Golang, Next.js, PostgreSQL and deployed on Google Cloud Platform.
                </p>
            </div>
          </div>
          </Link>

          <Link href={"https://github.com/remarkablejames/lexical-editor-extended"} target={"_blank"}>
            <div
                className="group flex flex-col md:flex-row gap-2 lg:gap-6 p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer ">
              <div className="w-full md:w-64 flex-shrink-0 flex justify-start lg:justify-center items-center border-0 lg:border rounded-md">

              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                  WYSIWYG Editor: Extended Lexical Editor (Meta)
                </h3>
                <p className="text-xs mb-1 text-neutral-500">
                  A Meta open-source project forked and extended by James Niyongira
                </p>
                <p className="text-sm mb-3">
                  I added a custom extension to support complex Latex equations rendering using a combination of MathJax, KaTeX, and custom React components. This extension allows users to seamlessly integrate complex mathematical expressions into their content, enhancing the editor&apos;s capabilities for academic and technical writing.
                </p>
                <p className="text-xs mb-3">
                  Built with TypeScript, React, and Lexical Editor (Meta&apos;s open-source project).
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
  )
}
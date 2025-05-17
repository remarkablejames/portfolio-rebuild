import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Youtube, GraduationCap } from "lucide-react"
import {BlackLogoIcon, ShiftWrightLogoIcon} from "@/components/icons";

export default function Home() {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-end mb-8">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-red-600 hover:text-red-800">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/setup" className="text-red-600 hover:text-red-800">
               My Setup
              </Link>
            </li>
            <li>
              <Link href="#cv" className="text-red-600 hover:text-red-800">
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="w-48 h-auto relative flex-shrink-0">
            <Image
                src="https://res.cloudinary.com/dhka6cqkn/image/upload/f_auto,q_auto/v1/Brainwave-images/in-production%20app%20images/founders/ipcbhvyliddnitbn54mr"
                alt="Profile photo"
                width={256}
                height={256}
                className="rounded-full"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-center md:text-left mb-2">James Niyongira</h1>

            <div className="flex justify-center md:justify-between space-x-4 mb-4">
              <Link href="mailto:remarkablejames@icloud.com" className="text-red-600 text-sm hover:text-red-800">
                remarkablejames@icloud.com
              </Link>
              <div className="flex space-x-3">
                <Link
                  href="https://github.com/remarkablejames"
                  aria-label="GitHub"
                  className="hover:bg-gray-200 rounded-full p-1 transition-colors"
                >
                  <Github className="w-5 h-5 stroke-1 hover:stroke-red-600 transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/james-niyongira-551082156/"
                  aria-label="LinkedIn"
                  className="hover:bg-gray-200 rounded-full p-1 transition-colors"
                >
                  <Linkedin className="w-5 h-5 stroke-1 hover:stroke-blue-700 transition-colors" />
                </Link>
                <Link
                  href="https://x.com/remarkablejames"
                  aria-label="Twitter"
                  className="hover:bg-gray-200 rounded-full p-1 transition-colors"
                >
                  <Twitter className="w-5 h-5 stroke-1 hover:stroke-black transition-colors" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 text-gray-800">
              <p className={"text-sm md:text-md"}>
                I’m a full stack web application developer with sharp skills in React.js/Next.js, backend solution development in Go(Golang), ASP.NET and Python (Django). I’m also an aspiring entrepreneur, currently building SomoLabs — a global marketplace for structured academic courses. I work as a full stack software engineer at Grow Wright Consulting, Ottawa, Canada.
              </p>

              <p className={"text-sm md:text-md"}>
                I graduated with a Diploma in Web Development & Internet Applications from Algonquin College in 2024, and I’ve been actively applying my skills in  TypeScript, Go, and Python to various projects. Outside of coding, I enjoy cycling, reading books and sleeping.
              </p>
            </div>
          </div>
        </div>


        {/* Projects Section */}
        <div id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Notable Projects</h2>

          <Link href={"https://somolabs.com/"} target={"_blank"}>
            <div
                className="group flex flex-col md:flex-row gap-6 p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer ">
              <div className="w-full md:w-64 flex-shrink-0 flex justify-center items-center border rounded-md">
                <BlackLogoIcon className={"w-28 h-auto"}/>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                  SomoLabs: A Global Marketplace for Structured Academic Courses
                </h3>
                <p className="text-xs mb-1 text-neutral-500">
                  Contributors: James Niyongira, Elvio Gonzalez Severino and Jean de Dieu Uwizeye
                </p>
                <p className="text-sm mb-3">
                  An innovative platform that connects learners with structured academic courses from top universities and institutions worldwide. It offers a seamless experience for both learners and educators, facilitating knowledge sharing and skill development.
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
                className="group flex flex-col md:flex-row gap-6 mt-4 p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer ">
            <div className="w-full md:w-64 flex-shrink-0 flex justify-center items-center border rounded-md">
              <ShiftWrightLogoIcon className={"w-28 h-auto"}/>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">ShiftWright: Temporary Staff Management Platform (Web,Android & iOS)</h3>
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
        </div>
      </div>
  )
}

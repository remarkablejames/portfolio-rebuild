import ProjectCard from "@/components/project-card";
// import {projects} from "@/lib/data";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import { Card } from "@/components/Card";
import Image from "next/image";
import { SimpleLayout } from "@/components/SimpleLayout";
import logoVanilla from "@/images/logos/netflix.svg";
import logoSomoLabs from "@/images/logos/logo-black.svg";
import logoMarkdown from "@/images/logos/markdown.svg";
import logoCaptainhook from "@/images/logos/react-2.svg";
import logoFleek from "@/images/logos/fleeksvg.svg";
import Link from "next/link";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
const projects = [
  {
    name: "SomoLabs",
    description: "Online learning platform built with TypeScript, Python, and React Native",
    link: {
      href: "https://somolabs.com/",
      label: "somolabs.com",
    },
    logo: logoSomoLabs,
  },
  {
    name: "MD-Transpiller",
    description:
      "A tool that transpiles markdown to HTML with syntax highlighting and live preview",
    link: {
      href: "https://github.com/remarkablejames/markdown-transpiller",
      label: "Open on GitHub",
    },
    logo: logoMarkdown,
  },
  {
    name: "Natours",
    description:
      "A tour booking platform built with Node.js, Express, MongoDB, and Nextjs",
    link: {
      href: "https://github.com/remarkablejames/Natours",
      label: "Open on GitHub",
    },
    logo: logoFleek,
  },
  {
    name: "SomoLabs CMS",
    description:
      "A content management system for SomoLabs built with Next.js and Python Django",
    link: {
      href: "https://brainwave-admin.vercel.app/",
      label: "Live preview",
    },
    logo: logoSomoLabs,
  },
  {
    name: "Netflix Clone",
    description: "Netflix Clone built with React, Redux, and Firebase",
    link: {
      href: "https://movies-app-james-one-green.vercel.app",
      label: "Live preview",
    },
    logo: logoVanilla,
  },
  {
    name: "SmartNotes",
    description: "Minimal Notes App built with React, Redux, and Firebase",
    link: {
      href: "https://notes-app-james.netlify.app/",
      label: "Live preview",
    },
    logo: logoCaptainhook,
  },
];


const words = `
I try to build projects that solve real-world problems and help me learn new technologies. I am currently working on project SomoLabs, a SaaS learning platform for structured, curriculum-aligned courses.  I built it's entire frontend single-handedly with TypeScript. It's backend is written in Python and mobile version is built with React Native.
`;

function LinkIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default function Projects() {
  return (
    <FramerMotionWrapper>
      <section className={" p-4 my-4 md:my-12"}>
         <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="mb-12">
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Few <span className="text-[#50d236]">unique</span> apps I have
              built.
            </p>
            <div className={"mt-8"}>
              <TextGenerateEffect words={words} className={"text-white"} />
            </div>

          </div>
        </div>
        <div className={"max-w-[65rem]"}>

          {/*<TextGenerateEffect words={words} className={"text-white"} />*/}

        </div>

        <SimpleLayout
          title=""
          intro=""
        >
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Card
                as="li"
                key={project.name}
                className={
                  "bg-zinc-900 p-4 rounded-md hover:bg-zinc-800 transition-all duration-300"
                }
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-white ">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <Link
                  href={project.link.href}
                  className="relative z-10 mt-6 flex text-sm font-medium text-blue-400 transition group-hover:text-blue-500 cursor-pointer"
                >
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </Link>
              </Card>
            ))}
          </ul>
        </SimpleLayout>
      </section>
    </FramerMotionWrapper>
  );
}

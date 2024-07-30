
import ProjectCard from "@/components/project-card";
// import {projects} from "@/lib/data";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import { Card } from '@/components/Card'
import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoVanilla from '@/images/logos/netflix.svg'
import logoSomoLabs from '@/images/logos/logo-black.svg'
import logoCaptainhook from '@/images/logos/react-2.svg'
import Link from "next/link";
 const projects = [
    {
        name: 'SomoLabs',
        description:
            'Online learning platform for curriculum-based courses',
        link: { href: 'https://somolabs.com/', label: 'https://brainwave-kohl.vercel.app/' },
        logo: logoSomoLabs,
    },
    {
        name: 'Netflix Clone',
        description:
            'Netflix Clone built with React, Redux, and Firebase',
        link: { href: 'https://movies-app-james-one-green.vercel.app', label: 'movies-app-james-one-green.vercel.app' },
        logo: logoVanilla,
    },
    {
        name: 'SmartNotes',
        description:
            'Minimal Notes App built with React, Redux, and Firebase',
        link: { href: 'https://notes-app-james.netlify.app/', label: 'notes-app-james.netlify.app' },
        logo: logoCaptainhook,
    },


]

function LinkIcon(props:any) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}
export default function Projects() {
  return (
      <FramerMotionWrapper>
          {/* Card Blog */}
          {/*<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">*/}
          {/*    <div className="mb-12">*/}
          {/*        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-6xl">*/}
          {/*            Few  <span className="text-[#50d236]">unique</span> apps I have built <br/> &amp;*/}
          {/*                deployed on the cloud.*/}
          {/*        </p>*/}
          {/*    </div>*/}
          {/*    /!* Grid *!/*/}
          {/*    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">*/}
          {/*        /!* Cards *!/*/}
          {/*        {*/}
          {/*              projects.map((project, index) => (*/}
          {/*                  <ProjectCard*/}
          {/*                      key={index}*/}
          {/*                      id={project.id}*/}
          {/*                      title={project.title}*/}
          {/*                      description={project.description}*/}
          {/*                      image={project.image}*/}
          {/*                      link={project.link}*/}
          {/*                      github={project.github}*/}
          {/*                      tag={project.tag}*/}
          {/*                  />*/}
          {/*              ))*/}
          {/*        }*/}
          {/*        /!* End Cards *!/*/}

          {/*/!*        *!/*/}
          {/*/!*        /!* Card *!/*!/*/}
          {/*/!*        <div*!/*/}
          {/*/!*            className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-black dark:border-gray-700 dark:shadow-slate-700/[.7] hover:scale-105 transition-all duration-300 cursor-pointer">*!/*/}
          {/*/!*            <div className="h-52 flex flex-col justify-center items-center bg-emerald-800 rounded-t-xl">*!/*/}
          {/*/!*                <svg*!/*/}
          {/*/!*                    className="w-28 h-28"*!/*/}
          {/*/!*                    width={56}*!/*/}
          {/*/!*                    height={56}*!/*/}
          {/*/!*                    viewBox="0 0 56 56"*!/*/}
          {/*/!*                    fill="none"*!/*/}
          {/*/!*                    xmlns="http://www.w3.org/2000/svg"*!/*/}
          {/*/!*                >*!/*/}
          {/*/!*                    <rect width={56} height={56} rx={10} fill="white"/>*!/*/}
          {/*/!*                    <path*!/*/}
          {/*/!*                        d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z"*!/*/}
          {/*/!*                        fill="url(#paint0_linear_2204_541)"*!/*/}
          {/*/!*                    />*!/*/}
          {/*/!*                    <path*!/*/}
          {/*/!*                        d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z"*!/*/}
          {/*/!*                        fill="#2684FF"*!/*/}
          {/*/!*                    />*!/*/}
          {/*/!*                    <defs>*!/*/}
          {/*/!*                        <linearGradient*!/*/}
          {/*/!*                            id="paint0_linear_2204_541"*!/*/}
          {/*/!*                            x1="24.734"*!/*/}
          {/*/!*                            y1="29.2284"*!/*/}
          {/*/!*                            x2="16.1543"*!/*/}
          {/*/!*                            y2="44.0429"*!/*/}
          {/*/!*                            gradientUnits="userSpaceOnUse"*!/*/}
          {/*/!*                        >*!/*/}
          {/*/!*                            <stop stopColor="#0052CC"/>*!/*/}
          {/*/!*                            <stop offset="0.92" stopColor="#2684FF"/>*!/*/}
          {/*/!*                        </linearGradient>*!/*/}
          {/*/!*                    </defs>*!/*/}
          {/*/!*                </svg>*!/*/}
          {/*/!*            </div>*!/*/}
          {/*/!*            <div className="p-4 md:p-6">*!/*/}
          {/*/!*<span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">*!/*/}
          {/*/!*  Atlassian API*!/*/}
          {/*/!*</span>*!/*/}
          {/*/!*                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">*!/*/}
          {/*/!*                    Atlassian*!/*/}
          {/*/!*                </h3>*!/*/}
          {/*/!*                <p className="mt-3 text-gray-500">*!/*/}
          {/*/!*                    A software that develops products for software developers and*!/*/}
          {/*/!*                    developments.*!/*/}
          {/*/!*                </p>*!/*/}
          {/*/!*            </div>*!/*/}
          {/*/!*        </div>*!/*/}
          {/*/!*        /!* End Card *!/*!/*/}
          {/*/!*        /!* Card *!/*!/*/}
          {/*/!*        <div*!/*/}
          {/*/!*            className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-black dark:border-gray-700 dark:shadow-slate-700/[.7] hover:scale-105 transition-all duration-300 cursor-pointer">*!/*/}
          {/*/!*            <div className="h-52 flex flex-col justify-center items-center bg-red-500 rounded-t-xl">*!/*/}
          {/*/!*                <svg*!/*/}
          {/*/!*                    className="w-28 h-28"*!/*/}
          {/*/!*                    width={56}*!/*/}
          {/*/!*                    height={56}*!/*/}
          {/*/!*                    viewBox="0 0 56 56"*!/*/}
          {/*/!*                    fill="none"*!/*/}
          {/*/!*                    xmlns="http://www.w3.org/2000/svg"*!/*/}
          {/*/!*                >*!/*/}
          {/*/!*                    <rect width={56} height={56} rx={10} fill="white"/>*!/*/}
          {/*/!*                    <path*!/*/}
          {/*/!*                        d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z"*!/*/}
          {/*/!*                        fill="url(#paint0_linear_2204_541)"*!/*/}
          {/*/!*                    />*!/*/}
          {/*/!*                    <path*!/*/}
          {/*/!*                        d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z"*!/*/}
          {/*/!*                        fill="#2684FF"*!/*/}
          {/*/!*                    />*!/*/}
          {/*/!*                    <defs>*!/*/}
          {/*/!*                        <linearGradient*!/*/}
          {/*/!*                            id="paint0_linear_2204_541"*!/*/}
          {/*/!*                            x1="24.734"*!/*/}
          {/*/!*                            y1="29.2284"*!/*/}
          {/*/!*                            x2="16.1543"*!/*/}
          {/*/!*                            y2="44.0429"*!/*/}
          {/*/!*                            gradientUnits="userSpaceOnUse"*!/*/}
          {/*/!*                        >*!/*/}
          {/*/!*                            <stop stopColor="#0052CC"/>*!/*/}
          {/*/!*                            <stop offset="0.92" stopColor="#2684FF"/>*!/*/}
          {/*/!*                        </linearGradient>*!/*/}
          {/*/!*                    </defs>*!/*/}
          {/*/!*                </svg>*!/*/}
          {/*/!*            </div>*!/*/}
          {/*/!*            <div className="p-4 md:p-6">*!/*/}
          {/*/!*<span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">*!/*/}
          {/*/!*  Atlassian API*!/*/}
          {/*/!*</span>*!/*/}
          {/*/!*                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">*!/*/}
          {/*/!*                    Atlassian*!/*/}
          {/*/!*                </h3>*!/*/}
          {/*/!*                <p className="mt-3 text-gray-500">*!/*/}
          {/*/!*                    A software that develops products for software developers and*!/*/}
          {/*/!*                    developments.*!/*/}
          {/*/!*                </p>*!/*/}
          {/*/!*            </div>*!/*/}
          {/*/!*        </div>*!/*/}
          {/*/!*        /!* End Card *!/*!/*/}
          {/*    </div>*/}
          {/*    /!* End Grid *!/*/}
          {/*</div>*/}
          {/* End Card Blog */}
          <section className={" p-4"}>
              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                  <div className="mb-12">
                      <p className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                          Few <span className="text-[#50d236]">unique</span> apps I have built <br/> to
                          prove my skills.
                      </p>
                  </div>
              </div>

                  <SimpleLayout
                  >
                      <ul
                          role="list"
                          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                      >
                          {projects.map((project) => (
                              <Card as="li" key={project.name}
                                    className={"bg-zinc-900 p-4 rounded-md hover:bg-zinc-800 transition-all duration-300"}>
                                  <div
                                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
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
                                  <Link href={project.link.href} className="relative z-10 mt-6 flex text-sm font-medium text-blue-400 transition group-hover:text-blue-500 cursor-pointer">
                                      <LinkIcon className="h-6 w-6 flex-none"/>
                                      <span className="ml-2">{project.link.label}</span>
                                  </Link>
                              </Card>
                          ))}
                      </ul>
                  </SimpleLayout>

          </section>
      </FramerMotionWrapper>
)
}
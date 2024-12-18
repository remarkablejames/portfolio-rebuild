import ProjectCard from "@/components/project-card";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";

import Link from "next/link";
import CenteredLayout from "@/components/layout/centered-layout";
import {AllProjects} from "@/app/projects/projects";

export default function Projects() {
  return (
      <FramerMotionWrapper>
          <CenteredLayout>

              <div className={"flex items-center justify-center mb-6"}>
              <p className={"max-w-md text-center text-lg font-semibold text-green-500 "}>
                  3 Unique projects that showcase my sharp skills in software development as a front-end, back-end and
                  mobile application developer.
              </p>
              </div>
              <section className={"flex items-center justify-center"}>
                  {/*    a grid element with two equal columns*/}

                  <div className={"max-w-2xl"}>
                      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 w-full gap-y-12 ">
                          {
                              AllProjects.map((project, index) => (
                                  <Link
                                      className={"text-sm hover:bg-zinc-800 p-4 cursor-pointer border-[0.5px] border-neutral-500  transition-colors duration-200"}
                                      key={index}
                                      href={`/projects/${project.id}`}
                                  >
                                      <h4 className="scroll-m-20 text-lg text-blue-600 font-semibold tracking-tight">
                                          {project.name}
                                      </h4>
                                      <p className={"text-neutral-500 text-xs mb-4"}>
                                          {project.time}
                                      </p>
                                      <p className={"w-full text-white/80"}>
                                          {project.description.length > 100 ? `${project.description.substring(0, 100)}...` : project.description}
                                      </p>
                                  </Link>
                              ))
                          }

                      </div>
                  </div>
              </section>

          </CenteredLayout>
      </FramerMotionWrapper>
  );
}

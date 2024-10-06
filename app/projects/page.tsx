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
import CenteredLayout from "@/components/layout/centered-layout";
import {AllProjects} from "@/app/projects/projects";

export default function Projects() {
  return (
      <>
      <CenteredLayout>

        <section className={"flex items-center justify-center"}>
        {/*    a grid element with two equal columns*/}
          <div className={"max-w-2xl"}>
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 w-full gap-y-12 pl-16">
            {
              AllProjects.map((project, index) => (
                    <Link className={"text-sm hover:bg-zinc-700 p-4 cursor-pointer border-[0.5px] border-muted-foreground  transition-colors duration-200"}
                    key={index}
                          href={`/projects/${project.id}`}
                    >
                      <h4 className="scroll-m-20 text-lg text-blue-600 font-semibold tracking-tight">
                        {project.name}
                      </h4>
                      <p className={"text-muted-foreground"}>
                        {project.time}
                      </p>
                      <p className={"w-full text-white/80"}>
                        {project.description}
                      </p>
                    </Link>
                ))
            }

          </div>
          </div>
        </section>

      </CenteredLayout>
      </>
  );
}

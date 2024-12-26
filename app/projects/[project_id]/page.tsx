import CenteredLayout from "@/components/layout/centered-layout";
import { AllProjects } from "@/app/projects/projects";
import MyGallery from "./gallery";
import { ImagePreviewer } from "./image-previewer";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import {Button} from "@/components/ui/button";

export default function ProjectDetails({ params }: any) {
  const project =
    AllProjects.find((project) => project.id === Number(params.project_id)) ||
    AllProjects[0];
  return (
      <FramerMotionWrapper>
    <CenteredLayout>
      <div className={"flex items-center justify-center"}>
        <div className={"text-sm max-w-2xl p-4"}>
          <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            {project.name}
          </h4>
          <p className={"text-neutral-500"}>{project.time}</p>
          <p className={"w-full text-neutral-400 my-6 text-lg text-justify"}>
            {project.description}
          </p>

          {
            // If the project is active, show the link
            project.link.active ? (
              <a
                href={project.link.href}

              >
                <Button variant="outline" size={"sm"} className=" rounded-none bg-blue-600 hover:bg-blue-500 text-white/70 border-none transition-colors duration-200">
                  {project.link.label}
                </Button>
                {/*{project.link.label}*/}
              </a>
            ) : (
              // If the project is not active, show a message
              <p className={"text-red-600/70"}>{project.link.label}</p>
            )
          }
        </div>
      </div>
        {
            // If the project has images, show the gallery
            project.images ? (
                <MyGallery images={project.images} />
            ) : (
                <div className={"flex items-center justify-center"}>
                <p className={"text-red-500 font-medium"}>
                    No screenshot images available for this project
                </p>
                </div>
            )
        }
    </CenteredLayout>
      </FramerMotionWrapper>
  );
}

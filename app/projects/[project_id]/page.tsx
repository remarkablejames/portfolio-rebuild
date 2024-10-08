
import CenteredLayout from "@/components/layout/centered-layout";
import {AllProjects} from "@/app/projects/projects";

export default function ProjectDetails({params}: any) {
    const project = AllProjects.find((project) => project.id === Number(params.project_id)) || AllProjects[0];
    return (
        <CenteredLayout>
            <div className={"flex items-center justify-center"}>
                <div className={"text-sm max-w-xl p-4"}

                >
                    <h4 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                        {project.name}
                    </h4>
                    <p className={"text-muted-foreground"}>
                        {project.time}
                    </p>
                    <p className={"w-full text-white/80 mb-6"}>
                        {project.description}
                    </p>

                    <a
                    href={project.link.href}
                    className={"text-blue-600 hover:text-primary-foreground transition-colors duration-200"}
                    >
                        {project.link.label}
                    </a>
                </div>
            </div>
        </CenteredLayout>
    )
}
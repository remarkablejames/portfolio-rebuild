import Link from "next/link";
import BlurImage from "@/components/BlurImage";
import {rgbDataURL} from "@/lib/utils";
import {any,  number, string} from "prop-types";
import {Type} from "lucide-react";
type propTypes = {
    key: number,
    id: number,
    title: string,
    description: string,
    image: string,
    link: string,
    stack?: any,
    setup?: string,
    github: string,
    tag: string,
};

export default function ProjectCard(props: propTypes) {
    return (
        <Link
            href={`/projects/${props.id}`}
            className="group flex flex-col h-full bg-white/10   rounded-xl dark:bg-black  dark:shadow-slate-700/[.7] hover:scale-105 transition-all duration-300 cursor-pointer">
            <BlurImage
                src={props.image}
                width={2000}
                height={300}
                alt="course cover image"
                className="h-52 rounded-t-md object-cover brightness-90 saturate-150 contrast-100"
                placeholder={"blur"}
                blurDataURL={rgbDataURL(203, 213, 225)}
            />
            <div className="p-4 md:p-6  rounded-b-md bg-white/10 ">
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
            {props.tag}
          </span>
                <h3 className="text-xl font-semibold text-white">
                    {props.title}
                </h3>
                <p className="mt-3 text-white/45">
                    {props.description}
                </p>
            </div>
        </Link>
    )
}
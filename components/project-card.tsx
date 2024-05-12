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
            className="group flex flex-col h-full bg-white/10   rounded-xl dark:bg-black  dark:shadow-slate-700/[.7] transition-all duration-300 cursor-pointer">
            <BlurImage
                src={props.image}
                width={2000}
                height={300}
                alt="course cover image"
                className="h-52 rounded-t-md object-cover brightness-90 saturate-150 contrast-100"
                placeholder={"blur"}
                blurDataURL={rgbDataURL(203, 213, 225)}
            />
            <div className="p-4 md:p-6  bg-white/10 ">
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
            <div
                className="mt-auto flex border-t border-white/10 divide-x divide-white/10 dark:border-neutral-700 dark:divide-neutral-700">
                <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-gray-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                    href="#"
                >
                    Source Code
                </a>
                <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white/5 text-white hover:text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                    href="#"
                >
                    Live Demo
                </a>
            </div>

        </Link>
    )
}
import Link from "next/link";
import {projects} from "@/lib/data";
import BlurImage from "@/components/BlurImage";
import {rgbDataURL} from "@/lib/utils";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";

export default function ProjectDetails({params}: any) {
    const project = projects.find((project) => project.id === Number(params.project_id)) || projects[0];
    console.log(project)
    return (
        <FramerMotionWrapper>
        <div className="flex w-full">
            <div className="w-full flex-col-reverse lg:flex lg:flex-row justify-around gap-4 px- lg:px-24">
                <div className="w-full lg:w-1/3  p-4">
                    <div className="sticky top-32">
                    <Link href="/projects" className="flex gap-2 items-center group  transition-all duration-300 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            className="w-6 h-6 fill-current text-white/45 group-hover:text-blue-500 transition-all duration-300"
                            viewBox="0,0,256,256"
                        >
                            <g
                                fill={"currentColor"}
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth={1}
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit={10}
                                strokeDasharray=""
                                strokeDashoffset={0}
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{mixBlendMode: "normal"}}
                            >
                                <g transform="scale(5.12,5.12)">
                                    <path
                                        d="M11.95703,13.98828c-0.25781,0.01563 -0.5,0.12891 -0.67578,0.32031l-10.26562,10.69141l10.26563,10.69141c0.24609,0.26172 0.61328,0.37109 0.96094,0.28516c0.34766,-0.08594 0.625,-0.35156 0.72266,-0.69531c0.10156,-0.34766 0.00781,-0.71875 -0.24609,-0.97266l-7.97266,-8.30859h43.25391c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-43.25391l7.97266,-8.30859c0.29297,-0.29297 0.375,-0.73437 0.20313,-1.10937c-0.16797,-0.37891 -0.55078,-0.61328 -0.96484,-0.59375z"/>
                                </g>
                            </g>
                        </svg>

                        <p className="text-white/45 text-sm group-hover:text-blue-500 transition-all duration-300">
                            Back to projects
                        </p>
                    </Link>
                    <h1
                        className="text-4xl font-bold text-white mt-8">
                        {project.title}
                    </h1>
                    <p className="text-white/45 mt-6">
                        {project.description}
                    </p>
                    {/*<div*/}
                    {/*    className="flex  w-full justify-between   gap-3  mt-10 sm:flex-row">*/}
                    {/*    <a*/}
                    {/*        href="#_"*/}
                    {/*        className=" text-black focus:outline-none inline-flex items-center justify-center rounded-md bg-white duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-2 text-center w-full"*/}
                    {/*    >*/}
                    {/*        Source code*/}
                    {/*    </a>*/}
                    {/*    <a*/}
                    {/*        href="#_"*/}
                    {/*        className="text-white focus:outline-none inline-flex items-center justify-center rounded-md bg-black border border-white/25 duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-2 text-center w-full"*/}
                    {/*    >*/}
                    {/*        Live demo*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                        {/*NEW BUTTONS*/}
                        <div className="mt-8 flex items-center justify-between">
                            <button
                                type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/25 bg-black text-white shadow-sm hover:bg-white/25 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className="w-5 h-5"
                                    viewBox="0 0 50 50"
                                    fill={"currentColor"}
                                >
                                    <path
                                        d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                                </svg>

                                Source code
                            </button>
                            <a
                                href={project.link}
                                type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm  rounded-lg font-semibold bg-white hover:bg-white/60 text-black   disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                            >

                                Live demo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    className="w-5 h-5"
                                    viewBox="0,0,256,256"
                                >
                                    <g
                                        fill="#000"
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth={1}
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit={10}
                                        strokeDasharray=""
                                        strokeDashoffset={0}
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="none"
                                        style={{mixBlendMode: "normal"}}
                                    >
                                        <g transform="scale(8,8)">
                                            <path
                                                d="M10.59375,4.1875c-4.44531,2.0625 -7.59375,6.60938 -7.59375,11.8125c0,7.14453 5.85547,13 13,13c7.14453,0 13,-5.85547 13,-13c0,-5.20312 -3.14844,-9.75 -7.59375,-11.8125l-0.8125,1.8125c3.75391,1.73828 6.40625,5.60156 6.40625,10c0,6.05469 -4.94531,11 -11,11c-6.05469,0 -11,-4.94531 -11,-11c0,-4.39844 2.65234,-8.26172 6.40625,-10zM16,6.09375l-0.71875,0.6875l-5,5l1.4375,1.4375l3.28125,-3.28125v10.0625h2v-10.0625l3.28125,3.28125l1.4375,-1.4375l-5,-5z"/>
                                        </g>
                                    </g>
                                </svg>


                            </a>
                        </div>


                        {/*    TABLE FOR QUICK FACTS ABOUT PROJECT*/}
                        <>
                            <h2 className="mt-12 font-semibold">Tech stack:</h2>
                            {/* List Group */}
                            <ul className="mt-2 flex flex-col">
                                {/*<li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border border-white/25  text-white/45 -mt-px first:rounded-t-md first:mt-0 last:rounded-b-md dark:border-white/25">*/}
                                {/*    <div className="flex items-center justify-between w-full">*/}
                                {/*        <span className="font-semibold">Framework</span>*/}
                                {/*        <span>Nextjs</span>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {
                                    project.stack.map((tech, index) => (
                                        <li key={index} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border border-white/25  text-white/45 -mt-px first:rounded-t-md first:mt-0 last:rounded-b-md dark:border-white/25">
                                            <div className="flex items-center justify-between w-full">
                                                <span className="font-semibold">{Object.keys(tech)[0]}</span>
                                                <span>{Object.values(tech)[0]}</span>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                            {/* End List Group */}
                        </>

                        {/*    END OF INFO TABLE*/}
                    </div>
                </div>
                <div className="border-r-[0.1px] w-0 border-white/25 "/>
                <div className="w-full lg:w-2/3 p-4">
                    <>
                        {/* Blog Article */}
                        <div className="max-w-3xl pt-6 ml-0 lg:ml-4 lg:pt-10 pb-12 ">
                            <div className="max-w-3xl">
                                {/* Content */}
                                <div className="space-y-5 md:space-y-8">

                                    <figure>
                                        <BlurImage
                                            className="w-full rounded-md object-cover brightness-90 saturate-150 contrast-100"
                                            src={project.image}
                                            width={2000}
                                            height={300}
                                            alt="project cover image"
                                            placeholder={"blur"}
                                            blurDataURL={rgbDataURL(203, 213, 225)}
                                        />
                                    </figure>
                                    {project.setup.map((step, index) => (
                                        <div key={index} className="space-y-5 md:space-y-2">
                                            <h2 className="text-2xl font-bold text-white">
                                                {step.title}
                                            </h2>
                                            <p className="text-lg text-white/45">
                                                {step.description}
                                            </p>
                                        </div>
                                    )
                                    )}
                                    {/*<p className="text-lg text-white/45">*/}
                                    {/*    As we&apos;ve grown, we&apos;ve seen how Preline has helped companies such as*/}
                                    {/*    Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their*/}
                                    {/*    designers closer together to create amazing things. We&apos;ve also learned*/}
                                    {/*    that when the culture of sharing is brought in earlier, the better*/}
                                    {/*    teams adapt and communicate with one another.*/}
                                    {/*</p>*/}
                                    {/*<p className="text-lg text-white/45">*/}
                                    {/*    That&apos;s why we are excited to share that we now have a{" "}*/}
                                    {/*    <a*/}
                                    {/*        className="text-blue-600 decoration-2 hover:underline font-medium"*/}
                                    {/*        href="#"*/}
                                    {/*    >*/}
                                    {/*        free version of Preline*/}
                                    {/*    </a>*/}
                                    {/*    , which will allow individual designers, startups and other small*/}
                                    {/*    teams a chance to create a culture of openness early on.*/}
                                    {/*</p>*/}
                                    {/*<blockquote className="text-center p-4 sm:px-7">*/}
                                    {/*    <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">*/}
                                    {/*        To say that switching to Preline has been life-changing is an*/}
                                    {/*        understatement. My business has tripled and I got my life back.*/}
                                    {/*    </p>*/}
                                    {/*    <p className="mt-5 text-white/45">*/}
                                    {/*        Nicole Grazioso*/}
                                    {/*    </p>*/}
                                    {/*</blockquote>*/}


                                </div>
                                {/* End Content */}
                            </div>
                        </div>
                        {/* End Blog Article */}
                        {/* Sticky Share Group */}
                        <div className="sticky bottom-6 inset-x-0 text-center">
                            <div className="inline-block bg-white/10 backdrop-blur  shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
                                <div className="flex items-center gap-x-1.5">
                                    {/* Button */}
                                    <div className="hs-tooltip inline-block">
                                        <div
                                            className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-white/70"
                                        >
                                            Love my work and want to hire me? <Link href="/contact" className="text-blue-600 font-semibold"> Let&apos;s talk </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Sticky Share Group */}
                    </>

                </div>
            </div>
        </div>
        </FramerMotionWrapper>
    )
}
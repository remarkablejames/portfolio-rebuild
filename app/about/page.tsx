import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Link from "next/link";
import {projects} from "@/lib/data";

export default function About() {
    return (
        <FramerMotionWrapper>
            <>
                {/*<section>*/}
                {/*    <div className="max-w-5xl px-8 py-24 pb-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-32">*/}
                {/*        <div className="flex items-center">*/}
                {/*            <div className="hidden md:block">*/}
                {/*                <img*/}
                {/*                    className="inline-block object-cover w-24 h-24 rounded-full lg:w-64 lg:h-72"*/}
                {/*                    src="https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/to3tenbsq2dmchmltaau"*/}
                {/*                    alt=""*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="ml-4 md:ml-8">*/}
                {/*                <p className="text-4xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl">*/}
                {/*                    James Niyongira*/}
                {/*                    <span className="block text-white/45 text-2xl md:text-3xl lg:text-5xl">Web Applications Developer</span>*/}
                {/*                </p>*/}
                {/*                <div className="flex mt-12 space-x-6 text-xs text-white/45 uppercase">*/}
                {/*                    <a href="https://www.linkedin.com/in/james-niyongira-551082156/" className="duration-200 hover:text-gray-400">*/}
                {/*                        {" "}*/}
                {/*                        Linkedin*/}
                {/*                    </a>*/}
                {/*                    <a href="https://github.com/remarkablejames" className="duration-200 hover:text-gray-400">*/}
                {/*                        {" "}*/}
                {/*                        GitHub*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className={"md:mt-8"}>
                    <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24">
                        <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col gap-12 mt-8 md:mt-0">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Contact
                                    </h2>
                                    <dl className="mt-4 space-y-4 text-sm text-white/45">
                                        <div className="flex items-center text-sm text-white/45 gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">Website</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-world"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
                                                    <path d="M3.6 9h16.8"/>
                                                    <path d="M3.6 15h16.8"/>
                                                    <path d="M11.5 3a17 17 0 0 0 0 18"/>
                                                    <path d="M12.5 3a17 17 0 0 1 0 18"/>
                                                </svg>
                                            </dt>
                                            <dd>
                                                <a className="hover:text-white/80" href="/">
                                                    remarkablejames.com
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="flex items-center text-sm text-white/45 gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">Telephone</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-device-mobile"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path
                                                        d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"/>
                                                    <path d="M11 4h2"/>
                                                    <path d="M12 17v.01"/>
                                                </svg>
                                            </dt>
                                            <dd>
                                                <a
                                                    className="hover:text-white/80"
                                                    href="tel:+1 (555) 234-5678"
                                                >
                                                    +1 (613) 878-8849
                                                </a>
                                            </dd>
                                        </div>
                                        <div className="flex items-center text-sm text-white/45 gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">Email</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-mail"
                                                    width={18}
                                                    height={18}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path
                                                        d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/>
                                                    <path d="M3 7l9 6l9 -6"/>
                                                </svg>
                                            </dt>
                                            <dd>
                                                <a
                                                    className="hover:text-white/80"
                                                    href="mailto:hello@example.com"
                                                >
                                                    jamesme85.me@gmail.com
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Education
                                    </h2>
                                    <dl className="mt-4 space-y-4 text-sm text-white/45">
                                        <div className="flex flex-col gap-2">
                                            <dt className="flex flex-col">
                                                <span className="block">Web Development and Internet Applications</span>
                                                <span className="block italic">Algonquin College</span>
                                            </dt>
                                            <dd className="font-medium text-blue-500">Sept. 2022 - Apr. 2024</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Expertise
                                    </h2>
                                    <ul role="list" className="mt-4 space-y-2 text-sm text-white/45">
                                        <li>.NET (C#)</li>
                                        <li>JavaScript</li>
                                        <li>Python</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Skills
                                    </h2>
                                    <ul role="list" className="mt-4 space-y-2 text-sm text-white/45">
                                        <li>Fullstack development</li>
                                        <li>Interpersonal Communication</li>
                                        <li>Problem-solving</li>
                                        <li>Adaptability</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-12 lg:col-span-2">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Summary
                                    </h2>
                                    <p className="mt-4 text-md text-white/45 font-medium text-justify">
                                        Seasoned web applications developer with a focus on JavaScript/TypeScript, C#
                                        and Python.
                                        With a college diploma in web development and hands-on experience gained through
                                        internship
                                        and tons of projects built, I ship clean and maintainable code. What sets me
                                        apart is my high
                                        speed of learning new technologies, excellent communication, problem-solving and
                                        collaboration skills.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Work experience
                                    </h2>
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <p className="mt-4 text-lg font-medium text-blue-500">
                                                Software Developer Intern - {" "}
                                                <span className="text-white/45">Algonquin College ( Dpt. of Entrepreneurship & Innovation)</span>
                                                <span className="block text-xs text-white/45">
                                                    September 2023 - December 2023
                                                  </span>
                                            </p>
                                            <div className="mt-4 text-md font-medium text-white/45">
                                                This internship was a great opportunity to put my skills to the test and learn new ones. I was able to work on a project that involved creating a learning platform from scratch using various technologies such as Python Django, React.js, and AWS.  Below are some of my then responsibilities:

                                                <ul className="list-disc list-inside mt-4">
                                                    <li>Led a team project during internship at Algonquin College, where
                                                        we created a learning
                                                        platform from scratch. (demo)
                                                    </li>
                                                    <li>Executed full-stack web application development using Python
                                                        Django framework and
                                                        React.js, ensuring seamless integration with backend systems.
                                                    </li>
                                                    <li>Conducted unit testing and resolved software defects,
                                                        contributing to the
                                                        enhancement of product releases.
                                                    </li>
                                                    <li>Put the platform online with AWS, using different cloud services
                                                        for better performance.
                                                    </li>
                                                    <li>Configured and maintained CI/CD pipeline for automatic
                                                        redeployment.
                                                    </li>

                                                </ul>

                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                                Self-initiated projects
                                            </h2>
                                            <p className=" mt-4 text-lg font-medium text-blue-500">
                                                Various Projects {" "}

                                                <span className="block text-xs text-white/45">
                    Sept. 2022 - Present
                  </span>
                                            </p>
                                            <p className="mt-4 text-md font-medium text-white/45">
                                                I worked on various self-initiated projects as a fullstack web
                                                developer.
                                                Through this experiential learning, I gained a deeper understanding of
                                                the web development process, SDLC, Design Patterns and
                                                various system architectural techniques for writing clean, maintainable
                                                code.
                                                All my projects are available on this website,<Link href={"/projects"}
                                                                                                    className="text-blue-500"> check
                                                them out.</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </FramerMotionWrapper>

    )
}
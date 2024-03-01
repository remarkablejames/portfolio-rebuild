import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Link from "next/link";

export default function About() {
    return (
        <FramerMotionWrapper>
        {/*<div className="max-w-7xl 2xl:max-w-7xl mx-auto  py-4 ">*/}
        {/*<section className="relative flex items-center justify-center overflow-hidden">*/}
        {/*    <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-8 lg:py-14 md:px-12">*/}
        {/*        <div>*/}
        {/*            <div className="w-full mx-auto">*/}
        {/*                <p className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-6xl">*/}
        {/*                    A little bit about me*/}
        {/*                    &amp;*/}
        {/*                    <span className="md:block">*/}
        {/*                    {" "}why I am <span className="text-[#50d236]"> remarkable</span>.*/}
        {/*                    </span>*/}
        {/*                </p>*/}
        {/*                <p className="max-w-2xl mt-4 text-lg text-white/45">*/}
        {/*                    I am that guy who has a hint on every tech stack but is a master of TypeScript, Python and*/}
        {/*                    their web frameworks. I have a diverse set of skills, ranging from design, scripting, to backend development.*/}
        {/*                    I am highly flexible and can pick up new skills quickly in any language or framework. Currently, I am Learning Rust and Go.*/}
        {/*                </p>*/}

        {/*                /!*<p className="max-w-2xl mt-4 text-lg text-white/45">*!/*/}
        {/*                /!*    A web wizard who knows how to make things work, and make them work well.*!/*/}
        {/*                /!*    I build UIs that marry the best of both beauty and functionality.*!/*/}
        {/*                /!*</p>*!/*/}

        {/*                <p className="max-w-2xl mt-4 text-lg text-white/45">*/}
        {/*                    I am more of a self-taught developer because I started coding before going to college.*/}
        {/*                    I like to work on the backend of the web, building*/}
        {/*                    APIs and Microservices but my front-end skills in React.js are sharper than Ninjatō . I have*/}
        {/*                    built many small scale apps  using various tech stack throughout my formal education at Algonquin*/}
        {/*                    College, where I am currently pursuing a college diploma in Web Development and Internet*/}
        {/*                    Applications.*/}
        {/*                </p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <Link*/}
        {/*            href="/projects"*/}
        {/*            className="mt-6 text-black font-semibold focus:outline-none inline-flex items-center justify-center rounded-md bg-white duration-200 focus-visible:outline-black focus-visible:ring-black  hover:bg-white/70   lg:w-auto px-6 py-3 text-center w-full"*/}
        {/*        >*/}
        {/*            Here&apos;s some of my work*/}
        {/*        </Link>*/}
        {/*    </div>*/}
        {/*</section>*/}
        {/*</div>*/}
            <>
                <section>
                    <div className="max-w-5xl px-8 py-24 pb-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-32">
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <img
                                    className="inline-block object-cover w-24 h-48 rounded-full lg:w-64 lg:h-96"
                                    src="https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/to3tenbsq2dmchmltaau"
                                    alt=""
                                />
                            </div>
                            <div className="ml-4 md:ml-8">
                                <p className="text-4xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl">
                                    James Niyongira
                                    <span className="block text-white/45">Web developer</span>
                                </p>
                                <div className="flex mt-12 space-x-6 text-xs text-white/45 uppercase">
                                    <a href="https://twitter.com/remarkablejames" className="duration-200 hover:text-gray-400">
                                        {" "}
                                        Twitter
                                    </a>
                                    <a href="https://www.linkedin.com/in/james-niyongira-551082156/" className="duration-200 hover:text-gray-400">
                                        {" "}
                                        Linkedin
                                    </a>
                                    <a href="https://github.com/remarkablejames" className="duration-200 hover:text-gray-400">
                                        {" "}
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col gap-12">
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
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                    <path d="M3.6 9h16.8" />
                                                    <path d="M3.6 15h16.8" />
                                                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                                                    <path d="M12.5 3a17 17 0 0 1 0 18" />
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
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                                                    <path d="M11 4h2" />
                                                    <path d="M12 17v.01" />
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
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                                    <path d="M3 7l9 6l9 -6" />
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
                                                <span className="block">Algonquin College</span>
                                            </dt>
                                            <dd className="font-medium text-blue-500">2022 - present</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Expertise
                                    </h2>
                                    <ul role="list" className="mt-4 space-y-2 text-sm text-white/45">
                                        <li>JavaScript</li>
                                        <li>Python</li>
                                        <li>C#</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Skills
                                    </h2>
                                    <ul role="list" className="mt-4 space-y-2 text-sm text-white/45">
                                        <li>Fullstack development</li>
                                        <li>Communication</li>
                                        <li>Team Work</li>
                                        <li>Goal oriented</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-12 lg:col-span-2">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Summary
                                    </h2>
                                    <p className="mt-4 text-md text-white/45 font-medium">
                                        Results-driven Web Applications Developer with a strong foundation in full-stack development,
                                        specializing in Microsoft .NET technologies and JavaScript.
                                        Currently pursuing a Diploma in Web Development & Internet Applications at Algonquin College.
                                        Proven expertise in designing and implementing web applications using a variety of languages, frameworks, and tools.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                        Work experience
                                    </h2>
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <p className="mt-4 text-lg font-medium text-blue-500">
                                                Web Developer Intern - {" "}
                                                <span className="text-white/45">Algonquin College Innovation Hub</span>
                                                <span className="block text-xs text-white/45">
                    September 2023 - December 2023
                  </span>
                                            </p>
                                            <p className="mt-4 text-md font-medium text-white/45">
                                                At the Innovation Hub, I worked on a team of developers to build
                                                a web application that allows students to learn supplemental
                                                material for their courses online. I was responsible for the front-end
                                                development of the application using TypeScript (Next.js).
                                                I also worked on the back-end using Python (Django) to build the REST
                                                API.
                                                Results speak for themselves, check out the app <Link
                                                href={"https://brainwave-kohl.vercel.app/demo"}
                                                className="text-blue-500"> here.</Link>

                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-bold tracking-tight text-white/80">
                                                Self-initiated projects
                                            </h2>
                                            <p className=" mt-4 text-lg font-medium text-blue-500">
                                                Various Projects  {" "}

                                                <span className="block text-xs text-white/45">
                    Sept. 2022 - Present
                  </span>
                                            </p>
                                            <p className="mt-4 text-md font-medium text-white/45">
                                                I worked on various self-initiated projects as a front-end and back-end
                                                developer.
                                                Through this experiential learning, I gained a deeper understanding of
                                                the web development process and
                                                the importance writing clean, maintainable code.
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
                <footer>
                    <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-48">
                        <p className="max-w-2xl text-sm text-left text-zinc-500">
                            © James Niyongira. All rights reserved.
                        </p>
                    </div>
                </footer>
            </>

        </FramerMotionWrapper>

    )
}
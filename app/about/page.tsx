import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Link from "next/link";

export default function About() {
    return (
        <FramerMotionWrapper>
        <div className="max-w-7xl 2xl:max-w-7xl mx-auto  py-4 ">
        <section className="relative flex items-center justify-center overflow-hidden">
            <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-32 md:px-12">
                <div>
                    <div className="w-full mx-auto">
                        <p className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                            A little bit about me
                            &amp;
                            <span className="md:block">
                            {" "}why I am <span className="text-[#50d236]"> remarkable</span>.
                            </span>
                        </p>
                        <p className="max-w-2xl mt-4 text-lg text-white/45">
                            I am that guy who has a hint on every tech stack but is a master of TypeScript, Python and
                            their web frameworks. I am a big fan of the open-source community, and I try to give back as
                            much as I can through my GitHub contributions.
                        </p>

                        <p className="max-w-2xl mt-4 text-lg text-white/45">
                            A web wizard who knows how to make things work, and make them work well.
                            I build UIs that marry the best of both beauty and functionality.
                        </p>

                        <p className="max-w-2xl mt-4 text-lg text-white/45">
                            I am more of a self-taught developer, I started coding before going to college.
                            I like to work on the backend of the web, building
                            APIs and Microservices but my front-end skills in React.js are sharper than Ninjatō . I have
                            built complex backend systems using Java, and C# throughout my formal education at Algonquin
                            College, where I am currently pursuing a college diploma in Web Development and Internet
                            Applications.
                        </p>
                    </div>
                </div>
                <Link
                    href="/projects"
                    className="mt-6 text-black font-semibold focus:outline-none inline-flex items-center justify-center rounded-md bg-white duration-200 focus-visible:outline-black focus-visible:ring-black  hover:bg-white/70   lg:w-auto px-6 py-3 text-center w-full"
                >
                    Here&apos;s some of my work
                </Link>
            </div>
        </section>
        </div>
        </FramerMotionWrapper>

    )
}
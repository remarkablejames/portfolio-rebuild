import FramerMotionWrapper from "@/components/FramerMotionWrapper";

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
                            I am a full-stack web applications developer with a extensive skill set in various
                            programming languages and frameworks.
                        </p>

                        <p className="max-w-2xl mt-4 text-lg text-white/45">
                            I am more of a self-taught developer, I started building websites before going to college.
                            I have been coding for over 3 years now. I like to work on the backend of the web, building APIs and Microservices but my front-end skills in React.js are sharper than Ninjatō . I have built complex backend systems using Java, and C# throughout my formal education at Algonquin College, where I am currently pursuing a college diploma in Web Development and Internet Applications.
                        </p>
                        <p className="max-w-2xl mt-4 text-lg text-white/45">
                            A web wizard who knows how to make things work, and make them work well.
                            I am a big fan of the open-source community, and I try to give back as much as I can through my GitHub contributions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </FramerMotionWrapper>

    )
}
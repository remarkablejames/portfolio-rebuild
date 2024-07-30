import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function About() {
  return (
    <FramerMotionWrapper>
      <>
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
                        <span className="block">
                          Web Development and Internet Applications
                        </span>
                        <span className="block italic">Algonquin College</span>
                      </dt>
                      <dd className="font-medium text-blue-500">
                        Sept. 2022 - Apr. 2024
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white/80">
                    Expertise
                  </h2>
                  <ul
                    role="list"
                    className="mt-4 space-y-2 text-sm text-white/45"
                  >
                    <li>TypeScript</li>
                    <li>Nodejs</li>
                    <li>C# (.NET Core)</li>
                    <li>Reactjs/Nextjs</li>
                    <li>React Native</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white/80">
                    Skills
                  </h2>
                  <ul
                    role="list"
                    className="mt-4 space-y-2 text-sm text-white/45"
                  >
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
                    Recent graduate with a Diploma in Web Development & Internet
                    Applications, bringing a strong software development
                    background and a passion for technology and continuous
                    learning. Skilled in designing and developing sophisticated
                    applications using modern technologies. Proven ability to
                    diagnose and resolve software defects, resulting in improved
                    system performance. Team player with excellent communication
                    skills, eager to contribute to collaborative projects.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white/80">
                    Work experience
                  </h2>
                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="mt-4 text-lg font-medium text-blue-500">
                        Co-founder &amp; Lead Frontend Developer -{" "}
                        <span className="text-white/45">
                          SomoLabs Ltd, Kigali, Rwanda
                        </span>
                        <span className="block text-xs text-white/45">
                          July 2023 - present
                        </span>
                      </p>
                      <div className="mt-4 text-md font-medium text-white/45">
                        <ul className="list-disc list-inside mt-4">
                          <li>
                            Co-founded and developed an online learning platform
                            allowing students to enroll in curriculum-based
                            courses with interactive content, exercises,
                            external resources, and discussion forums.
                          </li>
                          <li>
                            Lead the development and deployment of the platform,
                            implementing features such as personalized learning
                            paths, gamified learning experiences, and real-time
                            feedback and assessments.
                          </li>
                          <li>
                            Managed all aspects of the project including
                            planning, coding, testing, and deployment using
                            technologies like React.js, Python Django,
                            microservices, Docker, and AWS.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p className="mt-4 text-lg font-medium text-blue-500">
                        Software Developer Intern -{" "}
                        <span className="text-white/45">
                          Algonquin College ( Dpt. of Entrepreneurship &
                          Innovation)
                        </span>
                        <span className="block text-xs text-white/45">
                          September 2023 - December 2023
                        </span>
                      </p>
                      <div className="mt-4 text-md font-medium text-white/45">
                        This internship was a great opportunity to put my skills
                        to the test and learn new ones. I was able to work on a
                        project that involved creating a learning platform from
                        scratch using various technologies such as Python
                        Django, React.js, and AWS. Below are some of my then
                        responsibilities:
                        <ul className="list-disc list-inside mt-4">
                          <li>
                            Collaborated in a team to develop a complex web
                            application with a large codebase.
                          </li>
                          <li>
                            Implemented TypeScript optimizations, reducing page
                            load times by 25%, enhancing user experience.
                          </li>
                          <li>
                            Identified and fixed 15 critical bugs in the Python
                            backend, reducing application downtime by 30%.
                          </li>
                          <li>
                            Developed and deployed 3 new user-facing features,
                            increasing user engagement by 20% within the first
                            month.
                          </li>
                          <li>
                            Configured and maintained CI/CD pipeline for
                            automatic redeployment.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-white/80">
                        Self-initiated projects
                      </h2>
                      <p className=" mt-4 text-lg font-medium text-blue-500">
                        Various Projects{" "}
                        <span className="block text-xs text-white/45">
                          Sept. 2022 - Present
                        </span>
                      </p>
                      <p className="mt-4 text-md font-medium text-white/45">
                        I worked on various self-initiated projects as a
                        fullstack web developer. Through this experiential
                        learning, I gained a deeper understanding of the web
                        development process, SDLC, Design Patterns and various
                        system architectural techniques for writing clean,
                        maintainable code. All my projects are available on this
                        website,
                        <Link href={"/projects"} className="text-blue-500">
                          {" "}
                          check them out.
                        </Link>
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
  );
}

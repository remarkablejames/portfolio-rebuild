
import CenteredLayout from "@/components/layout/centered-layout";

export default function Home() {
  return (
      <>
          <CenteredLayout>
              <section className="w-full flex flex-col items-center justify-center text-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                      <p className="text-muted-foreground w-full sm:w-[5rem] text-start sm:text-end">Summary</p>
                      <div className="w-full sm:max-w-lg space-y-4">
                          <p>
                              Hi, I’m James – a software developer and entrepreneur based in Ottawa.
                          </p>
                          <p>
                              I’m currently building <a href={"https://www.somolabs.com/"} target="_blank" className="text-blue-600">SomoLabs</a>, an integrated online learning
                              platform that offers curriculum-aligned courses via multimedia format.
                          </p>
                          <p>
                              I love the craft of software engineering and enjoy reading technical books. I write
                              TypeScript, Python, and C#. My all-time favorite is <a href="https://www.google.com/search?q=The+Mythical+Man-Month&sourceid=chrome&ie=UTF-8" target="_blank" className="text-blue-600">The Mythical Man-Month</a>,
                              a collection of software engineering essays written by Fred Brooks. If you haven&apos;t;
                              give it a read.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="w-full flex flex-col items-center justify-center text-md mt-12">
                  <div className="flex flex-col sm:flex-row gap-3">
                      <p className="text-muted-foreground w-full sm:w-[5rem] text-start sm:text-end">Education</p>
                      <div className="w-full sm:max-w-lg">
                          <p>Ontario College Diploma in Web Development & Internet Application</p>
                          <p className="text-white/50 mt-2">Algonquin College of Applied Arts and Technology - Ottawa,
                              ON</p>
                          <p className="text-white/50 text-xs mt-2">2022 - 2024</p>
                      </div>
                  </div>
              </section>

              <section className="w-full flex flex-col items-center justify-center text-md mt-12">
                  <div className="flex flex-col sm:flex-row gap-3">
                      <p className="text-blue-600 sm:text-muted-foreground w-full sm:w-[5rem] text-start sm:text-end">Work</p>
                      <div className="w-full sm:w-[32rem] space-y-6">
                          <div>
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                                  <p>Co-founder & developer @ SomoLabs</p>
                                  <div className="border-t flex-grow border-zinc-700"/>
                                  <p className="text-white/30">2023 - Present</p>
                              </div>
                              <p className="text-white/50">
                                  SomoLabs is an educational startup SaaS company registered in Kigali, Rwanda. I
                                  co-founded the company with 2 friends in 2023. I am responsible for the frontend
                                  development of the platform.
                              </p>
                          </div>
                          <div>
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                                  <p>Intern @ Algonquin College</p>
                                  <div className="border-t flex-grow border-zinc-700"/>
                                  <p className="text-white/30">Sept. 2023 - Dec. 2024</p>
                              </div>
                              <p className="text-white/50">
                                  I worked as a software developer intern at Algonquin College&apos;s department of
                                  Innovation and Entrepreneurship. It was more of entrepreneurial work than software
                                  development. From there, SomoLabs was born.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
          </CenteredLayout>
      </>

  )
}

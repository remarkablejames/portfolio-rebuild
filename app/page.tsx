
import CenteredLayout from "@/components/layout/centered-layout";

export default function Home() {
  return (
      <>
          <CenteredLayout>
              <section className="w-full flex flex-col items-center justify-center text-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                      <p className="text-neutral-500 w-full sm:w-[5rem] text-start sm:text-end">Summary:</p>
                      <div className="w-full sm:max-w-lg space-y-4">
                          <p>
                              Hi, I’m James – a software developer based in Ottawa.
                          </p>
                          {/*<p>*/}
                          {/*    I currently work as a Frontend Developer at <a href={"https://www.somolabs.com/"} target="_blank" className="text-blue-600">SomoLabs</a>, an integrated online learning*/}
                          {/*    platform that offers curriculum-aligned courses delivered in  multimedia format.*/}
                          {/*</p>*/}
                          <p>
                              I love the craft of software engineering and folk-pop music. When I’m not writing TypeScript or C#, you’ll often find me listening to my favorite Icelandic band, <a href="https://www.youtube.com/@monstersandmen" target="_blank" className="text-blue-600">Of
                              Monsters and Men</a>.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="w-full flex flex-col items-center justify-center text-md mt-12">
                  <div className="flex flex-col sm:flex-row gap-3">
                      <p className="text-neutral-500 w-full sm:w-[5rem] text-start sm:text-end">Education:</p>
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
                      <p className="text-neutral-500 w-full sm:w-[5rem] text-start sm:text-end">Work:</p>
                      <div className="w-full sm:w-[32rem] space-y-6">
                          <div>
                              <div className="flex flex-col sm:flex-row items-start md:items-center justify-between gap-0 md:gap-2">
                                  <p>Frontend Engineer @ <a href={"https://www.somolabs.com/"} className="text-blue-600">SomoLabs</a></p>
                                  <div className="border-t flex-grow border-zinc-700"/>
                                  <p className="text-white/30 text-xs  mb-4 md:mb-0">Dec. 2023 - Present</p>
                              </div>
                              <p className="text-white/50">
                                  SomoLabs is an educational SaaS startup that I co-founded and developed from scratch with two other friends after finishing college. I work as a frontend engineer, primarily focusing on UI design, performance optimization, Testing and  integration with the back-end and third-party APIs.
                              </p>
                          </div>
                          <div>
                              <div
                                  className="flex flex-col sm:flex-row items-start md:items-center justify-between gap-0 md:gap-2">
                                  <p>Software Developer Intern @ Algonquin College</p>
                                  <div className="border-t flex-grow border-zinc-700"/>
                                  <p className="text-white/30 text-xs  mb-4 md:mb-0">Sept. 2023 - Dec.
                                      2024</p>
                              </div>
                              <p className="text-white/50">
                                  I worked as a software developer intern at Algonquin College&apos;s department of
                                  Innovation and Entrepreneurship. It was more of entrepreneurial work than software
                                  development. From there, I got an Idea of creating SomoLabs.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
          </CenteredLayout>
      </>

  )
}

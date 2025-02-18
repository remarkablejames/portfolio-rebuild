import CenteredLayout from "@/components/layout/centered-layout";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";

export default function Home() {
  return (
    <FramerMotionWrapper>
      <CenteredLayout>
        <section className="w-full flex flex-col items-center justify-center text-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <p className="text-neutral-500 w-full sm:w-[5rem] text-start sm:text-end">
              Summary:
            </p>
            <div className="w-full sm:max-w-lg space-y-4">
              <p>Hi, I’m James – a minimalist software engineer based in Ottawa.</p>
              {/*<p>*/}
              {/*    I currently work as a Frontend Developer at <a href={"https://www.somolabs.com/"} target="_blank" className="text-blue-600">SomoLabs</a>, an integrated online learning*/}
              {/*    platform that offers curriculum-aligned courses delivered in  multimedia format.*/}
              {/*</p>*/}
              <p className="text-justify">
                I love the craft of software engineering, Philosophy and
                indie-pop music. When I’m not nerding out to something, you’ll
                often find me listening to music. My favorite band is  British,{" "}
                <a
                  href="https://open.spotify.com/artist/3XHO7cRUPCLOr6jwp8vsx5?si=wSaAGZZoQ6KL6b59X3QaMA"
                  target="_blank"
                  className="text-blue-600"
                >
                  Alt-J
                </a>
                .
              </p>
              <p className="text-justify">
                I specialize in full-stack web application development, particularly in distributed systems. I am passionate about
                creating digital solutions that solve real-world problems and enhance people&apos;s lives. Currently, I am building an
                online learning platform called SomoLabs. Take a free tour at{" "}
                <a
                  href="https://www.somolabs.com/"
                  target="_blank"
                  className="text-blue-600"
                >
                  somolabs.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center text-md mt-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <p className="text-neutral-500 w-full sm:w-[5rem] text-start sm:text-end">
              Education:
            </p>
            <div className="w-full sm:max-w-lg">
              <p>
                Ontario College Diploma in Web Development & Internet
                Application
              </p>
              <p className="text-white/50 mt-2">
                Algonquin College of Applied Arts and Technology - Ottawa, ON
              </p>
              <p className="text-white/50 text-xs mt-2">2022 - 2024</p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center justify-center text-md mt-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <p className="text-neutral-500 w-full sm:w-[5rem] text-start sm:text-end">
              Work:
            </p>
            <div className="w-full sm:w-[32rem] space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row items-start md:items-center justify-between gap-0 md:gap-2">
                  <p>
                    Software Engineer @{" "}
                    <a
                      href={"https://www.somolabs.com/"}
                      className="text-blue-600"
                    >
                      SomoLabs
                    </a>
                  </p>
                  <div className="border-t flex-grow border-zinc-700" />
                  <p className="text-white/30 text-xs  mb-4 md:mb-0">
                    Dec. 2023 - Present
                  </p>
                </div>
                <p className="text-white/60 text-justify">
                  As a frontend engineer, I plan,design, develop and test user interfaces for SomoLabs&apos; online learning platform. I,
                  drive performance improvements, implement comprehensive
                  testing strategies, and ensure seamless integration with
                  backend services and third-party APIs.
                  {/* My role blends
                  technical expertise with strategic product development,
                  creating intuitive and efficient digital learning solutions. */}
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row items-start md:items-center justify-between gap-0 md:gap-2">
                  <p className="">
                    Software Developer Intern @ Algonquin College
                  </p>
                  <div className="border-t flex-grow border-zinc-700" />
                  <p className="text-white/30 text-xs  mb-4 md:mb-0">
                    Sept. 2023 - Dec. 2024
                  </p>
                </div>
                <p className="text-white/60 text-justify mt-2">
                  During this internship, I transitioned beyond traditional
                  software development into a more holistic role that centered
                  on entrepreneurial strategy and innovation.
                  {/* This experience
                  was pivotal in shaping my understanding of technology&apos;s
                  potential to solve educational challenges, ultimately
                  inspiring the conceptualization of SomoLabs. Rather than
                  focusing solely on coding, I gained insights into the broader
                  ecosystem of technological innovation, product development,
                  and entrepreneurial thinking. */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </CenteredLayout>
    </FramerMotionWrapper>
  );
}

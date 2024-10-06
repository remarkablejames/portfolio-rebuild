import React from 'react';
import CenteredLayout from "@/components/layout/centered-layout";

function Page() {
    return (
        <CenteredLayout>
            <section className="w-full flex flex-col items-center justify-center text-md mt-12">
                <h4 className="scroll-m-20 text-md sm:text-xl font-semibold tracking-tight pb-2 sm:pb-6 mb-8 sm:mb-0 border-b border-zinc-700 text-center sm:text-left">
                    Software I use, gadgets I love, and other things I recommend.
                </h4>

                {/* Workstation Section */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <p className="text-blue-600 sm:text-muted-foreground w-full sm:w-[7rem] text-start sm:text-end">Workstation</p>
                    <div className="w-full sm:w-[32rem] space-y-6">
                        <div>
                            <p>14&quot; MacBook Pro (late 2023), M3 chip with 18GB RAM and 1TB SSD</p>
                            <p className="text-white/50">
                                I don&apos;t know how Apple makes such a tiny laptop so fast and responsive, no matter what load I put on it.
                            </p>
                        </div>
                        <div>
                            <p>LG 27UL500-W 27-Inch UHD IPS Monitor</p>
                            <p className="text-white/50">
                                This is a great monitor for the price. It&apos;s not the best, but it&apos;s a great value.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Software Section */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <p className="text-blue-600 sm:text-muted-foreground w-full sm:w-[7rem] text-start sm:text-end">Software</p>
                    <div className="w-full sm:w-[32rem] space-y-6">
                        <div>
                            <p>Jetbrains Toolbox</p>
                            <p className="text-white/50">
                                I use the Jetbrains Toolbox to manage all of my IDEs. I use WebStorm, Rider, DataGrip, and Space most often.
                            </p>
                        </div>
                        <div>
                            <p>Gitkraken</p>
                            <p className="text-white/50">
                                I use Gitkraken to manage all of my Git repositories. It&apos;s a great tool for visualizing branches and commits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </CenteredLayout>
    );
}

export default Page;
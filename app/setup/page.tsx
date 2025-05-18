import React from 'react';
import CenteredLayout from "@/components/layout/centered-layout";
import Link from "next/link";

function Page() {
    return (
            <section className="max-w-4xl mx-auto px-4 py-8">
                {/* Navigation */}
                <nav className="flex justify-end mb-8">
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-red-600 hover:text-red-800">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/setup" className="text-red-600 hover:text-red-800">
                                My Setup
                            </Link>
                        </li>
                    </ul>
                </nav>
                <h4 className="scroll-m-20 text-md sm:text-xl font-semibold tracking-tight pb-2  mb-12 sm:mb-0 border-b  text-center sm:text-left">
                    Software I Use and  Gadgets I Love
                </h4>

                {/* Workstation Section */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <p className="text-neutral-500 w-full sm:w-[7rem] text-start sm:text-end">Workstation</p>
                    <div className="w-full sm:w-[32rem] space-y-6">
                        <div>
                            <p>14&quot; MacBook Pro (late 2023), M3 chip with 18GB RAM and 1TB SSD</p>
                            <p className="text-sm text-neutral-500">
                                I don&apos;t know how Apple makes such a tiny laptop so fast and responsive, no matter
                                what load I put on it.
                            </p>
                        </div>
                        <div>
                            <p>LG 27UL500-W 27-Inch UHD IPS Monitor</p>
                            <p className="text-sm text-neutral-500">
                                This is a great monitor for the price. It&apos;s not the best, but it&apos;s a great
                                value.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Software Section */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <p className="text-neutral-500 w-full sm:w-[7rem] text-start sm:text-end">Software</p>
                    <div className="w-full sm:w-[32rem] space-y-6">
                        <div>
                            <p>Jetbrains Toolbox</p>
                            <p className="text-sm text-neutral-500">
                                I am not a typical VS Code guy, I use the Jetbrains IDEs on all of my projects.
                                WebStorm, Pycharm, Rider and DataGrip are pinned to my taskbar.
                            </p>
                        </div>
                        <div>
                            <p>Gitkraken</p>
                            <p className="text-sm text-neutral-500">
                                I use Gitkraken to manage all of my Git repositories. It&apos;s a great tool for
                                visualizing branches and commits.
                            </p>
                        </div>
                    </div>
                </div>

                {/*    Music section*/}

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <p className="text-neutral-500 w-full sm:w-[7rem] text-start sm:text-end">Music</p>
                    <div className="w-full sm:w-[32rem] space-y-6">
                        <div>
                            <p>Of Monsters and Men
                            </p>
                            <p className="text-sm text-neutral-500">
                                When coding, I listen to  indie-pop folklore music, this Icelandic band and British Alt-J are my fastest ticket to productivity zone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Page;
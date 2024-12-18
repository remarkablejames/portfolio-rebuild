import React from "react";
import CenteredLayout from "@/components/layout/centered-layout";
import {posts} from "@/app/blog/posts";
import Link from "next/link";
import {DateFormatter} from "@/lib/utils";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";

export default function Blog() {
    return (
        <FramerMotionWrapper>
        <CenteredLayout>
            <section className={"flex items-center justify-center"}>
                {/* List */}
                <ul className="space-y-10 flex flex-col  max-w-xl min-w-lg">
                    {
                        posts.map((post, index) => (
                            <Link href={`/blog/${post.id}`} key={index}>
                            <li>
                                <p className=" text-xs text-gray-500 dark:text-neutral-500">{DateFormatter(new Date(post.date))}</p>
                                <h5 className="font-medium text-md md:text-lg text-neutral-200">
                                    {post.title}
                                </h5>
                                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    {post.about}
                                </p>
                                <p className="mt-1">
                                    <a
                                        className="text-sm text-blue-500 underline hover:text-neutral-500 hover:decoration-2 focus:outline-none focus:decoration-2  transition-colors duration-200"
                                        href="#"
                                    >
                                        Continue reading
                                    </a>
                                </p>
                            </li>
                            </Link>
                        ))
                    }

                </ul>
                {/* End List */}
            </section>

        </CenteredLayout>
        </FramerMotionWrapper>
    );
};
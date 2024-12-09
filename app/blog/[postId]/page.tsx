import React from "react";
import { posts } from "@/app/blog/posts";
import MarkdownTransformer from "@/components/markdown-transformer";
import { DateFormatter } from "@/lib/utils";

function Page({ params }: { params: { postId: number } }) {
  const postId = params.postId;
  const currentPost = posts.find((post) => post.id === Number(postId));
  return (
    <div>
      <>
        {/* Blog Article */}
        <div className="flex items-center justify-center">
          {currentPost && (
            <div className="max-w-2xl px-3 md:px-0">
              {/* Content */}
              <div className="space-y-5 md:space-y-8">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl font-bold md:text-3xl">
                      {currentPost.title}
                    </h2>
                    <p className={"text-sm text-neutral-400"}>
                      Published on {DateFormatter(new Date(currentPost.date))}
                    </p>
                  </div>
                  <div className={"prose  text-neutral-200 "}>
                    <MarkdownTransformer
                      markdownContent={currentPost.content}
                    />
                  </div>
                </div>
              </div>
              {/* End Content */}
            </div>
          )}
        </div>
        {/* End Blog Article */}
      </>
    </div>
  );
}

export default Page;

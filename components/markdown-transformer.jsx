"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { CopyBlock, dracula } from "react-code-blocks"; // `rehype-katex` does not import the CSS for you

// THIS COMPONENT IS DEPRECATED. USE MARKDOWNENGINE INSTEAD.

export default function MarkdownTransformer({ markdownContent }) {
  return (
    <div className={"flex items-center justify-center"}>
      <article className="max-w-none  py-2 prose "
      >
        <ReactMarkdown
          className={"max-w-4xl overflow-scroll"}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[
            [
              rehypeKatex,
              { displayMode: false, data: { delimiters: "dollars" } },
            ],
          ]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className={"w-full overflow-auto"}>
                  <div className={"hidden lg:block"}>
                    <CopyBlock
                      text={children}
                      language={match[1]}
                      showLineNumbers
                      wrapLines
                      codeBlock={true}
                      theme={dracula}
                      // wrapLongLines
                    />
                  </div>
                  <div className={"block lg:hidden px-4"}>
                    <p className={"text-red-600"}>
                      Please view code on a larger screen
                    </p>
                  </div>
                </div>
              ) : (
                <CopyBlock
                  text={children}
                  language={"JavaScript"}
                  showLineNumbers
                  wrapLines
                />
                // <code className={className} {...props}>
                //   {children}
                // </code>
              );
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </article>
    </div>
  );
}

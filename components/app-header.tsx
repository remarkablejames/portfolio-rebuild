"use client";
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

function AppHeader() {

    const links = [
        {
            name: "About",
            url: "/"
        },
        {
            name: "Projects",
            url: "/projects"
        },
        {
            name: "Blog",
            url: "/blog"
        },
        {
            name: "My Setup",
            url: "/setup"
        },
        {
            name: "Contact",
            url: "/contact"
        },
        {
            name: "Resume",
            url: "/assets/James-Niyongira-Resume.pdf"
        }
    ]

    const pathname = usePathname()
    return (
        <section className={"w-full flex flex-col items-center justify-center mt-12  mb-24"}>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-green-600">James Niyongira</h3>
            <p className={"text-muted-foreground text-xs"}>
                @remarkablejames
            </p>
            <div className={"flex gap-3 text-muted-foreground mt-6 text-sm"}>
                {links.map((link, index) => (
                    <Link key={index} href={link.url}
                          className={`hover:text-primary-foreground ${pathname === link.url ? "text-white" : ""}`}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default AppHeader;
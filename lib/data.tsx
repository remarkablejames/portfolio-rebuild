export const projects = [
    {
        id: 1,
        title: "Brainwave (Learning Platform)",
        description: "An online learning platform that offer curriculum-based courses created by subject-matter experts, delivered in a multimodal format.",
        image: "https://res.cloudinary.com/dhka6cqkn/image/upload/f_auto,q_auto/v1/Brainwave-images/pbhlifaj3bfj4viuq0bm",
        link: "https://brainwave-client.vercel.app/",
        stack: [{ Framework: "Next.js & Django" }, { Language: "TypeScript & Python" }, { CSS: "Tailwind CSS" },{ "Use case": "Education" }],
        // These are the steps to setup the project locally. the title for command step must always be commands
        setup: [{ title: "About the project",
            description:"Brainwave is an in production online learning platform that delivers curriculum-based courses taught in multi-mdal way of either texts, videos, interactive simulations and tons of exercises. It is built with Next.js and Django. The frontend is built with Next.js and Tailwind CSS. The backend is built with Django and Django Rest Framework. The database is PostgreSQL. The app is hosted on Vercel and AWS."
        },
            // { title: "Demo of the app",description:"You can check out a demo of the app by clicking the demo link below. in the left sidebar, you can see the list of courses available. You can enroll in a course by clicking the enroll button. You can also see the progress of the course you are enrolled in. Login credentials are email: james@brainwave.com, password: test123"},
        ],
        github: "somelink.github.io",
        tag:"Typescript & Python",


    },
    {
        id: 2,
        title: "Admin Portal for Brainwave",
        description: "Administartive portal for Brainwave School. A platform that allows admin to manage courses, users, and other resources.",
        image: "https://res.cloudinary.com/dhka6cqkn/image/upload/f_auto,q_auto/v1/Brainwave-images/jytxh7hxwgvwit3ufpop",
        link: "https://brainwave-admin.vercel.app/",
        stack: [{ Framework: "Next.js & Django" }, { Language: "TypeScript & Python" }, { CSS: "Tailwind CSS" },{ "Use case": "Education" }],
        // These are the steps to setup the project locally. the title for command step must always be commands
        setup: [{ title: "About the project",
            description:"Brainwave is an in production online learning platform that delivers curriculum-based courses taught in multi-mdal way of either texts, videos, interactive simulations and tons of exercises. It is built with Next.js and Django. The frontend is built with Next.js and Tailwind CSS. The backend is built with Django and Django Rest Framework. The database is PostgreSQL. The app is hosted on Vercel and AWS."
        },
            // { title: "Demo of the app",description:"You can check out a demo of the app by clicking the demo link below. in the left sidebar, you can see the list of courses available. You can enroll in a course by clicking the enroll button. You can also see the progress of the course you are enrolled in. Login credentials are email: james@brainwave.com, password: test123"},
        ],
        github: "somelink.github.io",
        tag:"Typescript & Python",


    },
    {
        id: 3,
        title: "Advanced Markdown Processor",
        description: "This is a pure Node.js application that processes markdown files and generates a static HTML website.",
        image: "https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/t1peah1tjqyjxlyguirs",
        link: "none",
        stack: [ { Language: "TypeScript" },{ "Use case": "Document conversion" }],
        setup: [{ title: "Why build this thing?",description:"This app is part of bigger project that I was working on that involved converting markdown files into html for better styled rendering.  I decide to detach this mini application and make it open source so that everyone who wants the same solution" +
                "can have it prebuilt without re-inventing the wheel. I use many open source tools so I thought giving back something however small can be significant.  " },
            { title: "How it works",description:"You feed in the markdown text and you get HTML back on the fly. you can copy the processed HTML by using the black copy button. It's that simple. There are other tools that do this but what's special about this is the ability to extend the capabilities of markdown. "
                    + "It can render, all basic md elements, images, videos, code blocks, tables, and even math equations (Latex). It also supports custom elements that you can define yourself. "
            }],
        github: "https://github.com/remarkablejames/markdown-processor.git",
        tag:"Typescript"

    },
    // {
    //     id: 4,
    //     title: "Clone of the Netflix UI",
    //     description: "This is a clone of the Netflix UI built with Next.js, TypeScript, MongoDB  and Tailwind CSS.",
    //     image: "https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/uasxusrgcaij0ytbduyh",
    //     link: "https://movies-app-james-one-green.vercel.app/",
    //     stack: [{ Framework: "Next.js" }, { Language: "TypeScript" }, { CSS: "Tailwind CSS" },{ "Use case": "Starter" }],
    //     setup: [{ title: "Why I cloned Netflix UI?",description:"Among the web apps that I love how they look and feel very modern, Netflix is on top tier. As a web developer it left me wondering how they made a beautiful web app like that, full of smooth animations." +
    //             "I tried to replicate it so that I can learn how to design cool web UIs. " }],
    //     github: "somelink.github.io",
    //     tag:"Typescript"
    //
    // },
    // {
    //     id: 4,
    //     title: "Reactive Notes",
    //     description: "This is a web application that allows users to create, read, update and delete notes.",
    //     image: "https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/vxqydtvs4gi5kymqjeoj",
    //     link: "https://notes-app-james.netlify.app/",
    //     stack: [{ Framework: "React.js" }, { Language: "JavaScript" }, { CSS: "Tailwind CSS" },{ "Use case": "Note taking" }],
    //     setup: [{ title: "How it was built",description:" This app is entirely built with react and leverages react.js hooks, best practices and good design" }],
    //     github: "somelink.github.io",
    //     tag:"React.js"
    //
    // },
    ];
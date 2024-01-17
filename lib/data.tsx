export const projects = [
    {
        id: 1,
        title: "Brainwave Online School",
        description: "This is a web application that allows students to learn anything online interactively.",
        image: "https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/riynaxj7lbgelizpqbeo",
        link: "https://brainwave-kohl.vercel.app/demo",
        stack: [{ Framework: "Next.js & Django" }, { Language: "TypeScript & Python" }, { CSS: "Tailwind CSS" },{ "Use case": "Starter" }],
        // These are the steps to setup the project locally. the title for command step must always be commands
        setup: [{ title: "How it's built and what it does",
            description:" This project is built with Next.js and Django. It is a web application that allows students to learn anything online interactively. It has a dashboard for teachers to manage their classes and students. It also has a dashboard for students to manage their classes and courses." +
                "The frontend is built with Next.js and Tailwind CSS. The backend is built with Django and Django Rest Framework. The database is PostgreSQL. The project is hosted on Vercel and AWS."
        }],
        github: "somelink.github.io",
        tag:"fullstack",


    },
    {
        id: 2,
        title: "Reactive Notes",
        description: "This is a web application that allows users to create, read, update and delete notes.",
        image: "https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/vxqydtvs4gi5kymqjeoj",
        link: "https://notes-app-james.netlify.app/",
        stack: [{ Framework: "React.js" }, { Language: "JavaScript" }, { CSS: "Tailwind CSS" },{ "Use case": "Note taking" }],
        setup: [{ title: "How it was built",description:" This app is entirely built with react and leverages react.js hooks, best practices and good design" }],
        github: "somelink.github.io",
        tag:"Frontend"

    },
    {
        id: 3,
        title: "Clone of the Netflix UI",
        description: "This is a clone of the Netflix UI built with Next.js, TypeScript, MongoDB  and Tailwind CSS.",
        image: "https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/uasxusrgcaij0ytbduyh",
        link: "https://movies-app-james-one-green.vercel.app/",
        stack: [{ Framework: "Next.js" }, { Language: "TypeScript" }, { CSS: "Tailwind CSS" },{ "Use case": "Starter" }],
        setup: [{ title: "Why I cloned Netflix UI?",description:"Among the web apps that I love how they look and feel very modern, Netflix is on top tier. As a web developer it left me wondering how they made a beautiful web app like that, full of smooth animations." +
                "I tried to replicate it so that I can learn how to design cool web UIs. " }],
        github: "somelink.github.io",
        tag:"Web API"

    },
    ];
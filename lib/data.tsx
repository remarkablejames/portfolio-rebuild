export const projects = [
    {
        id: 1,
        title: "Brainwave Online School",
        description: "This is an online learning platform that allows students to learn anything online interactively.",
        image: "https://res.cloudinary.com/james-me/image/upload/f_auto,q_auto/v1/Portfolio-media/riynaxj7lbgelizpqbeo",
        link: "https://brainwave-kohl.vercel.app/demo",
        stack: [{ Framework: "Next.js & Django" }, { Language: "TypeScript & Python" }, { CSS: "Tailwind CSS" },{ "Use case": "Education" }],
        // These are the steps to setup the project locally. the title for command step must always be commands
        setup: [{ title: "How it's built and what it does",
            description:" This web application is built with Typescript Python Django and Postgres. It is built to deliver interactive online courses based on school curriculums. Courses supported range from Languages, science, art, programming and engineering, thanks to integrated real-time simulations of almost every STEM experiment you can think of. " +
                "The app is built with a microservice architecture, with the frontend and backend being separate services. The frontend is built with Next.js and the backend with Django. The frontend communicates with the backend via a REST API. The backend is built with Django and Postgres. The backend is responsible for handling user authentication, course creation, course enrollment, course progress tracking, and course completion. The frontend is responsible for rendering the UI and communicating with the backend via a REST API. "
        },
            { title: "Demo of the app",description:"You can check out a demo of the app by clicking the demo link below. in the left sidebar, you can see the list of courses available. You can enroll in a course by clicking the enroll button. You can also see the progress of the course you are enrolled in. Login credentials are email: james@brainwave.com, password: test123"},
        ],
        github: "somelink.github.io",
        tag:"Typescript & Python",


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
        tag:"React.js"

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
        tag:"Typescript"

    },
    ];
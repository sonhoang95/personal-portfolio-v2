/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineCodepen,
  AiFillLinkedin,
} from "react-icons/ai";

export const links = [
  {
    id: 1,
    title: "about",
  },
  {
    id: 2,
    title: "experience",
  },
  {
    id: 3,
    title: "work",
  },
  {
    id: 4,
    title: "contact",
  },
];

export const socials = [
  {
    id: 1,
    icon: <AiOutlineGithub />,
    href: "https://github.com/sonhoang95",
    title: "Github",
  },
  {
    id: 2,
    icon: <AiOutlineTwitter />,
    href: "https://twitter.com/web_smasher",
    title: "Twitter",
  },
  {
    id: 3,
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/son-nguyen-6a0b4b157/",
    title: "Linkedin",
  },
  {
    id: 4,
    icon: <AiOutlineCodepen />,
    href: "https://codepen.io/sonhoang95",
    title: "Codepen",
  },
];

export const heroData = {
  title: "I build things for the web.",
  name: "Son Nguyen",
  desc: (
    <Fragment>
      {" "}
      I'm a front-end developer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I'm focused on
      building accessible, human-centered products at{" "}
      <a
        href="https://www.trimble.com/"
        className="text-teal-300 hover:underline"
      >
        Trimble Inc.
      </a>
    </Fragment>
  ),
  btnText: "Check out my portfolio",
};

export const aboutData = {
  description: (
    <Fragment>
      {" "}
      <p>
        Hello! My name is Son and I enjoy creating things that live on the
        internet. My interest in web development started back in 2020 when my
        brother asked me to help him design and develop a marketing campaign for
        his startup — turns out hacking together a simple landing page taught me
        a lot about HTML & CSS!
      </p>
      <p>
        Fast-forward to today, and I've had the privilege of working at an{" "}
        <span className="text-teal-300"> a start-up</span>, and{" "}
        <span className="text-teal-300">a corporation</span>. My main focus
        these days is building accessible, inclusive products and digital
        experiences at{" "}
        <a href="https://www.trimble.com/" className="text-teal-300">
          Trimble Inc.
        </a>{" "}
        for a variety of clients.
      </p>
      <p>
        I'm currently learning backend development, security with the interest
        to become a full-stack developer. On top of that, I'm also exploring
        Test Driven Development with Jest and React Testing Library.
      </p>
      <p>Here are a few technologies I've been working with recently:</p>
    </Fragment>
  ),
  languages: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux/@Toolkit",
    "Gatsby.js",
    "Next.js",
    "Headless CMSs",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "GraphQL",
    "React Testing",
    "MongoDB",
    "SQL",
    "PostgreSQL",
  ],
};

export const jobsData = [
  {
    id: "recAGJfiU4CeaV0HL",
    order: 1,
    title: "Front-End Software Engineer",
    dates: "September 2022 - Present",
    duties: [
      "Participated in working with other developers on the team to documenting, maintaining, and updating our React component library to the most up-to-date versionings while maintaining code quality and best practices.",
      "Adapted to the shift in technologies, learned to work with various languages, platforms, frameworks, and content management systems such as Storybook, JavaScript, TypeScript, Gatsby, React, GraphQL, Contentful and Netlify to become a valued member of the team.",
      "ncreased team productivity by 20% by always completing tasks during the sprint schedule and make sure to review codes quickly as well as providing feedback to ensure code quality and quick turnaround time for our weekly deployment.",
    ],
    company: "Trimble",
  },
  {
    id: "recAGJfiU4CeaA0HR",
    order: 2,
    title: "Front-End Web Developer",
    dates: "January 2022 - September 2022",
    duties: [
      "Took initiatives and participated in working with other developers on the team to migrate from C# .NET MVC to using React with TypeScript. In the end, I was awarded a spotlight recognition by my peers.",
      "Help with interviewing, creating documents and assisting with the onboarding process to help them up and running quickly.",
      "Communicating frequently with multi-disciplinary teams of developers, designers, SEO specialists, throughout the marketing department to always come up with better way to improve UI and UX.",
    ],
    company: "CCFI",
  },
  {
    id: "recIL6mJNfWObonls",
    order: 3,
    title: "Junior Front-End Developer",
    dates: "October 2021 - October 2021",
    duties: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, and JavaScript.",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.",
      "Interfaced with designers and other developers to ensure thoughtful and coherent user experiences across all projects.",
    ],
    company: "Prolific",
  },
];

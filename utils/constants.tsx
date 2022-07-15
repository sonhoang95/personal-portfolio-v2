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
      <a href="https://www.ccfi.com/" className="text-teal-300 hover:underline">
        Community Choice Financial.
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
        <a href="https://www.ccfi.com/" className="text-teal-300">
          Community Choice Financial
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
    id: "recAGJfiU4CeaA0HR",
    order: 4,
    title: "Front-End Web Developer",
    dates: "July 2022 - Present",
    duties: [
      " After an acquisition happened between my former and current employer, my team was cut down from 3 developers to only myself. By quickly recognizing and adapting to the challenges that the team was facing, I was able to work quickly, and efficiently and not let that affect our release schedule. In the end, I was awarded a spotlight recognition by my peers.",
      "Help with interviewing, creating documents and assisting with the onboarding process to help them up and running quickly.",
      "Utilizing Gatsby and TypeScript, I rewrote the entire website from scratch with reusable components which resulted in more maintainable and quicker, easier-to-update codebase after migrating from .NET MVC. legacy codebase.",
      "Communicating frequently with multi-disciplinary teams of developers, designers, SEO specialists, throughout the marketing department to always come up with better way to improve UI and UX.",
    ],
    company: "CCFI",
  },
  {
    id: "recAGJfiU4CeaV0HL",
    order: 3,
    title: "Front-End Web Developer",
    dates: "January 2022 - July 2022",
    duties: [
      "Participated in working with other developers on the team to migrate from C# .NET MVC to using React with TypeScript.",
      "Adapted to the shift in technologies, learned to work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, GraphQL and Contentful to become a valued member on the team.",
      "Communicated frequently with multi-disciplinary teams of designers, SEO specialists, and throughout the marketing to come up with campaign strategies as well as Sitecore performance, resulted in better user experience and 30% increased traffic across all sites.",
    ],
    company: "CURO",
  },
  {
    id: "recIL6mJNfWObonls",
    order: 2,
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

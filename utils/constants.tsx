/* eslint-disable react/no-unescaped-entities */
import { Fragment } from 'react';

export const links = [
  {
    id: 1,
    title: 'about',
  },
  {
    id: 2,
    title: 'experience',
  },
  {
    id: 3,
    title: 'work',
  },
  {
    id: 4,
    title: 'contact',
  },
];

export const homeData = {
  title: 'I build things for the web.',
  name: 'Son Nguyen',
  desc: (
    <Fragment>
      {' '}
      I'm a front-end developer specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I'm focused on
      building accessible, human-centered products at{' '}
      <a href="https://www.curo.com/" className="text-teal-400 hover:underline">
        Curo Financial Group.
      </a>
    </Fragment>
  ),
  btnText: 'Check out my portfolio',
};

export const aboutData = {
  description: (
    <Fragment>
      {' '}
      <p>
        Hello! My name is Son and I enjoy creating things that live on the
        internet. My interest in web development started back in 2020 when my
        brother asked me to help him design and develop a marketing campaign for
        his startup — turns out hacking together a simple landing page taught me
        a lot about HTML & CSS!
      </p>
      <p>
        Fast-forward to today, and I've had the privilege of working at an{' '}
        <span className="text-teal-400">advertising agency</span> ,{' '}
        <span className="text-teal-400"> a start-up</span>, and{' '}
        <span className="text-teal-400">a corporation</span>. My main focus
        these days is building accessible, inclusive products and digital
        experiences at{' '}
        <a href="https://www.curo.com/" className="text-teal-400">
          Curo Financial Group
        </a>{' '}
        for a variety of clients.
      </p>
      <p>
        I also recently launched a course that covers everything you need to
        build a web app with the Spotify API using Node & React.
      </p>
      <p>Here are a few technologies I've been working with recently:</p>
    </Fragment>
  ),
  languages: [
    'JavaScript (ES6+)',
    'React',
    'CMS',
    'TypeScript',
    'TailwindCSS',
    'Gatsby.js',
    'Next.js',
    'Node.js',
  ],
};

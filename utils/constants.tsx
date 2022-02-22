/* eslint-disable react/no-unescaped-entities */
import { Fragment } from 'react';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineCodepen,
  AiFillLinkedin,
} from 'react-icons/ai';

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

export const socials = [
  {
    id: 1,
    icon: <AiOutlineGithub />,
    href: 'https://github.com/sonhoang95',
    title: 'Github',
  },
  {
    id: 2,
    icon: <AiOutlineTwitter />,
    href: 'https://twitter.com/web_smasher',
    title: 'Twitter',
  },
  {
    id: 3,
    icon: <AiFillLinkedin />,
    href: 'https://www.linkedin.com/in/son-nguyen-6a0b4b157/',
    title: 'Linkedin',
  },
  {
    id: 4,
    icon: <AiOutlineCodepen />,
    href: 'https://codepen.io/sonhoang95',
    title: 'Codepen',
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
      <a href="https://www.curo.com/" className="text-teal-300 hover:underline">
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
        <span className="text-teal-300">advertising agency</span> ,{' '}
        <span className="text-teal-300"> a start-up</span>, and{' '}
        <span className="text-teal-300">a corporation</span>. My main focus
        these days is building accessible, inclusive products and digital
        experiences at{' '}
        <a href="https://www.curo.com/" className="text-teal-300">
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
    'Headless CMSs',
    'TypeScript',
    'TailwindCSS',
    'Gatsby.js',
    'Next.js',
    'Node.js',
  ],
};

export const jobsData = [
  {
    id: 'recAGJfiU4CeaV0HL',
    order: 3,
    title: 'Full Stack Web Developer',
    dates: 'December 2015 - Present',
    duties: [
      'Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.',
      'Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.',
      'Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.',
    ],
    company: 'TOMMY',
  },
  {
    id: 'recIL6mJNfWObonls',
    order: 2,
    title: 'Front-End Engineer',
    dates: 'May 2015 - December 2015',
    duties: [
      'Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.',
      'Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester',
      'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1',
      'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1',
    ],
    company: 'BIGDROP',
  },
  {
    id: 'rec61x18GVY99hQq5',
    order: 1,
    title: 'Engineering Intern',
    dates: 'May 2014 - September 2015',
    duties: [
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      'YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.',
      'Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.',
    ],
    company: 'CUKER',
  },
];

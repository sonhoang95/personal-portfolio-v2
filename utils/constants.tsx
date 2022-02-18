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
        Curo Financial.
      </a>
    </Fragment>
  ),
  btnText: 'Check out my portfolio',
};

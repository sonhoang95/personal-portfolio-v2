/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import selfPortrait from '../public/images/self-portrait.jpeg';
const About = () => {
  return (
    <section className="py-52 max-w-[900px] mx-auto">
      <div className="grid grid-cols-[175px_300px] gap-2 items-center mb-8">
        <h1 className="text-2xl font-bold capitalize tracking-wider text-gray-300">
          <span className="text-teal-400 font-fira text-xl font-thin mr-2">
            01.
          </span>
          About me
        </h1>
        <div className="h-[1px] w-full bg-gray-600"></div>
      </div>
      <div className="grid grid-cols-[auto_300px] gap-10">
        <div className="text-gray-400 space-y-6">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>
        <div className="relative">
          <Image
            src={selfPortrait}
            alt="self-portrait"
            className="z-10 rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-[300px] border-2 border-teal-400 z-0 transform translate-x-5 translate-y-5 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

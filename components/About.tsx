/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import selfPortrait from '../public/images/self-portrait.jpeg';
import SectionTitle from './SectionTitle';
import { BiRightArrow } from 'react-icons/bi';

export interface AboutProps {
  description: JSX.Element;
  languages: string[];
}
const About = ({ description, languages }: AboutProps) => {
  return (
    <section className="py-52 max-w-[900px] mx-auto">
      <SectionTitle title="About me" index={1} />
      <div className="grid grid-cols-[auto_300px] gap-10">
        <div className="text-[#8892b0] space-y-6">
          {description}
          <div className="grid grid-cols-2 font-fira text-sm space-y-2 font-thin">
            {languages.map((language, index) => (
              <p key={index} className="flex items-center gap-2">
                {' '}
                <span className="text-[10px] text-teal-400">
                  <BiRightArrow />
                </span>
                {language}
              </p>
            ))}
          </div>
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

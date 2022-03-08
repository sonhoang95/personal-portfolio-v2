/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import selfPortrait from '../public/images/self-portrait.jpeg';
import SectionTitle from './SectionTitle';
import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useRef } from 'react';
export interface AboutProps {
  description: JSX.Element;
  languages: string[];
}
const About = ({ description, languages }: AboutProps) => {
  return (
    <motion.section
      id="about"
      className="pb-32 px-6 md:px-12 lg:px-0 max-w-[900px] mx-auto"
      initial={{ opacity: 0, y: 125 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <SectionTitle title="About me" index={1} />
      <motion.div className="grid lg:grid-cols-[auto_300px] gap-10">
        <div className="text-[#8892b0] space-y-6">
          {description}
          <div className="grid grid-cols-2 font-fira text-sm space-y-2 font-thin">
            {languages.map((language, index) => (
              <p key={index} className="flex items-center gap-2">
                {' '}
                <span className="text-[10px] text-teal-300">
                  <BiRightArrow />
                </span>
                {language}
              </p>
            ))}
          </div>
        </div>

        <div className="relative max-w-[250px] lg:max-w-[300px]">
          <Image
            src={selfPortrait}
            alt="self-portrait"
            className="z-10 rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-[250px] lg:h-[300px] border-2 border-teal-400 z-0 transform translate-x-5 translate-y-5 rounded-lg"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;

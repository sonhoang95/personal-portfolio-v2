/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import PrimaryButton from './Buttons/PrimaryButton';

export interface HeroProps {
  name: string;
  cta: string;
  title: string;
}
const Hero = ({ name, cta, title }: HeroProps) => {
  return (
    <section className="px-6 lg:px-0">
      <div className="container max-w-[1000px] mx-auto lg:space-y-4">
        <p className="font-fira tracking-wider text-teal-300 lg:pb-1">
          Hi, my name is
        </p>
        <h1 className="text-[40px] lg:text-7xl font-bold text-gray-100 leading-tight mb-3">
          {name}
        </h1>
        <h1 className="text-[40px] lg:text-7xl font-bold text-gray-400 lg:pb-5 leading-none mb-5">
          {title}
        </h1>
        <p className="max-w-[540px] text-gray-500 pb-10 lg:text-[20px]">
          I'm a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at{' '}
          <a
            href="https://www.curo.com/"
            className="text-teal-400 hover:underline"
          >
            Curo Financial.
          </a>
        </p>

        <PrimaryButton url="#projects">{cta}</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;

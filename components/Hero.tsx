/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import PrimaryButton from './Buttons/PrimaryButton';

export interface HeroProps {
  name: string;
  description: string;
  cta: string;
  title: string;
}
const Hero = ({ name, description, cta, title }: HeroProps) => {
  return (
    <section>
      <div className="container max-w-[1000px] mx-auto space-y-4">
        <p className="font-fira tracking-wider text-teal-300 pb-1">
          Hi, my name is
        </p>
        <h1 className="text-7xl font-bold text-gray-200">{name}</h1>
        <h1 className="text-7xl font-bold text-gray-400 pb-5">{title}</h1>
        <p className="max-w-[540px] text-gray-500 pb-10">
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

        <PrimaryButton url="/projects">{cta}</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;

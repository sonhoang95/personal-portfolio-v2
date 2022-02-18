import PrimaryButton from './Buttons/PrimaryButton';

export interface HeroProps {
  title: string;
  name: string;
  desc: JSX.Element;
  btnText: string;
}

const Hero = ({ title, name, desc, btnText }: HeroProps) => {
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
        <p className="max-w-[560px] text-gray-500 pb-10 text-[18px]">{desc}</p>

        <PrimaryButton url="#projects">{btnText}</PrimaryButton>
      </div>
    </section>
  );
};

export default Hero;

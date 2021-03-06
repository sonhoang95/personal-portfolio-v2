import { motion } from 'framer-motion';
import PrimaryButton from './Buttons/PrimaryButton';
export interface HeroProps {
  title: string;
  name: string;
  desc: JSX.Element;
  btnText: string;
}

const Hero = ({ title, name, desc, btnText }: HeroProps) => {
  return (
    <section className="px-6 lg:px-0 min-h-screen flex flex-col justify-center items-center">
      <div className="container max-w-[1000px] mx-auto lg:space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, ease: 'easeIn' }}
          className="font-fira tracking-wider text-teal-300 lg:pb-1"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, ease: 'easeIn' }}
          className="text-[40px] lg:text-7xl font-bold text-[#ccd6f6] leading-tight mb-3"
        >
          {name}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, ease: 'easeIn' }}
          className="text-[40px] lg:text-7xl font-bold text-[#8892b0] lg:pb-5 leading-none mb-5"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, ease: 'easeIn' }}
          className="max-w-[580px] text-[#8892b0] pb-10 text-[18px]"
        >
          {desc}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, ease: 'easeIn' }}
        >
          <PrimaryButton url="#work">{btnText}</PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

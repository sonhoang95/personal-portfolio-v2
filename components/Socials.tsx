import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { socials } from '../utils/constants';

const Socials = () => {
  return (
    <motion.section
      className="fixed bottom-0 left-12 hidden lg:flex flex-col items-center gap-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, ease: 'easeIn' }}
    >
      <ul className="text-2xl space-y-8 flex flex-col items-center">
        {socials.map(({ id, title, icon, href }) => (
          <Link key={id} href={href}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="text-[#8892b0] hover:text-teal-300 transform hover:-translate-y-1 transition-all duration-100 ease-in inline-block"
            >
              {icon}
            </a>
          </Link>
        ))}
      </ul>
      <div className="w-[1px] h-24 bg-[#8892b0]"></div>
    </motion.section>
  );
};

export default Socials;

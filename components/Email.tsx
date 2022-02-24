import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Email = () => {
  return (
    <motion.section
      className="fixed bottom-0 right-12 hidden lg:flex flex-col items-center gap-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, ease: 'easeIn' }}
    >
      <Link href="mailto:m.bluth@example.com">
        <a
          className="font-fira tracking-[0.1rem] text-xs text-slate hover:text-teal-300 transform hover:-translate-y-2 transition-transform duration-200"
          style={{ writingMode: 'vertical-rl' }}
        >
          sonhoang95@gmail.com
        </a>
      </Link>
      <div className="w-[1px] h-24 bg-[#8892b0]"></div>
    </motion.section>
  );
};

export default Email;

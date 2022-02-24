/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="max-w-[600px] mx-auto text-center text-slate py-24 tracking-wide mb-12 px-6 lg:px-0"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p className="text-teal-300 font-fira font-thin capitalize mb-3">
        04. What's next?
      </p>
      <h1 className="text-5xl text-[#ccd6f6] font-bold capitalize mb-6">
        Get in touch
      </h1>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <Link href="/">
        <a className="inline-block px-8 py-4 mt-12 rounded border border-teal-300 text-teal-300 capitalize font-fira text-sm duration-300 ease-in-out hover:bg-teal-800 hover:text-teal-50">
          Say hello
        </a>
      </Link>
    </motion.section>
  );
};

export default Contact;

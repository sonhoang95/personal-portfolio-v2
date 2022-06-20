import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.svg';
import { links } from '../utils/constants';
import PrimaryButton from './Buttons/PrimaryButton';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { useGlobalContext } from '../context/global_context';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();
  const [isScroll, setIsScroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(document.body.getBoundingClientRect().top);
    if (document.body.getBoundingClientRect().top > scrollPosition) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed w-full h-[100px] top-0 transform transition-transform duration-200 ease-in-out z-30 ${
        !isScroll ? '-translate-y-full' : 'backdrop-blur-md'
      }`}
    >
      <div className="px-6 lg:px-12 mb-32 flex flex-col justify-center h-[100px]">
        <motion.nav
          className="flex justify-between items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" />
              </a>
            </Link>
          </motion.div>
          {!isSidebarOpen && (
            <button
              className="lg:hidden text-3xl text-teal-300"
              onClick={openSidebar}
            >
              <AiOutlineAlignRight />
            </button>
          )}
          <ul className="space-x-8 text-sm font-fira font-thin hidden lg:flex items-center">
            {links.map(link => {
              const { id, title } = link;
              return (
                <motion.li key={id} variants={item}>
                  <Link href={`/#${title}`}>
                    <a className="text-[#8892b0] capitalize">
                      <span className="mr-2 text-teal-300">{`0${id}.`}</span>
                      {title}
                    </a>
                  </Link>
                </motion.li>
              );
            })}
            <motion.div variants={item}>
              <PrimaryButton
                url="https://docs.google.com/document/d/1-g5kxN21UVUKfSO8jC7WBjGERoQnAe_XJppqXK8A1lA/edit"
                small={true}
              >
                Resume
              </PrimaryButton>
            </motion.div>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.svg';
import { links } from '../utils/constants';
import PrimaryButton from './Buttons/PrimaryButton';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { useGlobalContext } from '../context/global_context';
import { useCallback, useEffect, useState } from 'react';

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
      className={`fixed w-full h-[100px] top-0 transform transition-transform duration-200 ease-in-out ${
        !isScroll ? '-translate-y-full' : 'shadow-lg backdrop-blur-md'
      }`}
    >
      <div className="px-6 lg:px-12 mb-32 flex flex-col justify-center h-[100px]">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
          {!isSidebarOpen && (
            <button
              className="lg:hidden text-3xl text-teal-400"
              onClick={openSidebar}
            >
              <AiOutlineAlignRight />
            </button>
          )}
          <ul className="space-x-8 text-sm capitalize font-fira font-thin hidden lg:block">
            {links.map(link => {
              const { id, title } = link;
              return (
                <Link href={`/#${title}`} key={id}>
                  <a className="text-[#8892b0]">
                    <span className="mr-2 text-teal-400">{`0${id}.`}</span>
                    {title}
                  </a>
                </Link>
              );
            })}
            <PrimaryButton url="/" small={true}>
              Resume
            </PrimaryButton>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

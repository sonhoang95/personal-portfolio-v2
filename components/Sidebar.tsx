import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context/global_context';
import { links } from '../utils/constants';
import PrimaryButton from './Buttons/PrimaryButton';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`lg:hidden fixed h-screen bg-gray-800 w-3/4 top-0 right-0 transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className="absolute top-[36px] right-[20px] text-3xl text-teal-300"
        onClick={closeSidebar}
      >
        <AiOutlineClose />
      </button>
      <ul className="flex flex-col gap-8 capitalize items-center h-full justify-center font-fira">
        {links.map(link => {
          const { id, title } = link;
          return (
            <Link href={`/#${title}`} key={id}>
              <a className="flex flex-col items-center" onClick={closeSidebar}>
                <span className="mr-2 text-teal-300">{`0${id}.`}</span>
                {title}
              </a>
            </Link>
          );
        })}
        <PrimaryButton url="/" small={true} sidebar={true}>
          Resume
        </PrimaryButton>
      </ul>
    </aside>
  );
};

export default Sidebar;

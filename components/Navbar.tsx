import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.svg';
import { links } from '../utils/constants';
import PrimaryButton from './Buttons/PrimaryButton';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/global_context';

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();
  return (
    <header>
      <div className="pt-12 px-6 lg:px-24 lg:p-12 mb-32">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
          {!isSidebarOpen && (
            <button className="lg:hidden text-2xl" onClick={openSidebar}>
              <FaBars />
            </button>
          )}
          <ul className="space-x-8 text-sm capitalize font-fira font-thin hidden lg:block">
            {links.map(link => {
              const { id, title } = link;
              return (
                <Link href={`/${title}`} key={id}>
                  <a>
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

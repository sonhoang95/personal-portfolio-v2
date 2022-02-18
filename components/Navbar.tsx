import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.svg';
import { links } from '../utils/constants';
import PrimaryButton from './Buttons/PrimaryButton';

const Navbar = () => {
  return (
    <header className="px-24 py-12 mb-32">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <div>
          <ul className="space-x-8 text-sm capitalize font-fira font-thin">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import Link from 'next/link';
import React from 'react';
import { socials } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between lg:items-end w-3/4 mx-auto lg:w-full px-6 lg:px-12 py-6">
      <p className="text-sm font-light text-center lg:text-left tracking-widest opacity-80">
        © 2020 - {new Date().getFullYear()} Son Nguyen. All Rights Reserved.
      </p>
      <div className="lg:space-x-6">
        <ul className="flex items-center gap-6 justify-center lg:justify-end mb-8 lg:mb-0 lg:mt-8 text-2xl">
          {socials.map(({ id, title, icon, href }) => (
            <Link key={id} href={href}>
              <a
                title={title}
                className="hover:text-teal-400 transform hover:-translate-y-1 transition-all duration-100 ease-in"
              >
                {icon}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}

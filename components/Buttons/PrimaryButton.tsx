import Link from 'next/link';
import React from 'react';

export interface PrimaryButtonProps {
  children?: string;
  url: string;
  small?: boolean;
  sidebar?: boolean;
}
const PrimaryButton = ({
  url,
  children,
  small,
  sidebar,
}: PrimaryButtonProps) => {
  return (
    <Link href={url}>
      <a
        className={`text-teal-300 border border-teal-300 inline-block rounded font-fira transition-colors duration-300 ease-in-out hover:bg-teal-800 hover:text-teal-50 ${
          small ? 'px-4 py-2' : 'px-7 text-sm lg:text-base lg:px-8 py-5'
        } ${sidebar ? 'px-12 py-4 mt-6' : ''}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default PrimaryButton;

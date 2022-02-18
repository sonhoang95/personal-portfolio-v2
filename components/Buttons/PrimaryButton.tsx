import Link from 'next/link';
import React from 'react';

export interface PrimaryButtonProps {
  children?: string;
  url: string;
  small?: boolean;
}
const PrimaryButton = ({ url, children, small }: PrimaryButtonProps) => {
  return (
    <Link href={url}>
      <a
        className={`text-teal-400 border border-teal-400 inline-block rounded font-fira transition-colors duration-300 ease-in-out hover:bg-teal-800 hover:text-teal-50 ${
          small ? 'px-4 py-2' : 'px-8 py-5'
        }`}
      >
        {children}
      </a>
    </Link>
  );
};

export default PrimaryButton;

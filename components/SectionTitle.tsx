import React from 'react';

export interface SectionTitleProps {
  title: string;
  index: number;
}
const SectionTitle = ({ title, index }: SectionTitleProps) => {
  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-6 lg:gap-0 ${
        index === 2
          ? 'lg:grid-cols-[300px_300px]'
          : 'lg:grid-cols-[185px_300px]'
      } items-center mb-8`}
    >
      <h1 className="text-xl lg:text-2xl font-bold capitalize tracking-wider text-[#ccd6f6]">
        <span className="text-teal-300 font-fira text-base lg:text-xl font-thin mr-2">
          0{index}.
        </span>
        {title}
      </h1>
      <div className="h-[1px] w-full bg-gray-700"></div>
    </div>
  );
};

export default SectionTitle;

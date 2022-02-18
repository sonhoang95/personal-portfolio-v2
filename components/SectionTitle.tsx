import React from 'react';

export interface SectionTitleProps {
  title: string;
  index: number;
}
const SectionTitle = ({ title, index }: SectionTitleProps) => {
  return (
    <div className="grid grid-cols-[175px_300px] gap-2 items-center mb-8">
      <h1 className="text-2xl font-bold capitalize tracking-wider text-[#ccd6f6]">
        <span className="text-teal-400 font-fira text-xl font-thin mr-2">
          0{index}.
        </span>
        {title}
      </h1>
      <div className="h-[1px] w-full bg-gray-600"></div>
    </div>
  );
};

export default SectionTitle;

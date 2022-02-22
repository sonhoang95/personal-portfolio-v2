import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import SectionTitle from './SectionTitle';

export interface Job {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

export interface JobsProps {
  jobs: Job[];
}

const Jobs = ({ jobs }: JobsProps) => {
  const [value, setValue] = useState(0);

  const { title, dates, duties, company } = jobs[value];
  const companies = jobs.map(job => job.company);

  return (
    <section
      id="experience"
      className="max-w-[700px] mx-auto pt-24 pb-32 px-6 lg:px-0"
    >
      <SectionTitle title="Where I've worked" index={2} />
      <div className="flex flex-col lg:flex-row px-6 lg:px-0 justify-between gap-8">
        <div className="font-fira text-sm font-thin text-slate flex lg:block">
          {companies.map((company, index) => (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`border-b-2 lg:border-b-0 lg:border-l-2 w-full px-5 transition-colors duration-200 ease-in py-2 hover:text-teal-300 hover:bg-gray-800 ${
                value === index
                  ? 'text-teal-300 border-teal-300'
                  : ' border-slate'
              }`}
            >
              {company}
            </button>
          ))}
        </div>
        <div className="text-slate">
          <h3 className="font-bold text-lg text-[#ccd6f6]">
            {title} <span className="text-teal-300">@ {company}</span>
          </h3>
          <p className="font-fira text-sm font-thin tracking-wider mb-6 mt-2">
            {dates}
          </p>
          <div className="space-y-6">
            {duties.map((duty, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-xs text-teal-300 mt-[6px]">
                  <BiRightArrow />
                </span>
                <p className="flex">{duty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;

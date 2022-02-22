import React from 'react';
import SectionTitle from './SectionTitle';
import { Project } from '../types';
import Image from 'next/image';

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <section
      id="work"
      className="max-w-[1000px] mx-auto py-24 space-y-24 px-6 lg:px-0"
    >
      <SectionTitle index={3} title="Something I've built" />
      {projects.map((project, index) => {
        const { name, shortDesc, featured, thumbnail, slug, techStack } =
          project;
        const pathToImg = thumbnail.fields.file.url;
        const width = thumbnail.fields.file.details.image.width;
        const height = thumbnail.fields.file.details.image.height;
        return (
          <article
            key={index}
            className="grid lg:grid-cols-2 lg:gap-12 items-center bg-[#112240] lg:bg-transparent"
          >
            <div className="lg:w-[570px] relative">
              <Image
                src={`https:${pathToImg}`}
                alt={name}
                width={width}
                height={height}
              />
            </div>
            <div className="tracking-wide flex flex-col lg:items-end p-6 lg:p-0">
              <p className="text-teal-300 capitalize text-sm font-fira font-thin">
                {featured && 'featured project'}
              </p>
              <h2 className="text-2xl font-bold text-[#ccd6f6]">{name}</h2>
              <div className="lg:bg-[#112240] lg:p-6 text-slate rounded my-6 relative z-10 text-left">
                <p>{shortDesc}</p>
              </div>
              <ul className="flex gap-4 items-center text-slate text-sm font-fira font-thin">
                {techStack.map((item, index) => (
                  <li
                    key={index}
                    className="px-2 py-1 rounded bg-[#1d355d] lg:bg-transparent text-[#ccd6f6]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default FeaturedProjects;

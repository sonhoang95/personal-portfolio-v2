import React from 'react';
import SectionTitle from './SectionTitle';
import { Project } from '../types';
import Image from 'next/image';

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="max-w-[1000px] mx-auto py-24 space-y-24">
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
            className="text-right grid grid-cols-2 gap-12 items-center"
          >
            <div className="w-[570px]">
              <Image
                src={`https:${pathToImg}`}
                alt={name}
                width={width}
                height={height}
              />
            </div>
            <div className="tracking-wide flex flex-col items-end">
              <p className="text-teal-300 capitalize text-sm font-fira font-thin">
                {featured && 'featured project'}
              </p>
              <h2 className="text-2xl font-bold text-[#ccd6f6]">{name}</h2>
              <div className="bg-[#112240] p-6 text-slate rounded my-6 relative z-10 text-left">
                <p>{shortDesc}</p>
              </div>
              <ul className="flex gap-4 items-center text-slate text-sm font-fira font-thin">
                {techStack.map((item, index) => (
                  <li key={index}>{item}</li>
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

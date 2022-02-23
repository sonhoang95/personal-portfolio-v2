import React from 'react';
import SectionTitle from './SectionTitle';
import { ProjectData } from '../types';
import Project from './Project';

const Projects = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <section
      id="work"
      className="max-w-[1000px] mx-auto py-24 space-y-24 px-6 lg:px-0"
    >
      <SectionTitle index={3} title="Something I've built" />
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;

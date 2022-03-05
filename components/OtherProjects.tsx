import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProjectData } from '../types';
import ProjectCard from './ProjectCard';

const OtherProjects = ({ projects }: { projects: ProjectData[] }) => {
  const tempProjects = projects.filter(project => project.featured === false);

  const [showMore, setShowMore] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    if (showMore) {
      setFilteredProjects(tempProjects.slice(0, 3));
    } else {
      setFilteredProjects(tempProjects);
    }
  }, [showMore, tempProjects]);

  return (
    <motion.section
      className="max-w-[1000px] mx-auto px-6 lg:px-0 mb-12 text-center"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl lg:text-3xl font-semibold text-[#ccd6f6] capitalize mb-12">
        Other noteworthy projects
      </h3>
      <div className="grid lg:grid-cols-3 gap-6 text-left">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-12 text-teal-300 border border-teal-300 inline-block rounded text-sm font-fira transition-colors duration-300 ease-in-out hover:bg-teal-800 hover:text-teal-50 px-6 py-3 capitalize"
      >
        {showMore ? 'Show more' : 'Show less'}
      </button>
    </motion.section>
  );
};

export default OtherProjects;

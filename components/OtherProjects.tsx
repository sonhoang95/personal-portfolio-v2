import { motion } from 'framer-motion';
import { ProjectData } from '../types';
import OtherProject from './OtherProject';

const OtherProjects = ({ projects }: { projects: ProjectData[] }) => {
  const tempProjects = projects.filter(project => project.featured === false);

  return (
    <motion.section
      className="max-w-[1000px] mx-auto px-6 lg:px-0 mb-12"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl lg:text-3xl font-semibold text-[#ccd6f6] capitalize text-center mb-12">
        Other noteworthy projects
      </h3>
      <div className="grid lg:grid-cols-3 gap-6">
        {tempProjects.map((project, index) => (
          <OtherProject key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default OtherProjects;

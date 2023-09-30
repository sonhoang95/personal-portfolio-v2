import SectionTitle from "./SectionTitle";
import { ProjectData } from "../types";
import FeaturedProject from "./FeaturedProject";
import { motion } from "framer-motion";

const Projects = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <motion.section
      id="work"
      className="max-w-[1000px] mx-auto py-24 space-y-24 px-6 lg:px-0 mb-24"
      initial={{ opacity: 0, y: 125 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <SectionTitle index={3} title="Something I've built" />
      {projects?.map(
        (project, index) =>
          project?.featured && <FeaturedProject key={index} {...project} />
      )}
    </motion.section>
  );
};

export default Projects;

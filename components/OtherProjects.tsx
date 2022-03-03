import { ProjectData } from '../types';
import OtherProject from './OtherProject';

const OtherProjects = ({ projects }: { projects: ProjectData[] }) => {
  const tempProjects = projects.filter(project => project.featured === false);
  console.log(tempProjects);

  return (
    <section className="max-w-[1000px] mx-auto px-6 lg:px-0">
      <h3 className="text-2xl lg:text-3xl font-semibold text-[#ccd6f6] capitalize text-center mb-12">
        Other noteworthy projects
      </h3>
      <div className="grid lg:grid-cols-3 gap-6">
        {tempProjects.map((project, index) => (
          <OtherProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;

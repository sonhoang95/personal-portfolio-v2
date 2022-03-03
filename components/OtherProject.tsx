import { ProjectData } from '../types';
import { AiOutlineFolder } from 'react-icons/ai';
import { FaShare, FaGithub } from 'react-icons/fa';
import TechStack from './TechStack';
import Link from 'next/link';
const OtherProject = ({
  name,
  shortDesc,
  siteUrl,
  techStack,
  githubUrl,
}: ProjectData) => {
  return (
    <article className="bg-[#112240] px-7 py-8 flex flex-col justify-between transform transition duration-200 ease-in-out hover:-translate-y-2">
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-5xl text-teal-300">
            <AiOutlineFolder />
          </span>
          <div className="flex items-center gap-3">
            {githubUrl && (
              <Link href={githubUrl}>
                <a
                  className="text-xl text-slate hover:text-teal-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </Link>
            )}
            <Link href={siteUrl}>
              <a
                className="text-xl text-slate hover:text-teal-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaShare />
              </a>
            </Link>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-[#ccd6f6]">{name}</h3>
        <p className="text-slate text-sm leading-relaxed py-4">{shortDesc}</p>
      </div>
      <TechStack techStack={techStack} isOtherProject={true} />
    </article>
  );
};

export default OtherProject;

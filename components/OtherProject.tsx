import { ProjectData } from '../types';
import { AiOutlineFolder } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import TechStack from './TechStack';
import Link from 'next/link';
const OtherProject = ({ name, shortDesc, siteUrl, techStack }: ProjectData) => {
  console.log(name);

  return (
    <article className="bg-[#112240] px-7 py-8">
      <div className="flex items-center justify-between mb-8">
        <span className="text-5xl text-teal-300">
          <AiOutlineFolder />
        </span>
        <Link href={siteUrl}>
          <a
            className='className="text-xl text-slate'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShare />
          </a>
        </Link>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-[#ccd6f6]">{name}</h3>
        <p className="text-slate text-sm leading-relaxed">{shortDesc}</p>
        <TechStack techStack={techStack} isOtherProject={true} />
      </div>
    </article>
  );
};

export default OtherProject;

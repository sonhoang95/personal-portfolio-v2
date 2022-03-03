import React from 'react';
import Image from 'next/image';
import { ProjectData } from '../types';
import { FiGithub, FiShare } from 'react-icons/fi';
import Link from 'next/link';
import TechStack from './TechStack';

const FeaturedProject = ({
  name,
  shortDesc,
  featured,
  thumbnail,
  githubUrl,
  siteUrl,
  slug,
  techStack,
}: ProjectData) => {
  const pathToImg = thumbnail.fields.file.url;
  const width = thumbnail.fields.file.details.image.width;
  const height = thumbnail.fields.file.details.image.height;
  return (
    <article className="grid lg:grid-cols-2 lg:gap-12 items-center bg-[#112240] lg:bg-transparent">
      <div className="lg:w-[570px] relative">
        <Link href={siteUrl}>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={`https:${pathToImg}`}
              alt={name}
              width={width}
              height={height}
            />
          </a>
        </Link>
      </div>
      <div className="tracking-wide flex flex-col lg:items-end p-6 lg:p-0">
        <p className="text-teal-300 capitalize text-sm font-fira font-thin">
          {featured && 'featured project'}
        </p>
        <h2 className="text-2xl font-bold text-[#ccd6f6]">{name}</h2>
        <div className="lg:bg-[#112240] lg:p-6 text-slate rounded my-6 relative z-10 text-left shadow-lg">
          <p>{shortDesc}</p>
        </div>
        <TechStack techStack={techStack} />
        <div className="flex items-center text-[#ccd6f6] text-xl gap-6 pb-2 lg:pb-0">
          <Link href={githubUrl}>
            <a target="_blank" rel="noreferrer noopener">
              <FiGithub />
            </a>
          </Link>
          <Link href={`/projects/${slug}`}>
            <a>
              <FiShare />
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;

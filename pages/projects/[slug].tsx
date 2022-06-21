import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ProjectData } from "../../types";
import { client } from "../index";
import Image from "next/image";
import TechStack from "../../components/TechStack";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<any>({ content_type: "project" });

  const paths = [{ params: { slug: res.items[0].fields.slug } }];
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "project",
    "fields.slug": params?.slug,
  });

  return {
    props: { project: items[0].fields },
    revalidate: 3600,
  };
};

const ProjectDetail: NextPage<{ project: ProjectData }> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <section className="px-6 lg:px-0 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-[#ccd6f6] mb-8">Loading...</h1>
      </section>
    );
  }

  return (
    <section className="px-6 lg:px-0 min-h-screen flex flex-col justify-center items-center">
      <div className="container max-w-[1200px] mx-auto lg:space-y-4 my-48">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-5xl font-bold text-[#ccd6f6] mb-8">
            {project.name}
          </h2>
          <TechStack techStack={project.techStack} isProjectDetails={true} />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 text-slate">
          <div className="long-desc space-y-6">
            <ReactMarkdown>{project.longDesc}</ReactMarkdown>
            <PrimaryButton url={project.siteUrl} small={true}>
              Web Demo
            </PrimaryButton>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-8">
              {project.images.map((image, index) => (
                <Image
                  key={index}
                  src={`https:${image.fields.file.url}`}
                  alt={image.fields.title}
                  width={image.fields.file.details.image.width}
                  height={image.fields.file.details.image.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

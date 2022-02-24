import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ProjectData } from '../../types';
import { client } from '../index';
import Image from 'next/image';
import TechStack from '../../components/TechStack';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<any>({ content_type: 'project' });

  const paths = res.items.map(item => {
    return { params: { slug: item.fields.slug } };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'project',
    'fields.slug': params?.slug,
  });

  return {
    props: { project: items[0].fields },
  };
};

const ProjectDetail: NextPage<{ project: ProjectData }> = ({ project }) => {
  const { name, techStack, longDesc, thumbnail, images } = project;
  const pathToThumbnail = thumbnail.fields.file.url;
  const thumbnailWidth = thumbnail.fields.file.details.image.width;
  const thumbnailHeight = thumbnail.fields.file.details.image.height;

  return (
    <section className="px-6 lg:px-0 min-h-screen flex flex-col justify-center items-center">
      <div className="container max-w-[1200px] mx-auto lg:space-y-4 my-48">
        <div>
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-6">{name}</h2>
          <TechStack techStack={techStack} />
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="long-desc space-y-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis excepturi magni consequuntur minima. Est quaerat
              maiores sequi dolore, tenetur tempora facilis inventore eligendi
              aspernatur neque! Quae inventore sit dolor assumenda.
            </p>
          </div>
          <div className="space-y-6">
            <Image
              src={`https:${pathToThumbnail}`}
              alt={name}
              width={thumbnailWidth}
              height={thumbnailHeight}
            />
            <div className="flex flex-col gap-8">
              {images.map((image, index) => (
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

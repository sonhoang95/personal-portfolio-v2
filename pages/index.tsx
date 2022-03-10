/* eslint-disable react/no-unescaped-entities */
import { createClient } from 'contentful';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { About, Hero } from '../components';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Jobs from '../components/Jobs';
import { ProjectData } from '../types';
import { aboutData, homeData, jobsData } from '../utils/constants';
import OtherProjects from '../components/OtherProjects';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
});

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'project' });
  const projects = res.items.map(item => item.fields);

  return {
    props: { projects },
  };
};

const Home: NextPage<{ projects: ProjectData[] }> = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Son Nguyen | Personal Portfolio</title>
        <meta
          name="description"
          content="Second iteration of my personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...homeData} />
      <About {...aboutData} />
      <Jobs jobs={jobsData} />
      <Projects projects={projects} />
      <OtherProjects projects={projects} />
      <Contact />
    </div>
  );
};

export default Home;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: 'prik3ds8tbo9',
    CONTENTFUL_ACCESS_KEY: 'CvbixxyBg1MNPozWW3ToZvhue_k05f31yfppDEgBH94',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;

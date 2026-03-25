/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['remotion', '@remotion/player', '@remotion/renderer'],
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;

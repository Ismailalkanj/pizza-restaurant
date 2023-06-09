/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  images: {
    // domains: ['i.ibb.co', 'menshaircuts.com', 'images.unsplash.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
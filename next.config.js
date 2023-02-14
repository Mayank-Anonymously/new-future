/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

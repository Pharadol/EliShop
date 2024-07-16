/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['reliable-bell-98911e583a.media.strapiapp.com', '127.0.0.1'],
  },
  env: {
    API_URL: process.env.API_URL
  }
};

export default nextConfig;

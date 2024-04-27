/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['exciting-strength-4321a1f9f4.media.strapiapp.com', '127.0.0.1'],
  },
  env: {
    API_URL: process.env.API_URL
  }
};

export default nextConfig;

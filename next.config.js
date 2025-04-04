/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
      ],
    },
    images: {
      domains: ['strapibackend-gyvh.onrender.com'],
    },
  };
  
  module.exports = nextConfig;
  
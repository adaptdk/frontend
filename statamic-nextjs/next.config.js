/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sd-statamic.test',
        pathname: '/files/**',
      },
    ],
  },
}

module.exports = nextConfig

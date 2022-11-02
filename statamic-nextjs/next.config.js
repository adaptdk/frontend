/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.headless-5cj5jmy-br3bvmw5mdtds.de-2.platformsh.site',
        port: '',
        pathname: '/files/**',
      },
    ],
  },
}

module.exports = nextConfig

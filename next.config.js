/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  images: {
    domains: ['placekitten.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'placekitten.com',
        port: '',
        pathname: '/g/**',
      },
    ],
  }
}

module.exports = nextConfig

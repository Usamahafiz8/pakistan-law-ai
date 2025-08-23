/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdnjs.cloudflare.com'],
  },
  // Enable static exports for deployment
  output: 'standalone',
  // Optimize for performance
  swcMinify: true,
  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/pdfs/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

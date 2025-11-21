/** @type {import('next').NextConfig} */
const nextConfig = {
  // other Next.js options...
  eslint: {
    // allow builds even if ESLint finds errors/warnings
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

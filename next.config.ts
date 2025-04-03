import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    reactCompiler: true
  },
  outputFileTracingIncludes: {
    '/writing': ['posts/**/*']
  }
};

export default nextConfig;

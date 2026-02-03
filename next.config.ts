import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enable Static Export
  output: 'export',

  // 2. Fix Image Optimization Error
  // Standard Next.js Image optimization requires a server.
  // Static exports must disable this or use a custom loader.
  images: {
    unoptimized: true,
  },

  // 3. Optional: Fix trailing slashes for better SEO/Hosting compatibility
  // trailingSlash: true,
};

export default nextConfig;
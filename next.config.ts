import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    removeConsole: true, // optional
  },
};

export default nextConfig;

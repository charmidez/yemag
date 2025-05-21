import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/out',
  assetPrefix: '/out/'
};

//module.exports = nextConfig;

export default nextConfig;

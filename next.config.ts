import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/MyWebsite",
  assetPrefix: "/MyWebsite/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

};

export default nextConfig;

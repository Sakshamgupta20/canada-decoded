import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/canada-decoded",
  assetPrefix: "/canada-decoded/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

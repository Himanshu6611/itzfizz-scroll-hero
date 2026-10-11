import type { NextConfig } from "next";

import path from "path";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/itzfizz-scroll-hero" : "",
  assetPrefix: isGithubActions ? "/itzfizz-scroll-hero" : "",
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;

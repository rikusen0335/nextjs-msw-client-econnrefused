import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";

import "@/libs/env/client";
import "@/libs/env/server";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default withVanillaExtract(nextConfig);

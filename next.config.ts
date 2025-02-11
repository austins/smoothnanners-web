import type { NextConfig } from "next";
import initBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = initBundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const config: NextConfig = {
    eslint: { dirs: ["."] },
    experimental: { reactCompiler: true },
    output: "export",
    images: { unoptimized: true }
};

export default withBundleAnalyzer(config);

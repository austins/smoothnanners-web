import type { NextConfig } from "next";

const config: NextConfig = {
    eslint: { dirs: ["."] },
    experimental: { reactCompiler: true },
    output: "export",
    images: { unoptimized: true }
};

export default config;

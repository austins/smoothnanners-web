import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: { dirs: ["."] },
    experimental: { reactCompiler: true },
    output: "export"
};

export default nextConfig;

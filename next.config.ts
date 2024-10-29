import type { NextConfig } from "next";

let config: NextConfig = {
    eslint: { dirs: ["."] },
    experimental: { reactCompiler: true },
    output: "export",
    images: { unoptimized: true }
};

if (process.env["ANALYZE"] === "true") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: true });
    config = withBundleAnalyzer(config);
}

export default config;

const { withPlugins, optional } = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: { outputStandalone: true },
    images: {
        deviceSizes: [540, 600],
        imageSizes: [16, 32, 64, 128],
    },
    poweredByHeader: false,
};

module.exports = withPlugins(
    [[optional(() => require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" }))]],
    nextConfig
);

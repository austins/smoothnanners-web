const { withPlugins, optional } = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withPlugins(
    [optional(() => require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" }))],
    nextConfig
);

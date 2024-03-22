/** @type {import('next').NextConfig} */
const config = {
    eslint: { ignoreDuringBuilds: true },
    output: "export",
    images: { unoptimized: true }
};

export default config;

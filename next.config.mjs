/** @type {import('next').NextConfig} */
const config = {
    eslint: {
        ignoreDuringBuilds: true // next lint doesn't work with our eslint config, so we should run eslint directly.
    },
    output: "export",
    images: { unoptimized: true }
};

export default config;

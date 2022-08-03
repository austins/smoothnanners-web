import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            scss: { prependData: '@use "src/variables.scss" as *;' },
        }),
    ],
    kit: {
        adapter: adapter({
            pages: "build",
            fallback: null,
            precompress: false,
        }),
        browser: {
            router: false,
            hydrate: false,
        },
        prerender: { default: true },
    },
};

export default config;

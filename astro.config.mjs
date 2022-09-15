import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [image(), react()],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "src/variables.scss" as *;',
                },
            },
        },
    },
    site: "https://smoothnanners.com",
});

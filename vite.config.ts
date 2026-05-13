import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tailwindcss(), qwikCity(), qwikVite(), tsconfigPaths({ root: "." })],
    server: {
        headers: {
            // Don't cache the server response in dev mode.
            "Cache-Control": "public, max-age=0"
        }
    },
    preview: {
        headers: {
            // Apply some caching to the server response in preview mode.
            "Cache-Control": "public, max-age=600"
        }
    }
});

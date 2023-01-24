import type { UserConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import icons from "unplugin-icons/vite";

const config: UserConfig = {
    plugins: [sveltekit(), icons({ compiler: "svelte" })]
};

export default config;

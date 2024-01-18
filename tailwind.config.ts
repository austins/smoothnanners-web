import { type Config } from "tailwindcss";
import * as defaultTheme from "tailwindcss/defaultTheme";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const sans = ["Droid Sans", ...defaultTheme.fontFamily.sans];

const config: Config = {
    content: ["./src/**/*.{html,svelte}"],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    sm: "48rem"
                }
            },
            fontFamily: {
                sans,
                heading: ["Kalam", ...sans]
            }
        }
    },
    plugins: [addDynamicIconSelectors()]
};

export default config;

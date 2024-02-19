import { type Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

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
                roundsans: [
                    "ui-rounded",
                    "Hiragino Maru Gothic ProN",
                    "Quicksand",
                    "Comfortaa",
                    "Manjari",
                    "Arial Rounded MT",
                    "Arial Rounded MT Bold",
                    "Calibri",
                    "source-sans-pro",
                    "sans-serif"
                ],
                handwritten: ["Segoe Print", "Bradley Hand", "Chilanka", "TSCu_Comic", "casual", "cursive"]
            }
        }
    },
    plugins: [addDynamicIconSelectors()]
};

export default config;

import type { Config } from "tailwindcss";
import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";

const config: Config = {
    content: ["./{app,components}/**/*.{jsx,tsx}"],
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["ph", "logos"]),
            extraProperties: { "vertical-align": "middle" }
        })
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: { sm: "768px" }
        },
        extend: {
            fontFamily: {
                roundsans: ["ui-rounded", "Hiragino Maru Gothic ProN", "Quicksand", "Comfortaa", "Manjari", "Calibri", "source-sans-pro", "sans-serif"],
                handwritten: ["Segoe Print", "Chilanka", "TSCu_Comic", "casual", "cursive"]
            }
        }
    }
};

export default config;

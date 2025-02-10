// @ts-check
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { FlatCompat } from "@eslint/eslintrc";
import ts from "typescript-eslint";
import eslint from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = ts.config(
    { ignores: [".next/", "out/", ".idea/"] },
    eslint.configs.recommended,
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    prettier,
    {
        rules: {
            "prettier/prettier": [
                "error",
                {
                    arrowParens: "avoid",
                    trailingComma: "none",
                    plugins: ["prettier-plugin-tailwindcss"],
                    tailwindStylesheet: "./src/app/app.css",
                    tailwindFunctions: ["twJoin", "twMerge"]
                }
            ]
        }
    }
);

export default config;

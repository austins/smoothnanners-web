import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { FlatCompat } from "@eslint/eslintrc";
import ts from "typescript-eslint";
import eslint from "@eslint/js";
import readableTailwind from "eslint-plugin-readable-tailwind";
import prettier from "eslint-plugin-prettier/recommended";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = ts.config(
    { ignores: [".next/", "out/", ".idea/"] },
    eslint.configs.recommended,
    { rules: { eqeqeq: "error", "require-await": "error" } },
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        files: ["**/*.{jsx,tsx}"],
        plugins: { "readable-tailwind": readableTailwind },
        rules: {
            ...readableTailwind.configs.error.rules,
            "readable-tailwind/multiline": ["error", { printWidth: 120, group: "newLine", preferSingleLine: true }]
        }
    },
    prettier,
    { rules: { "prettier/prettier": ["error", { arrowParens: "avoid", trailingComma: "none" }] } }
);

export default config;

import prettier from "eslint-config-prettier";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));
const extraFileExtensions = [".svelte"];

export default ts.config(
    includeIgnoreFile(gitignorePath),
    js.configs.recommended,
    ...ts.configs.recommendedTypeChecked,
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                projectService: { allowDefaultProject: ["*.config.js"] },
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions
            }
        }
    },
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    {
        files: ["**/*.svelte", "**/*.svelte.js", "**/*.svelte.ts"],
        languageOptions: {
            parserOptions: { projectService: true, extraFileExtensions, parser: ts.parser, svelteConfig }
        }
    },
    {
        files: ["**/*.svelte"],
        plugins: { "better-tailwindcss": betterTailwindcss },
        settings: {
            "better-tailwindcss": {
                entryPoint: "src/app.css",
                attributes: [["^class$", [{ match: "strings" }]], ".*[Cc]lass(es)?"],
                variables: [".*[Cc]lass(es)?"]
            }
        },
        rules: {
            ...betterTailwindcss.configs["recommended-error"].rules,
            "better-tailwindcss/enforce-consistent-line-wrapping": [
                "error",
                { printWidth: 120, indent: 4, preferSingleLine: true }
            ]
        }
    },
    {
        rules: {
            eqeqeq: "error",
            "no-undef": "off",
            "@typescript-eslint/return-await": "error",
            "@typescript-eslint/no-unsafe-call": "off"
        }
    }
);

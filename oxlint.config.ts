import { strict as qwikStrict } from "oxlint-plugin-qwik/ruleset";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "oxlint";
import { getDefaultSelectors } from "eslint-plugin-better-tailwindcss/defaults";

export default defineConfig({
    categories: { correctness: "error", perf: "error" },
    extends: [qwikStrict],
    env: { builtin: true, node: true, browser: true },
    jsPlugins: ["eslint-plugin-better-tailwindcss"],
    settings: {
        "better-tailwindcss": {
            entryPoint: "./src/global.css",
            selectors: [...getDefaultSelectors(), { kind: "attribute", name: "^.+Class$" }]
        }
    },
    rules: {
        eqeqeq: ["error", "always"],
        "require-await": "error",
        "typescript/no-explicit-any": "error",
        ...betterTailwindcss.configs["recommended-error"].rules,
        "better-tailwindcss/enforce-consistent-line-wrapping": [
            "error",
            { group: "newLine", indent: 4, preferSingleLine: true, printWidth: 120, strictness: "loose" }
        ]
    }
});

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json"],
        sourceType: "module",
        ecmaVersion: 2020,
        extraFileExtensions: [".svelte"],
    },
    plugins: ["svelte3", "@typescript-eslint", "unused-imports"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    ignorePatterns: ["*.cjs"],
    overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
    settings: { "svelte3/typescript": () => require("typescript") },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    rules: {
        eqeqeq: "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "unused-imports/no-unused-imports": "error",
        "no-restricted-imports": [
            "error",
            {
                paths: [
                    {
                        name: "phosphor-svelte",
                        message: "Import from 'phosphor-svelte/lib' instead for faster compiling.",
                    },
                ],
                patterns: ["!phosphor-svelte/lib/*"],
            },
        ],
    },
};

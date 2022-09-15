module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "unused-imports"],
    extends: ["plugin:astro/recommended"],
    ignorePatterns: ["*.cjs"],
    rules: {
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
        "unused-imports/no-unused-imports": "error",
    },
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                project: ["./tsconfig.json"],
                extraFileExtensions: [".astro"],
            },
        },
    ],
};

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: { project: ["./tsconfig.json"], sourceType: "module", ecmaVersion: 2020 },
    settings: { "svelte3/typescript": () => require("typescript") },
    env: { browser: true, es2017: true, node: true },
    plugins: ["svelte3", "@typescript-eslint", "unused-imports"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    ignorePatterns: ["*.cjs"],
    rules: {
        eqeqeq: "error",
        curly: ["error", "all"],
        "brace-style": ["error", "1tbs"],
        "arrow-body-style": ["error", "as-needed"],
        "object-shorthand": ["error", "always"],
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
        "unused-imports/no-unused-imports": "error"
    },
    overrides: [
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3"
        }
    ]
};

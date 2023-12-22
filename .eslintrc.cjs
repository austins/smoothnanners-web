module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended", "prettier"],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: { sourceType: "module", ecmaVersion: 2020, extraFileExtensions: [".svelte"] },
    env: { browser: true, es2017: true, node: true },
    ignorePatterns: ["*.cjs"],
    overrides: [
        { files: ["*.svelte"], parser: "svelte-eslint-parser", parserOptions: { parser: "@typescript-eslint/parser" } }
    ],
    rules: {
        eqeqeq: "error",
        curly: ["error", "all"],
        "brace-style": ["error", "1tbs"],
        "object-shorthand": ["error", "always"],
        "require-await": "error",
        "no-return-await": "error",
        "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "separate-type-imports" }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
        ],
        "@typescript-eslint/no-explicit-any": "off"
    }
};

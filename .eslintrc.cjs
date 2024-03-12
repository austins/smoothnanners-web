// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylisticRules = require("@stylistic/eslint-plugin").configs.customize({
    indent: 4,
    quotes: "double",
    semi: true,
    jsx: true,
    commaDangle: "never",
    braceStyle: "1tbs",
    arrowParens: true
}).rules;

/** @type { import("eslint").Linter.Config } */
module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended"],
    plugins: ["@typescript-eslint", "@stylistic"],
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
        "object-shorthand": ["error", "always"],
        "require-await": "error",
        "no-return-await": "error",
        "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        ...stylisticRules,
        "@stylistic/jsx-one-expression-per-line": "off",
        "@stylistic/quote-props": ["error", "as-needed"]
    }
};

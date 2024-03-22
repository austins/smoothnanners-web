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
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "tailwindcss", "@stylistic"],
    settings: { tailwindcss: { callees: ["twJoin", "twMerge"] } },
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
        "tailwindcss/classnames-order": "error",
        "tailwindcss/enforces-negative-arbitrary-values": "error",
        "tailwindcss/enforces-shorthand": "error",
        "tailwindcss/no-contradicting-classname": "error",
        "tailwindcss/no-custom-classname": "error",
        "tailwindcss/no-unnecessary-arbitrary-value": "error",
        ...stylisticRules,
        "@stylistic/jsx-one-expression-per-line": "off",
        "@stylistic/quote-props": ["error", "as-needed"],
        "@stylistic/indent": ["error", 4, { ignoredNodes: ["ConditionalExpression"] }],
        "@stylistic/function-paren-newline": ["error", "multiline-arguments"]
    }
};

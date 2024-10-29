import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import reactCompiler from "eslint-plugin-react-compiler";
import tailwindcss from "eslint-plugin-tailwindcss";
import stylistic from "@stylistic/eslint-plugin";

const compat = new FlatCompat({ baseDirectory: path.dirname(fileURLToPath(import.meta.url)) });

const config = [
    { ignores: [".next/", "out/", "build/", "next-env.d.ts"] },
    js.configs.recommended,
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    stylistic.configs.customize({
        arrowParens: false,
        braceStyle: "1tbs",
        commaDangle: "never",
        indent: 4,
        jsx: true,
        quotes: "double",
        quoteProps: "as-needed",
        semi: true
    }),
    {
        plugins: {
            "react-compiler": reactCompiler,
            "@stylistic": stylistic,
            tailwindcss
        },
        settings: {
            tailwindcss: {
                callees: ["twJoin", "twMerge"],
                classRegex: "^(c|C)lass(Name)?|[a-zA-Z0-9]+ClassName$"
            }
        },
        rules: {
            curly: "error",
            eqeqeq: "error",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    ignoreRestSiblings: true
                }
            ],
            "react-compiler/react-compiler": "error",
            "tailwindcss/classnames-order": "error",
            "tailwindcss/enforces-negative-arbitrary-values": "error",
            "tailwindcss/enforces-shorthand": "error",
            "tailwindcss/no-custom-classname": "error",
            "tailwindcss/no-contradicting-classname": "error",
            "tailwindcss/no-unnecessary-arbitrary-value": "error",
            "@stylistic/array-element-newline": ["error", { multiline: true }],
            "@stylistic/member-delimiter-style": [
                "error",
                {
                    multiline: {
                        delimiter: "comma",
                        requireLast: false
                    },
                    singleline: { delimiter: "comma" }
                }
            ],
            "@stylistic/function-paren-newline": ["error", "multiline"],
            "@stylistic/array-bracket-newline": ["error", { multiline: true }],
            "@stylistic/object-curly-newline": ["error", { multiline: true }],
            "@stylistic/object-property-newline": "error",
            "@stylistic/padding-line-between-statements": [
                "error",
                {
                    blankLine: "always",
                    prev: "*",
                    next: ["class", "export", "cjs-export", "function"]
                },
                {
                    blankLine: "always",
                    prev: "import",
                    next: ["const", "let", "block-like"]
                },
                {
                    blankLine: "always",
                    prev: "block-like",
                    next: "block-like"
                },
                {
                    blankLine: "always",
                    prev: "directive",
                    next: "*"
                },
                {
                    blankLine: "never",
                    prev: "directive",
                    next: "directive"
                },
                {
                    blankLine: "never",
                    prev: "import",
                    next: "import"
                }
            ],
            "@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
            "@stylistic/jsx-newline": [
                "error",
                {
                    prevent: true,
                    allowMultilines: true
                }
            ]
        }
    },
    {
        files: ["**/*.cjs"],
        rules: { "@typescript-eslint/no-require-imports": "off" }
    },
    {
        files: ["**/*"],
        ignores: ["**/*.config.{js,ts,cjs,mjs}", "**/{error,global-error,layout,loading,not-found,page,template}.{jsx,tsx}"],
        rules: {
            "no-restricted-syntax": [
                "error",
                {
                    selector: "ExportDefaultDeclaration",
                    message: "Use named exports."
                }
            ]
        }
    }
];

export default config;

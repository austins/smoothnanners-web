/** @type {import("prettier").Config} */
module.exports = {
    plugins: ["prettier-plugin-svelte"],
    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
    tabWidth: 4,
    trailingComma: "none",
    htmlWhitespaceSensitivity: "ignore"
};

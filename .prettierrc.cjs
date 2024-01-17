/** @type {import("prettier").Config} */
module.exports = {
    plugins: ["prettier-plugin-svelte"],
    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
    trailingComma: "none",
    htmlWhitespaceSensitivity: "ignore"
};

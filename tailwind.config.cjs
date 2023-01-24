const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,svelte}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
                serif: ["Kalam", ...defaultTheme.fontFamily.serif]
            }
        },
        container: { center: true }
    },
    plugins: []
};

const defaultTheme = require("tailwindcss/defaultTheme");

const sans = ["Droid Sans", ...defaultTheme.fontFamily.sans];

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,svelte}"],
    theme: {
        extend: {
            fontFamily: {
                sans,
                heading: ["Kalam", ...sans]
            }
        },
        container: { center: true }
    },
    plugins: []
};

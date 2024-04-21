const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Archivo Variable'", ...defaultTheme.fontFamily.sans],
            },
        },
        fontFamily: {
            display: ["'Big Shoulders Stencil Display Variable'"],
            compact: ["'Bebas Neue'", ...defaultTheme.fontFamily.sans],
        },
    },
};

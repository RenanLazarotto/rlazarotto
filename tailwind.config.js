const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'IBM Plex Sans'", ...defaultTheme.fontFamily.serif],
            },
        },
    },
};

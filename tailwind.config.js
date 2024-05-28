const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Onest Variable'", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.slate,
            purple: colors.purple,
            violet: colors.violet,
            mint: {
                50: "#edfff8",
                100: "#d5fff0",
                200: "#aeffe1",
                300: "#70ffcc",
                400: "#2bfdb0",
                500: "#00f59b",
                600: "#00c075",
                700: "#00965f",
                800: "#06754d",
                900: "#076042",
                950: "#003724",
            },
        },
    },
};

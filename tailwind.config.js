const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    darkMode: "class",
    plugins: [
        require("@tailwindcss/typography"),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    // <nome-da-classe-do-tailwind>: (<valor-recebido>) => ({<nome-da-propriedade-css>: <valor-recebido>})
                    shape: (value) => ({ "shape-outside": value }),
                },
                { values: theme("shapes") }
            );
        }),
    ],
    theme: {
        shapes: {
            circle: "circle()",
            ellipse: "ellipse()",
            inset: "inset()",
            polygon: "polygon()",
            initial: "initial",
            inherit: "inherit",
        },
        extend: {
            fontFamily: {
                sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            blue: colors.sky,
            gray: colors.slate,
            green: colors.emerald,
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
            orange: colors.orange,
            purple: colors.purple,
            red: colors.red,
            rose: colors.rose,
            white: colors.white,
            yellow: colors.yellow,
        },
    },
};

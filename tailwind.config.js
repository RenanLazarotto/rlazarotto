import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const hexToRgb = (/** @type string */ hex) => {
    hex = hex.replace("#", "");
    hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r} ${g} ${b}`;
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    darkMode: "class",
    plugins: [require("@tailwindcss/typography")],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        "--tw-prose-body": colors.slate[700],
                        "--tw-prose-headings": colors.slate[900],
                        "--tw-prose-lead": colors.slate[600],
                        "--tw-prose-links": colors.slate[900],
                        "--tw-prose-bold": colors.slate[900],
                        "--tw-prose-counters": colors.slate[500],
                        "--tw-prose-bullets": colors.slate[300],
                        "--tw-prose-hr": colors.slate[200],
                        "--tw-prose-quotes": colors.slate[900],
                        "--tw-prose-quote-borders": colors.slate[200],
                        "--tw-prose-captions": colors.slate[500],
                        "--tw-prose-kbd": colors.slate[900],
                        "--tw-prose-kbd-shadows": hexToRgb(colors.slate[900]),
                        "--tw-prose-code": colors.slate[900],
                        "--tw-prose-pre-code": colors.slate[200],
                        "--tw-prose-pre-bg": colors.slate[800],
                        "--tw-prose-th-borders": colors.slate[300],
                        "--tw-prose-td-borders": colors.slate[200],
                        "--tw-prose-invert-body": colors.slate[300],
                        "--tw-prose-invert-headings": colors.white,
                        "--tw-prose-invert-lead": colors.slate[400],
                        "--tw-prose-invert-links": colors.white,
                        "--tw-prose-invert-bold": colors.white,
                        "--tw-prose-invert-counters": colors.slate[400],
                        "--tw-prose-invert-bullets": colors.slate[600],
                        "--tw-prose-invert-hr": colors.slate[700],
                        "--tw-prose-invert-quotes": colors.purple[400],
                        "--tw-prose-invert-quote-borders": colors.purple[500],
                        "--tw-prose-invert-captions": colors.slate[400],
                        "--tw-prose-invert-kbd": colors.white,
                        "--tw-prose-invert-kbd-shadows": hexToRgb(colors.white),
                        "--tw-prose-invert-code": colors.white,
                        "--tw-prose-invert-pre-code": colors.slate[300],
                        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
                        "--tw-prose-invert-th-borders": colors.slate[600],
                        "--tw-prose-invert-td-borders": colors.slate[700],
                        h2: {
                            fontWeight: defaultTheme.fontWeight.medium,
                        },
                        a: {
                            transitionDuration: "300ms",
                            transitionProperty: "all",
                            transitionTimingFunction:
                                "cubic-bezier(0.4, 0, 0.2, 1)",
                            textDecoration: "none",
                            color: theme("colors.mint.400"),
                            "&:hover": {
                                color: colors.purple[400],
                            },
                        },
                    },
                },
            }),
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            gray: colors.slate,
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
            purple: colors.purple,
            white: colors.white,
        },
    },
};

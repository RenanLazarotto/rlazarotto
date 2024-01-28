const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,ts,md}'],
  extend: {
    fontFamily: {
      'sans': ['"Mona Sans"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
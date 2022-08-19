const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte', './lib/**/*.svelte', './src/app.html'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.zinc,
      black: colors.black,
      purple: colors.purple,
      green: colors.emerald,
      yellow: colors.amber,
    },
    extend: {
      fontFamily: {
        'sans': [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
    fill: {
      purple: colors.purple
    }
  },
  plugins: [],
}
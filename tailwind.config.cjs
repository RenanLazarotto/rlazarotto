const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte', './lib/**/*.svelte', './src/app.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.slate,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.amber,
      purple: colors.purple
    },
    extend: {
      fontFamily: {
        'sans': [
          'Rubik',
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
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
      gray: colors.gray,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.amber,
      purple: colors.violet
    },
    extend: {
      fontFamily: {
        'sans': [
          'Nunito Sans',
          ...defaultTheme.fontFamily.sans
        ],
        'mono': [
          'JetBrains Mono',
          ...defaultTheme.fontFamily.mono
        ]
      }
    },
    fill: {
      purple: colors.purple
    }
  },
  plugins: [],
}
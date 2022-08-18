const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.zinc,
      black: colors.black,
      purple: colors.purple,
      blue: colors.sky,
      yellow: colors.amber,
    },
    extend: {
      colors: {
        'br-blue': '#000084',
        'br-green': '#008400',
        'br-yellow': '#FFFF00',
        'firehawk-purple': '#9400D3'
      },
      fontFamily: {
        'sans': [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
    fill: {
      purple:  colors.purple
    }
  },
  plugins: [],
}
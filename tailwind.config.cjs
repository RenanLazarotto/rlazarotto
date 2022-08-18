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
      purple: {
        '50': "#C78FFF",
        '100': "#B273F0",
        '200': "#A05EE0",
        '300': "#914FD1",
        '400': "#7E42B8",
        '500': "#663399",
        '600': "#52297A",
        '700': "#3D1F5C",
        '800': "#29143D",
        '900': "#140A1F",
      },
      blue: colors.sky,
      yellow: colors.amber,
    },
    extend: {
      colors: {
        'br-blue': '#000084',
        'br-green': '#008400',
        'br-yellow': '#FFFF00',
        'firehawk-purple': '#663399'
      },
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
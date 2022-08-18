/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans KR', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
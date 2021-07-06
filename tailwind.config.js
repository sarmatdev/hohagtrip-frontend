const path = require('path')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        content: ['Nunito', 'sans-serif'],
      },
      colors: {
        'litepie-primary': colors.emerald,
        'litepie-secondary': colors.coolGray,
      },
    },
    variants: {
      extend: {
        cursor: ['disabled'],
        textOpacity: ['disabled'],
        textColor: ['disabled'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    maxWidth: {
      sm: '510px',
      md: '690px',
      lg: '920px',
      xl: '1110px',
    },
    extend: {
      colors: {
        sd: {
          red: {
            300: '#FFF4F5',
            400: '#CD1D28',
            500: '#A61720',
          },
        },
      },
      fontFamily: {
        display: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
        body: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        sm: '0.5rem', // 8px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.5rem', // 40px
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '5/4': '5 / 4',
        '1/1': '1 / 1',
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
}

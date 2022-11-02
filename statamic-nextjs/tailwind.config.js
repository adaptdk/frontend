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
        grey: {
          element: '#F8F8F8',
          accordion: '#F6F6F6',
          nav: '#F2F2F2',
          'border-nav': '#F5F7F8',
          'border-group': '#F4F4F4',
          'border-footer': '#E7E7E7',
          'border-table': '#DCDCDC',
          'border-input': '#757575',
          'placeholder-input': '#5D5D5D',
          'over-footer-background': '#322f4c',
          'button-hover': '#CFCFCF',
          button: '#EEEEEE',
          'top-nav': '#E5E5E5',
        },
        pages: {
          tag: '#000000',
          500: '#CD1D28',
        },
        sd: {
          red: {
            300: '#FFF4F5',
            400: '#CD1D28',
            500: '#A61720',
          },
          grey: {
            400: '#fafafa',
            600: '#f2f2f2',
            700: '#e8e8e8',
            900: '#333333',
          },
          snow: {
            400: '#fcfbfa',
            500: '#f9f6f4',
            600: '#f2ece7',
            700: '#e3d5cc',
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

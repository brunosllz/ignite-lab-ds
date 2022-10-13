/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',

      gray: {
        900: '#121214',
        800: '#18181B',
        700: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      cyan: {
        400: '#AAE6FB',
        500: '#81D8F7',
      },

      red: {
        500: '#EF4444',
      },

      yellow: {
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
      },

      violet: {
        900: '#4C1D95'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      backgroundImage: {
        'background-universe': 'url(./src/assets/background-universe.png)'
      },
      screens: {
        'media-968': '968px'
      }
    },
  },
  plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './data/content/*.md',
    './interfaces/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
      '9/16': '56.25%',
    },
    height: {
      'header': 'var(--header-height)'
    },
    lineHeight: {
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        900: 'var(--color-primary-900)',
        700: 'var(--color-primary-700)',
        500: 'var(--color-primary-500)'
      } ,
      secondary: 'var(--color-secondary)',
      buttons: 'var(--color-buttons)',
      buttonhover: 'var(--color-button-hover)',
      buttontext: 'var(--color-button-text)',
      backgroundcolor: 'var(--color-from-background)',
      backgroundtocolor: 'var(--color-to-background)',
    },
    fontFamily: {
      'heading': ["var(--font-family)", "tiza"]
    },
    fontSize: {
      '4xl': 'var(--header-xl-fs)',
    }
  },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
}

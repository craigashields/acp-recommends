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
    lineHeight: {
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
    },
  },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGreen':{
          100: '#3c9670',
          200: '#2A6E52',
          300: '#95B0B1',
          400: '#F1F1E6',
          500: '#CDE8E3',
          600: '#081A25'
        }

      },
    },
  },
  plugins: [],
}


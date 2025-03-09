/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#1C1C1C',
        lead: '#2E2E2E',
        gold: '#C8A961',
        teal: '#0E4D64',
        ice: '#F8F8F8',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
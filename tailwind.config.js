/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {},
    screens: {
      laptop: '1280px',
      desktop: '1600px',
    },
  },
  plugins: [],
};

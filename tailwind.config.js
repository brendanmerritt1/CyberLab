/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {},
    screens: {
      tabletVert: '600px',
      tabletHori: '960px',
      laptop: '1280px',
      desktop: '1600px',
    },
  },
  plugins: [],
};

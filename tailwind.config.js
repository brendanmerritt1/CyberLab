/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {},
    screens: {
      mobile: '320px',
      tabletVert: '600px',
      tabletHori: '960px',
      laptop: '1280px',
      desktop: '1600px',
    },
  },
  plugins: [],
};

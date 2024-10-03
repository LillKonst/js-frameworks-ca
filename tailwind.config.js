/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["InstrumentSans", "sans-serif"],
      },
      colors: {
        customBlue: "#A3D8F8",
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};

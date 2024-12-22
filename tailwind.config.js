/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yelow': '#FFF7E2',
        'gren': '#E6F4EA',
        'demo': '#3A643B',
        'whte': "#FFFBF2",
        'yelowe': "#e8f5d4",
        'gre': "#C3D0C4",
            },
      fontFamily: {
        title:["Quicksand", "serif"],
      },
      fontSize: {
        'vs': '.65rem',
      }
    }
  },
  plugins: [],
}
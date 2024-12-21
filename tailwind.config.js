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
        'yelowe': "#FDF8E5",
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
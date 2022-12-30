/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center : true,
      screens : {
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',
      },
    },
    extend: {
      fontFamily: {
        gemunu : ['Gemunu Libre','sans-serif'],
        open:['Open Sans','sans-serif']
      },
      colors: {
        'clr-red': '#BC1A45',
        'clr-melon': '#FFD369',
        'clr-grey': '#DDDDDD',
        'clr-white': '#F7F7F7',
      }
    },
  },
  plugins: [],
}

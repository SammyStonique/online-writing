/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      fontFamily:{
        'sans': ["Montserrat"],
        'serif':["PT Serif", "Times New Roman"]
      },
      colors:{
        'brown': '#b35032',
        'light-blue': '#53a1fd',
        'dark-blue': '#4494b3',
        'blue': '#9FD5EA',
        'blue-circle': '#57bee6',
        'footer-bg': '#5f767f',
        'footer-color': '#7aa3b2'
      },
      animation: {
        fadeIn: "fadeIn 4s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    
  },
  plugins: [],

}

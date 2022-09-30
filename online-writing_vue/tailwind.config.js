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
        'blue-circle': '#57bee6'
      }
    },
    
  },
  plugins: [],
}

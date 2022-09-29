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
    },
    
  },
  plugins: [],
}

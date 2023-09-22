// 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(97, 94, 240, 0.1)'
      },
      height: {
        customHeight: '10%'
      }
    },
  },
  plugins: [],
}


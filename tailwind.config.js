/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors :{
          'custom-dark': '#1a202c', 
      }
    },
  },
  plugins: [],
}


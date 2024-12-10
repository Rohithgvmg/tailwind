/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          600:"#7f95ac",
          500:"#3fe0d0",
          400:"#19406b"
        },
        purple:{
          400:"#002b5b"
        }
      }
    },
  },
  plugins: [],
}


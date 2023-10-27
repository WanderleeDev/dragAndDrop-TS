/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        customShadow: 'rgba(0, 0, 0, 0.6) 0px 5px 15px'
      }
    },
  },
  plugins: [],
}

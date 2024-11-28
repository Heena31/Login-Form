/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#780000',
        softCream: '#fdf0d5',
      }
    },
  },
  plugins: [],
}
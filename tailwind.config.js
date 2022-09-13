/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
    },
    screens: {
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily: {
      oxygen: ['Oxygen', 'sans-serif']
    }
  },
  plugins: [],
}

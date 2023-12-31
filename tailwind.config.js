/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dancingScript': ['Dancing Script', 'cursive'],
        'libreBaskerville': ['Libre Baskerville', 'serif'],
      }
    },
  },
  plugins: [],
}


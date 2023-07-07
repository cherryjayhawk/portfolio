/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'space': "url('/src/space.jpg')",
      }
    },
  },
  plugins: [],
}


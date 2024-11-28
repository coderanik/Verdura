/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#1e3706',
        'color-white' : '#dddcdca',
      },
    },
  },
  plugins: [],
}


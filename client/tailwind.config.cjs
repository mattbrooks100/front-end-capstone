/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')

  ],
}

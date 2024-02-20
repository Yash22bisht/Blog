/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.ejs"],
  theme: {
    extend: {
      colors: {
        customPink: 'rgb(237, 119, 137)',
        customOrange: 'rgb(245, 142, 110)',
      },
    },
  },
  plugins: [],
}


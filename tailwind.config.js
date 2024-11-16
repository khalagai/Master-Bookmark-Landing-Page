/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
      colors: {
        primary: {
          softblue: ["hsl(231, 69%, 60%)"],
          softred: ["hsl(0, 94%, 66%)"],
        },
        neutral: {
          grayishblue: ["hsl(229, 8%, 60%)"],
          verydarkblue: ["hsl(229, 31%, 21%)"],
        },
      },
    },
  },
  plugins: [],
}


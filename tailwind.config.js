/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#00BFA5"
      },
      text: {
        100: "#37474F",
      },
      silver: {
        100: "#D4D4D4",
        200: "#BDBDBD"
      },
      red: "#E61236",
      white: "#FFF",
      transparentWhite: "rgba(255, 255, 255, 0.8)"
    },
    extend: {},
  },
  plugins: [],
}


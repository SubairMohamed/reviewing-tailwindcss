/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Tiny5-Regular"],
      },
      colors: {
        mainColor: "#d98fae",
        Tcolor: "#e6c5d3",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata"],
        josefin: ["Josefin Sans"],
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1110px",
        xl: "1110px",
      },
    },
    fontSize: {
      base: "15px",
    },
  },
  plugins: [],
};

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
        lg: "1086px",
        xl: "1086px",
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "15px",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.953rem",
      "4xl": "2.5rem",
      "5xl": "3.052rem",
      "6xl": "4.5rem",
    },
  },
  plugins: [],
};

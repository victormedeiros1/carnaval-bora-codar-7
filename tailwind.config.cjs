/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        sm: ["14px", "24px"],
      },
      colors: {
        red: "#E45858",
        purple: "#6246EA",
      },
      width: {
        348: "21.75rem",
      },
    },
  },
  plugins: [],
};

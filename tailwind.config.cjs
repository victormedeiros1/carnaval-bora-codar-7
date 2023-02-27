/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: ["14px", "24px"],
        sm: ["16px", "160%"],
        md: ["20px", "140%"],
        lg: ["32px", "140%"],
        xl: ["48px", "125%"],
      },
      borderRadius: {
        10: "0.625rem",
      },
      colors: {
        red: "#E45858",
        purple: "#6246EA",
      },
      maxWidth: {
        348: "21.75rem",
      },
      screens: {
        mobile: { max: "768px" },
        mobilexs: { max: "388px" },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      sm2: "576px",
      md: "768px",
      lg: "976px",
      lg2: "1250px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsla(171, 66%, 44%, 1)",
        lightBlue: "hsla(233, 100%, 69%, 1)",
        darkGrayishBlue: "hsla(210, 10%, 33%, 1)",
        grayishBlue: "hsla(201, 11%, 66%, 1)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern-desktop": "url('/images/bg-header-desktop.png')",
        "hero-pattern-mobile": "url('/images/bg-header-mobile.png')",
      },
    },
  },
  plugins: [],
};

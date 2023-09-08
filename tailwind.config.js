/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#001342",
        green: "#116355",
        primary: "#001342",
        secondary: "#8ACC50",
        lightYellow: "#F4BA00",
        grayish: "#1E1E1E",
      },
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
        raleWay: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      scale: {
        130: "1.3",
      },
    },
  },
  plugins: [],
};

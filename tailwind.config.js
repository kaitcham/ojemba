/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#001342",
        primary: "#001342",
        secondary: "#8ACC50",
        lightYellow: "#F4BA00",
      },
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
        raleWay: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

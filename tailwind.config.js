module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/dist/flowbite.min.js",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display SC", "serif"],
      },
    },

    plugins: [],
  },
};

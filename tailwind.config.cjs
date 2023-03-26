/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "christi": {
          "50": "#f7fee7",
          "100": "#ebfdca",
          "200": "#d7fa9c",
          "300": "#bbf462",
          "400": "#9fe833",
          "500": "#80ce14",
          "600": "#60a10b",
          "700": "#4b7d0e",
          "800": "#3d6311",
          "900": "#355413"
        }
      },
      fontFamily: {
        lexend: ["Lexend", "cursive"]
      }
    }
  },
  plugins: []
};
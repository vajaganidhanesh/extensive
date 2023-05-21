/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color": "#301E4E",
        "custom-color-1": "#E7D7F6",
        "custom-color-2": "#FFFFFF",
        "custom-color-3": "#B7364A",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

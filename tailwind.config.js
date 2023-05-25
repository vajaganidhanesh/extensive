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
        "custom-color-4": "#494949",
        "custom-color-5": "#463366",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        Source: ["Source Sans Pro", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "-0.015": "-0.015em",
      },
    },
  },
  plugins: [],
};

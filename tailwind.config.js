/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseGold: "#B76E79",
        deepPlum: "#4B2E39",
        offWhite: "#F8F5F4",
        charcoal: "#2C2C2C",
        champagne: "#EBD4C6",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
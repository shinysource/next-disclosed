/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        dark1: "#363636",
        darkBlue: "#0492C2",
        darkWhite: "rgba(255, 255, 255, 0.5);",
        white1: "#C9C9C9",
        black1: "#1F1F1E",
        blue1: "#0492C2",
        blue2: "#66BEED",
        green1: "#00FF95",
        purple: "#976AFF",
        pink: "#CC4D93",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/home.png')",
      },
      colors: {
        secondary: "#F33434"
      }
    },
  },
  plugins: [],
}


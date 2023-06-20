/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#067d9e",
        darkBlue: "#00264D",
        veryDarkBlue: "#00172D",
        green: '#00CCCC',
        midGreen: "rgb(2, 93, 93)",
        darkGreen: "#004958",
      },
    },
  },
  plugins: [],
}


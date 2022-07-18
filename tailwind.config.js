/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteSmoke: "#e5e5e5",
        midGray: "#6D6D6E",
        grayMovie: "#808080",
        blackMovie: "#141414",
        redMovie: "#B9090B",
      },
      backgroundImage: {
        "hero-pattern": `url('/src/assets/images/login-background.jpg')`,
      },
    },
  },
  plugins: [],
};

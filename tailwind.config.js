/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        colors: {
          darkBlue: "hsl(209, 23%, 22%)",
          darkModeBg: "hsl(207, 26%, 17%)",
          veryDarkBlueText: "hsl(200, 15%, 8%)",
          darkGray: "hsl(0, 0%, 52%)",
          lightModeBg: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
};

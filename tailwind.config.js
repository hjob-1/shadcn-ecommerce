/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.purple[700],
          foreground: colors.white,
        },
        secondary: {
          DEFAULT: colors.gray[900],
          foreground: colors.purple[700],
        },
        danger: {
          DEFAULT: colors.red[600],
          foreground: colors.white,
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter var"', 'sans-serif'],
      serif: ['"Inter var"', 'serif'],
    },

    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),

  ],
}


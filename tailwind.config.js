/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Martel Sans", "Noto Sans Khojki", "sans-serif"],
      },
      colors: {
        "primary-text-button-color": "#8053ff",
        "main-color": "#23155b",
        "gray-light-color-body": "#817d8e",
        "white-background-form-color": "#f4f4f4",
        "background-color": "#f4f4f4",
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}
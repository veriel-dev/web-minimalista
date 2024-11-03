/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main": "#09090b",
        "main-light": "rgb(24 24 27)",
        "secondary": "#27272a"
      },
      textColor: {
        "primary": "#e4e4e7"
      },
      borderColor: {
        "main": "#27272a"
      }
    },
  },
  plugins: [],
}
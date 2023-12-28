/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#C49F72",
      },
      backgroundImage: {
        'dolor-bg': "url('/assets/Rectangle 21.png')",
      }
    },
  },
  plugins: [],
}
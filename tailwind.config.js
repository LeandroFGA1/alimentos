/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1d4fd8',
        "secondary":"#d1d5db",
        "bg1":"#ff9e3f",
      },
    },
  },
  plugins: [],
}


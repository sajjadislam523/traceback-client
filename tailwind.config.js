/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'errorBg': "url('assets/errorImg/boyLost.jpg')",
      },
    },
    fontFamily: {
      "poppins": ["Poppins", "serif"],
    },
  },
  plugins: [require("daisyui")],
}


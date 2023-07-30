/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['DM Sans'],
      'emoji': ['Noto Color Emoji'],
    }
  },
  plugins: [],
}


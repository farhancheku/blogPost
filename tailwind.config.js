/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      'home-page-screen' : "url('/src/assets/header-bg.png')"
    },
  },
  plugins: [],
}

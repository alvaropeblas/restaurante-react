/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PRIMARY: '#495867',
        SECONDARY: '#577399',
        TERCIARY: '#BDD5EA',
        EXTRA_COLOR: '#F7F7FF',
        BUTTON_COLOR: '#FE5F55',
      },
      fontFamily: {
        'lilita': ['Lilita One', 'sans-serif'],
      },
      backgroundImage: {
        'HERO-TWO': "url('assets/images/foodTwo.jpg')",
        'HERO-ONE': "url('assets/images/foodOne.jpg')",
        'HERO-THREE': "url('assets/images/foodThree.jpg')",
        'HERO-FOUR': "url('assets/images/foodFour.jpg')",
      }
    },
  },
  plugins: [],
}
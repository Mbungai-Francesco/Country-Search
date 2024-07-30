/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'myBlue': {
          dark: 'hsl(209, 23%, 22%)',
          very_dark1: 'hsl(207, 26%, 17%)',
          very_dark2: 'hsl(200, 15%, 8%)',
        },     // Custom color with a name
        'myGrey': {
          dark_gray: 'hsl(0, 0%, 95%)',
          light_gray: 'hsl(0, 0%, 98%)',
        },    // Another custom color
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        'xxs': '.625rem',
      },
    },
  },
  plugins: [],
}


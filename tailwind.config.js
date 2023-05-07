/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         fontFamily: {
           'pathway': ['Pathway Extreme', 'sans-serif'],
           'dance': ['Dancing Script', 'cursive'],
           'rametto': ['Rammetto One', 'cursive'],
           'roboto': ['Roboto Slab', 'serif'],
           'merri': ['Merriweather', 'serif'],
           'lato': ['Lato', 'sans-serif'],
           'open': ['Open Sans', 'sans-serif'],
        },
        backgroundImage: {
        'hero-pattern': "url('../Contour Lines.svg')",
        'space-pattern': "url('./spaces (1).jpg')",
        'svg-pattern': "url('./blobanimation.svg')",
        'svg2-pattern': "url('./blobanimation2.svg')",
      },
    },
  },
  plugins: [],
}
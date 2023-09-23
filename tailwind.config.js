/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'cenotaph': ['Cenotaph Titling', 'serif'],
      },
      screens: {
        'xs': '400px',
        'xxs': '0px',
      },
    },
  },
  plugins: [require("daisyui")],
}


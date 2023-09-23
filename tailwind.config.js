/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'cenotaph': ['Cenotaph Titling', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}


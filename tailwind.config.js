/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'alert-warning' // TEMPORARY work around for displaying warnings until full CMS solution implemented
  ],
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
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "rgb(249, 115, 22)"
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "rgb(249, 115, 22)"
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}


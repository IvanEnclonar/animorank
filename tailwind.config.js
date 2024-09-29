/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        borderColor: '#292929',
      },
      width: {
        '9/10': '90%', // Custom class for 90% width
      },
      fontFamily: {
        poppins_h: ['Poppins', 'sans-serif'], // Add your custom font here
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  darkMode: 'selector',
}


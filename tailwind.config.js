/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        borderColor: '#292929',
        forestGreen: '#00A86B',
        accentColor: '#006239',
      },
      width: {
        '9.5/10': '95%', // Custom class for 95% width
        '9/10': '90%', // Custom class for 90% width
        '8.5/10': '85%', // Custom class for 85% width
      },
      fontFamily: {
        poppins_h: ['Poppins', 'sans-serif'], // Add your custom font here
        sans: ['sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
      height: {
        '9/10': '90%', // Custom class for 90% height
        '8.5/10': '85%', // Custom class for 85% height
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  darkMode: 'selector',
}


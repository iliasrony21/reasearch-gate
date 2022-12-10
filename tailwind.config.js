/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#40BA9B',
          secondary: '#94D8C7',
          accent: '#8cf6eb',
          neutral: '#EAF7F4',
          'base-100': '#ffffff'
        }
      },
      'dark',
      'cupcake'
    ]
  },
  plugins: [require('daisyui')]
}

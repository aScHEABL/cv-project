/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'component-gray': '#1c1c1c',
      'input-box-gray': '#2d2d2d',
      'black': '#000',
      'white': '#fff',
      'mint': '#79d2b5'
    },
    extend: {
      height: {
        'preview-section': '95.5vh',
      },
      width: {
        'preview-section': '38.4375rem',
      },
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

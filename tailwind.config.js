/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      screens:{
        'md': '900px',
      }
      
    },
  },
  plugins: [    require('preline/plugin'),],
}

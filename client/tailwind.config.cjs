/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3e7bfa',
        foreground: '#28293D',
        background: '#1C1C27',
        bright: '#F2F2F4',
        neutral: '#9090A7',
        success: '#39DA8A',
        error: '#FF5C5C',
        warning: '#FDAC41',
        info: '#4E79CC'
      }
    },
  },
  plugins: [],
}

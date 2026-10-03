/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#087443',
          dark: '#065B35',
          darker: '#043e24',
          light: '#E8F5EC',
          soft: '#F2F9F4',
          bg: '#F8FAF8',
          text: '#17251D',
          muted: '#66736B',
          accent: '#10B981',
          gold: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(8, 116, 67, 0.15)',
        'brand-lg': '0 20px 40px -15px rgba(8, 116, 67, 0.22)',
        'glass': '0 8px 32px 0 rgba(8, 116, 67, 0.08)',
      }
    },
  },
  plugins: [],
}

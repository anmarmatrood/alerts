/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFCF5',
        'soft-black': '#1A1A18',
        'warm-grey': '#666660',
        'sunset-orange': '#FF6B4A',
        'warm-yellow': '#FFD23F',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      },
    },
  },
  plugins: [],
}

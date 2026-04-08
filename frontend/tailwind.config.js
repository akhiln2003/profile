/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808', // Obsidian base
        electric: '#00E5FF',   // Electric Blue
        cyber: '#B2FF05',      // Cyber Lime
        surface: 'rgba(255, 255, 255, 0.05)',
        surfaceBorder: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

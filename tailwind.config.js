/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Fuentes para Outline + Storytelling
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      // Colores existentes
      backgroundColor: {
        "main": "#09090b",
        "main-light": "rgb(24 24 27)",
        "secondary": "#27272a"
      },
      textColor: {
        "primary": "#e4e4e7"
      },
      borderColor: {
        "main": "#27272a"
      },
      // Colores Outline
      colors: {
        outline: {
          violet: '#a78bfa',
          cyan: '#22d3ee',
          emerald: '#34d399',
          rose: '#fb7185',
        }
      },
      // Animaciones para scroll storytelling
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'fill-text': 'fillText 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fillText: {
          '0%': { '-webkit-text-fill-color': 'transparent' },
          '100%': { '-webkit-text-fill-color': 'currentColor' },
        },
      },
    },
  },
  plugins: [],
}

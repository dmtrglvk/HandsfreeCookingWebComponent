/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00205B',
          dark: '#001642',
        },
      },
      fontFamily: {
        'lurpak-light': ['Lurpak Light', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
        'lurpak-regular': ['Lurpak Regular', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
        'lurpak-bold': ['Lurpak Bold', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
        'lurpak-display': ['Lurpak Display', 'Lurpak Bold', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
};

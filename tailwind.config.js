/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        snow: '#f8fafc',
        ice: '#f0f5fa',
        mist: '#e4ecf4',
        cloud: '#c8d8e8',
        slate: '#64748b',
        charcoal: '#334155',
        ink: '#0f172a',
      },
    },
  },
  plugins: [],
};

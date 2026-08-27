/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#162254',
        'navy-deep': '#0E1637',
        'navy-65': '#686F90',
        'navy-15': '#DCDEE5',
        'navy-06': '#F1F2F5',
        cyan: '#64D9EB',
        'cyan-deep': '#23737F',
        'cyan-40': '#9AE6F2',
        'cyan-15': '#E8F9FC',
      },
      fontFamily: {
        sans: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '2rem',
        container: '3rem',
        footer: '4rem',
      },
      transitionTimingFunction: {
        entrance: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

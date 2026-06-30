import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#2563EB',
        accent: '#22C55E',
        background: '#F8FAFC',
        'text-dark': '#1F2937',
        'border-light': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.2' }],
        'hero-tablet': ['48px', { lineHeight: '1.2' }],
        'hero-mobile': ['36px', { lineHeight: '1.2' }],
        'section': ['40px', { lineHeight: '1.3' }],
        'subsection': ['20px', { lineHeight: '1.4' }],
        'body': ['16px', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'soft-md': '0 8px 16px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 12px 24px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px rgba(31, 41, 55, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;

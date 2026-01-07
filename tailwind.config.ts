import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8ddd0',
          300: '#d4c4b0',
          400: '#b8a589',
          500: '#9c8668',
          600: '#7d6b52',
          700: '#5f5140',
          800: '#4a3f32',
          900: '#3a322a',
        },
        secondary: {
          50: '#fdfaf7',
          100: '#f9f2ea',
          200: '#f0e3d2',
          300: '#e4cfb8',
          400: '#d4b494',
          500: '#b89470',
          600: '#9a7757',
          700: '#7c5d43',
          800: '#624a35',
          900: '#4f3c2b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

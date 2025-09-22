import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2C2C2C',
          content: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E8DDD4',
          content: '#2C2C2C',
        },
        accent: {
          DEFAULT: '#7C9885',
          content: '#FFFFFF',
        },
        neutral: {
          DEFAULT: '#2C2C2C',
          content: '#FFFFFF',
        },
        base: {
          100: '#FFFFFF',
          200: '#F5F3F0',
          300: '#F9F7F4',
          content: '#2C2C2C',
        },
        info: {
          DEFAULT: '#8B9A9A',
          content: '#FFFFFF',
        },
        success: {
          DEFAULT: '#7C9885',
          content: '#FFFFFF',
        },
        warning: {
          DEFAULT: '#D4A574',
          content: '#2C2C2C',
        },
        error: {
          DEFAULT: '#A85B5B',
          content: '#FFFFFF',
        },
      },
      backgroundColor: {
        'canvas': '#FFFFFF',
        'foundation': '#F5F3F0',
        'paper': '#F9F7F4',
      },
      textColor: {
        'muted': '#8B9A9A',
      },
      borderRadius: {
        'selector': '1rem',
        'field': '0.5rem',
        'box': '0.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
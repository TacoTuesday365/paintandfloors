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
          DEFAULT: '#1a365d', // Navy blue
          light: '#2c5282',
          dark: '#0f2942',
        },
        secondary: {
          DEFAULT: '#e2e8f0', // Light gray
          light: '#f7fafc',
          dark: '#cbd5e0',
        },
        accent: {
          DEFAULT: '#e53e3e', // Red
          light: '#fc8181',
          dark: '#c53030',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config 
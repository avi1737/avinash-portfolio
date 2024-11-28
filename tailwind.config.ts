import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  lightMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nohemiBold: ['var(--font-nohemi-bold)', 'sans-serif'],
        nohemiMedium: ['var(--font-nohemi-medium)', 'sans-serif'],
        nohemiRegular: ['var(--font-nohemi-regular)', 'sans-serif'],
      },
      container: {
        center: true, // This will center the container
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1280px', // Set the max-width for larger screens
          xl: '1280px', // Set the max-width for larger screens
        },
      },
      colors: {
        background: 'var(#240046)',
        foreground: 'var(--foreground)',
        primaryBlack: '#0a0a0a',
      },
    },
  },
  plugins: [],
} satisfies Config;

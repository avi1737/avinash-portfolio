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
        nueueBold: ['var(--font-nueue-bold)', 'sans-serif'],
        nueueLight: ['var(--font-nueue-light)', 'sans-serif'],
        nueueMedium: ['var(--font-nueue-medium)', 'sans-serif'],
        nueueRegular: ['var(--font-nueue-regular)', 'sans-serif'],
      },
      container: {
        center: true, // This will center the container
        padding: '2rem', // Optional: Adds padding inside the container
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

        primary: '#240046',
        secondary: '#9D4EDD',
        textColor: '#fff',
        primaryLight: '#fff',
        secondaryLight: '#5A189A',
        textColorLight: '#000',
      },
    },
  },
  plugins: [],
} satisfies Config;

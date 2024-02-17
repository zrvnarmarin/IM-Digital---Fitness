import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(260px, 1fr))'
      },
      screens: {
        'xs': '420px',
        'sm': '640px',     // Small screens, such as mobile phones (up to 640px)
        'md': '768px',     // Medium screens, such as tablets (between 640px and 767px)
        'lg': '1024px',    // Large screens, such as laptops (between 768px and 1023px)
        'xl': '1280px',    // Extra-large screens, such as desktops (between 1024px and 1279px)
        '2xl': '1440px',   // Larger desktop screens (between 1280px and 1535px)
        '3xl': '1680px'
      },
      fontSize: {
        '2xs' : '10px'
      }
    },
  },
  plugins: [],
}
export default config

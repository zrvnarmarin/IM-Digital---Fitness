import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(260px, 1fr))",
      },
      screens: {
        xs: "420px",
        sm: "640px", // Small screens, such as mobile phones (up to 640px)
        md: "768px", // Medium screens, such as tablets (between 640px and 767px)
        lg: "1024px", // Large screens, such as laptops (between 768px and 1023px)
        xl: "1280px", // Extra-large screens, such as desktops (between 1024px and 1279px)
        "2xl": "1440px", // Larger desktop screens (between 1280px and 1535px)
        "3xl": "1680px",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply capitalize text-4xl md:text-5xl lg:text-7xl tracking-normal text-center sm:text-start md:text-start text-white leading-10 font-semibold":
            {},
        },
        ".h2": {
          "@apply uppercase text-gray-300 text-xl sm:text-2xl md:text-3xl tracking-tight text-start font-bold":
            {},
        },
        ".h3": {
          "@apply text-gray-200 text-lg sm:text-xl md:text-2xl text-start tracking-normal font-semibold":
            {},
        },
        ".text-normal": {
          "@apply normal-case text-sm md:text-base text-gray-300": {},
        },
        ".text-subheading": {
          "@apply normal-case text-base text-center sm:text-start md:text-start lg:text-lg text-gray-300 font-normal":
            {},
        },
        ".btn-primary": {
          "@apply w-full lg:w-fit text-center bg-gradient-to-r from-[#1D7349] to-[#31C57D] rounded-xl py-2 px-6 md:py-3 md:px-7 cursor-pointer text-base text-white font-normal":
            {},
        },
        ".btn-secondary": {
          "@apply w-full lg:w-fit text-center bg-[#101010] border-2 border-[#31C57D] rounded-xl py-2 px-6 md:py-3 md:px-7 cursor-pointer text-base text-white font-normal":
            {},
        },
        ".text-above-heading": {
          "@apply uppercase text-xs sm:text-sm lg:text-base bg-gradient-to-r bg-clip-text text-transparent from-[#1D7349] to-[#31C57D] tracking-widest text-center sm:text-start md:text-start font-medium":
            {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
export default config;

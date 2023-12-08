import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#4D6877",
          400: "#435B68",
          500: "#384C57",
          600: "#2E3E47",
          700: "#26343B",
          800: "#1C262B",
        },
        secondary: {
          300: "#F3F6F8",
          400: "#E9EFF3",
          500: "#E0EAF0",
          600: "#D3E0E8",
          700: "#CCDBE5",
          800: "#C6D7E2",
        }
        
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
      '3xl': "1900px",
      '4xl': "3000px"
    },
  },
  plugins: [],
};
export default config;

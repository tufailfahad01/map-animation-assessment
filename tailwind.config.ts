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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      hauora: ["var(--font-hauora)", "sans-serif"],
    },
    screens: {
      xs: "390px", 
      sm: "744px",
      md: "1024px",  
      lg:"1440px",
      xl: "2560px", 
    },
  },
  plugins: [],
};
export default config;

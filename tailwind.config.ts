import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2E5D3",
        "cream-dark": "#EADCC6",
        brown: {
          light: "#D9C2A0",
          DEFAULT: "#8C6A4A",
          dark: "#2A1A0F",
          darker: "#1C1008",
        },
        blue: {
          light: "#3D6FB4",
          DEFAULT: "#1E4D8C",
          dark: "#143869",
        },
        glow: "#E9FF5C",
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-inter)"],
      },
      borderRadius: {
        pill: "999px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

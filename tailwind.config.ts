import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        ink: {
          DEFAULT: "#0A0A0A",
          raised: "#101010",
          high: "#161616",
          border: "#1E1E1E",
        },
        smoke: "#2C2C2C",
        ash: "#686868",
        mist: "#959595",
        cream: "#F0EDE4",
        gold: {
          DEFAULT: "#C9A84C",
          bright: "#E2BC5E",
          dim: "#8A7030",
          glow: "rgba(201,168,76,0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

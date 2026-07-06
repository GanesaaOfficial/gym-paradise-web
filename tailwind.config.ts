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
        ash: "#8A8680",
        mist: "#C4C0B8",
        cream: "#F5F2EB",
        gold: {
          DEFAULT: "#C9A84C",
          bright: "#DDB85A",
          dim: "#8A7030",
          glow: "rgba(201,168,76,0.15)",
        },
      },
      fontFamily: {
        display: [
          "var(--font-sora)",
          '"SF Pro Display"',
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        text: [
          "var(--font-inter)",
          '"SF Pro Text"',
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "var(--font-inter)",
          '"SF Pro Text"',
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "hero-display": [
          "clamp(52px, 8.5vw, 104px)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(36px, 5.5vw, 64px)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(24px, 3vw, 34px)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        lead: [
          "clamp(19px, 2.2vw, 24px)",
          { lineHeight: "1.5", letterSpacing: "-0.01em" },
        ],
        "lead-airy": [
          "clamp(18px, 2vw, 22px)",
          { lineHeight: "1.6", letterSpacing: "-0.01em" },
        ],
        tagline: ["clamp(20px, 2.4vw, 26px)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-strong": ["17px", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        copy: ["17px", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};

export default config;

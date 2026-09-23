import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6EEDD",
        parchment: "#EFE3C9",
        maroon: {
          DEFAULT: "#7C1D2A",
          deep: "#5B131D",
          light: "#9A2F3D",
        },
        gold: {
          DEFAULT: "#C8912F",
          bright: "#E0AC4C",
        },
        ink: {
          DEFAULT: "#211712",
          soft: "#2E211A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('/grain.svg')",
      },
      borderRadius: {
        tag: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

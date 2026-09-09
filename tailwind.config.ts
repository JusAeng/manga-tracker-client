import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sukhumvit", "sans-serif"],
        light: ["sukhumvit-light", "sans-serif"],
        medium: ["sukhumvit-medium", "sans-serif"],
        semibold: ["sukhumvit-semibold", "sans-serif"],
        bold: ["sukhumvit-bold", "sans-serif"],
      },
      colors: {
        // Legacy aliases some components still reference.
        primary: "#0F0F12",
        primaryx: "#1A1A1F",

        bg: "#0F0F12",
        surface: "#18181D",
        "surface-2": "#212127",
        border: "#28282F",
        ink: "#F3F3F5",
        "ink-soft": "#9A9AA6",
        "ink-faint": "#5C5C66",
        accent: "#FF5A3C",
        "accent-ink": "#160A06",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
export default config;

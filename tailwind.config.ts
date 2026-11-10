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
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36aaf5",
          500: "#0c8ee9",
          600: "#0270c7",
          700: "#0359a1",
          800: "#074c84",
          900: "#0c3f6e",
          950: "#07284a",
          dark: "#051329",
          navy: "#0a1d37",
          electric: "#0066ff",
          cyan: "#00d2ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(12, 63, 110, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -5px rgba(12, 63, 110, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        elevated: "0 20px 40px -15px rgba(2, 112, 199, 0.15), 0 0 1px 1px rgba(12, 63, 110, 0.05)",
        glow: "0 0 35px -5px rgba(0, 102, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;


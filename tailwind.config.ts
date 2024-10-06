// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        charcoal: "#36454F",
        onyx: "#353839",
        matte: "#262626",
        soot: "#0C0C0C",
        ebony: "#555D50",
        raven: "#1E1E1E",
        rich: "#010B13",
        coal: "#2E2E2E",
        smoky: "#100C08",
        // You can add more custom colors here
      },
      // Optionally, add custom borderRadius, spacing, etc.
      borderRadius: {
        xl: "1rem",
      },
      spacing: {
        14: "3.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        creme: "#F7F1E9", texto: "#2E2A27", texto2: "#5E5650",
        destaque: "#8A4F45", escuro: "#2F4A3F", salvia: "#DCE5DD", dourado: "#C5A882",
      },
      fontFamily: {
        bodoni: 'var(--font-bodoni-moda)',
        nunito: 'var(--font-nunito)',
      },
    },
  },
  plugins: [],
} satisfies Config;

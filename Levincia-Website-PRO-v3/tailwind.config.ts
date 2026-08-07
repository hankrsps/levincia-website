import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        abyss: "#070b12",
        panel: "#0e1624",
        gold: "#d8aa45",
        blueglow: "#4da3ff"
      },
      boxShadow: { gold: "0 0 28px rgba(216,170,69,.25)", blue: "0 0 28px rgba(77,163,255,.2)" }
    }
  },
  plugins: []
} satisfies Config;

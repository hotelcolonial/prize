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
        "primary-yellow": "#f4b41a",
        "primary-blue": "#030E4F",
        "primary-white": "#00000026",
      },
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        interlight: ["Inter Tight", "serif"],
        garamond: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        body: "#ffff",
        primary: "#bfdbfe", // for div background-color
        secondary: "#1d4ed8", // for card background-color
        textColor: "#1e40af", // for text-color
        third: "#e09a09", // for font-color and btn-background
        bgbtn: "#1e3a8a",
        hoverbtn: "#1e40af",
        navcolor: "#f5f5f5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

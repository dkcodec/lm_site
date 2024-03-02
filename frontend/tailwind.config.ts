import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // настройка блюра для логина и регистрации
      backdropBlur: {
        xs: "2px",
      },

      // настройка теней для лонгина и регистрации
      boxShadow: {
        "3xl": "0 0px 60px -20px rgba(0, 0, 0, 0.3)",
      },

      // добаввил шрифт Comfortaa
      fontFamily: {
        sans: ['"Comfortaa", sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

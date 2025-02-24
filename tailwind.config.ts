import type { Config } from "tailwindcss";

const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
const px0_1440 = { ...Array.from(Array(1441)).map((_, i) => `${i}px`) };

export default {
  mode: "jit", // JIT 모드 활성화
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // 파일 경로 추가
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wanted: ['"Wanted Sans"', "sans-serif"],
      },
      colors: {
        background: "#030712",
        sidebar: "#0e131f",
        "menu-active": "#7856FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

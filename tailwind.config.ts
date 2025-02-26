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
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
        9: "9 9 0%",
      },
      fontFamily: {
        wanted: ["Wanted Sans"],
      },
      colors: {
        background: "#030712",
        sidebar: "#0e131f",
        "main-color": "#7856FF",
        "menu-active": "#7856FF",
        "box-color": "#0E131F",
        critical: "#f72585",
        high: "#7209B7",
        medium: "#3470EC",
        low: "#00B4D8",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;

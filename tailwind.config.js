/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0A0A0B",
        surface: {
          deep: "#1A1A1C",
          mid: "#2D2D2F",
          light: "#3F3F41",
        },
        border: "#3F3F41",
        accent: "#FF4402",
        text: {
          primary: "#FFFFFF",
          secondary: "#8E8E93",
        },
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        section: "64px",
      },
      borderWidth: {
        hairline: "1px",
      },
      borderRadius: {
        none: "0px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
}

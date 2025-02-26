/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ["Playwrite AU SA", "serif"],
        "imprima":["Imprima", "serif"],
        "premium":["Playwrite VN", "serif"]
    }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px", // Applied to both 13-inch & 15-inch
    },
  },
  plugins: [],
}
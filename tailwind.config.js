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
  },
  plugins: [],
}
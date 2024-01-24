/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        breakerBay: "#5BA4A4",
        aquaSpring: "#EFFAFA",
        aquaHaze: "#EEF6F6",
        blueSmoke: "#7B8E8E",
        outerSpace: "#2C3A3A",
      },
    },
  },
  plugins: [],
};

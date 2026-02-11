/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        liveBlink: {
          "0%, 100%": { backgroundColor: "#ffffff" },
          "50%": { backgroundColor: "#dc2626" }, // red-600
        },
      },
      animation: {
        liveBlink: "liveBlink 1s infinite",
      },
    },
  },
  plugins: [],
};

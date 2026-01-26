/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed", // purple (match your website)
        secondary: "#0ea5e9", // teal/blue accent
        darkBg: "#020024",
        darkCard: "#0b0b3b",
      },
    },
  },
  plugins: [],
};

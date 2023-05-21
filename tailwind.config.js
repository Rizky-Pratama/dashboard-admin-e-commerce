/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        secondary: "#56CCF2",
        "white-100": "#F8F8F8",
        "black-100": "#9E9E9E",
        "black-200": "#292D32",
      },
    },
  },
  plugins: [],
};

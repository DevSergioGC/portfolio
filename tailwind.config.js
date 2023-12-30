/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        medium: "#232323",
        "light-main": "#FFFFFF",
        "light-transition1": "#7A5C61",
        "light-transition2": "#6874E8",
        "light-transition2": "#392759",
        "light-button": "#FF6663",
        "light-button-hover": "#d17a79",
        "light-titles": "#00272B",
        "light-shadow-box": "#F5F5F5",
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

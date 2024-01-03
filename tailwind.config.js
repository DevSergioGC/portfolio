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
        "dark-main": "#121212",
        "dark-shadow-box": "#232323",
        "dark-button": "#379AE6",
        "dark-button-hover": "#60a8df",
        "dark-transition1": "#36C4E5",
        "dark-transition2": "#E5624F",
        "dark-transition3": "#E3223E",
        "dark-titles": "white",
        "dark-paragraphs": "#ADB7BE",
        "light-main": "#FFFFFF",
        "light-shadow-box": "#F5F5F5",
        "light-button": "#21897E",
        "light-button-hover": "#3BA99C",
        "light-transition1": "#508991",
        "light-transition2": "#C84C09",
        "light-transition3": "#172A3A",
        "light-titles": "#00272B",
        "light-paragraphs": "#534D56",
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

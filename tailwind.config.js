/**
 * TailwindCSS configuration file and theming
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#145ADB",
        secondary: "#F9D44A",
        danger: "#D13241",
        surface: {
          navigation: "#ffffff",
          body: "#E8EEF4",
        },
      },
    },
  },
};

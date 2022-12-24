const FRONTEND_PATH = './apps/frontend/**/*.{js,ts,vue}';

/**
 * TailwindCSS configuration file and theming
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [FRONTEND_PATH],
  theme: {
    extend: {
      colors: {
        primary: '#145ADB',
        secondary: "#F9D44A",
        danger: "#D13241",
        surface: {
          navigation: '#ffffff',
          body: '#E8EEF4',
        },
      },
    },
  },
  plugins: [],
};

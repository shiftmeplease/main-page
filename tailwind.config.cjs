/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, css, js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // add more fonts ...name: [...source-of-font]
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
      colors: {
        "custom-black": "#2F2F2F",
        // ...color-name: color-code (hex/hsl/rgb/rgba/hsla...)
      },
    },
  },
  plugins: [
    // add your tailwind plugins
  ],
};

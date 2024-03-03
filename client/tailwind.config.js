/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      desktop: "1440px",
    },
    extend: {
      colors: {
        red: "#ff0000",
        black50: "rgba(0, 0, 0, 0.5)",
        black10: "rgba(0, 0, 0, 0.1)",
        black5: "rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {},
      fontSize: {
        h1: "67px",
        h2: "50px",
        h3: "37px",
        h4: "28px",
        h5: "21px",
        h6: "13px",
        p: "16px",
        s: "10px",
      },
    },
  },
  plugins: [],
  devtool: "eval-source-map",
};

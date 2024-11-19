/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      bold: "800",
    },
    extend: {
      spacing: {
        1: "9rem",
        2: "5px",
      },
    },
    fontSize: {
      14: "14px",
      10: ".75rem",
      12: "12px",
      3: "3rem",
      2: "2rem",
      15: "1.5rem",
      13: "1.2rem",
      10: "10px",
      8: "8px",
    },
    colors: {
      mainBgColor: "#000000",
      leftBgOne: "#181818",
      leftBgTwo: "#121212",
      leftTextColorWhite: "#FFFFFF",
      leftTextColorGray: "#8B8B8B",
      leftTextColorBlue: "#0000FF",
      leftTextColorRed: "#F70000",
      leftTextColorGreen: "#007C00",
      lineProgressColor: "#1FDF64",
      navbarBgOne: "#121212",
      navbarTextColor: "#4B5563",
      green: "green",
    },
    borderRadius: {
      fiftyPercent: "50%",
      leftMainBorder: ".75rem",
      toolsBorder: "44px",
      border5: "5px",
      border15: "5px",
      borderzero: "0px",
    },
  },
  plugins: [],
};

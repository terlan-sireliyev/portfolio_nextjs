/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "470px",
      sm: "640px",
      sm1: "400px",
      sm2: "361px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
      teal: {
        500: "#14B8A6", // Soft teal
        400: "#2DD4BF", // Light teal
      },
      purple: {
        500: "#8B5CF6", // Medium purple
        400: "#A78BFA", // Soft purple
      },
    },
    backgroundImage: {
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-teal-purple":
        "linear-gradient(to right, #14B8A6, #2DD4BF, #8B5CF6, #A78BFA)",
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

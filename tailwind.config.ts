import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        990: "hsla(250, 10%, 99%, 1)",
        980: "hsla(250, 15%, 98%, 1)",
        950: "hsla(250, 15%, 95%, 1)",
        900: "hsla(250, 15%, 90%, 1)",
        850: "hsla(250, 15%, 85%, 1)",
        800: "hsla(250, 12%, 80%, 1)",
        750: "hsla(250, 12%, 75%, 1)",
        700: "hsla(250, 10%, 70%, 1)",
        600: "hsla(250, 10%, 60%, 1)",
        500: "hsla(250, 8%, 50%, 1)",
        400: "hsla(250, 10%, 40%, 1)",
        300: "hsla(250, 10%, 30%, 1)",
        200: "hsla(250, 15%, 20%, 1)",
        100: "hsla(250, 15%, 10%, 1)",
      },
      teal: {
        990: "hsla(170, 80%, 99%, 1)",
        950: "hsla(170, 80%, 95%, 1)",
        900: "hsla(170, 70%, 90%, 1)",
        850: "hsla(170, 65%, 85%, 1)",
        800: "hsla(170, 55%, 80%, 1)",
        750: "hsla(170, 55%, 75%, 1)",
        700: "hsla(170, 50%, 70%, 1)",
        600: "hsla(170, 50%, 60%, 1)",
        500: "hsla(170, 55%, 50%, 1)",
        400: "hsla(170, 55%, 40%, 1)",
        300: "hsla(170, 65%, 30%, 1)",
        200: "hsla(170, 75%, 20%, 1)",
        150: "hsla(170, 85%, 15%, 1)",
        100: "hsla(170, 90%, 10%, 1)",
      },
      purple: {
        980: "hsla(270, 70%, 98%, 1)",
        950: "hsla(270, 65%, 95%, 1)",
        900: "hsla(270, 60%, 90%, 1)",
        850: "hsla(270, 55%, 85%, 1)",
        800: "hsla(270, 50%, 80%, 1)",
        750: "hsla(270, 40%, 75%, 1)",
        700: "hsla(270, 40%, 70%, 1)",
        600: "hsla(270, 40%, 60%, 1)",
        500: "hsla(270, 40%, 50%, 1)",
        400: "hsla(270, 50%, 40%, 1)",
        350: "hsla(270, 50%, 35%, 1)",
        300: "hsla(270, 50%, 30%, 1)",
        200: "hsla(270, 50%, 20%, 1)",
      },
      yellow: {
        950: "hsla(43, 95%, 95%, 1)",
        900: "hsla(43, 95%, 90%, 1)",
        850: "hsla(43, 95%, 85%, 1)",
        800: "hsla(43, 95%, 80%, 1)",
        700: "hsla(43, 90%, 70%, 1)",
        600: "hsla(40, 85%, 60%, 1)",
        500: "hsla(38, 85%, 50%, 1)",
        400: "hsla(38, 85%, 40%, 1)",
        300: "hsla(36, 90%, 30%, 1)",
        200: "hsla(30, 85%, 20%, 1)",
      },
      red: {
        950: "hsla(353, 100%, 95%, 1)",
        900: "hsla(353, 95%, 90%, 1)",
        800: "hsla(353, 95%, 80%, 1)",
        750: "hsla(353, 95%, 75%, 1)",
        600: "hsla(353, 75%, 60%, 1)",
        500: "hsla(353, 60%, 50%, 1)",
        400: "hsla(353, 80%, 40%, 1)",
        300: "hsla(353, 95%, 30%, 1)",
        150: "hsla(353, 100%, 15%, 1)",
      },
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans", Inter, Arial, sans-serif'],
      inter: ["Inter, Arial, sans-serif"],
    },
    fontSize: {
      sm: "0.9375rem",
      md: "1.125rem",
      lg: "1.3125rem",
      xl: "1.625rem",
      "2xl": "1.9375rem",
      "3xl": "2.3125rem",
      "4xl": "2.875rem",
      "5xl": "3.5rem", // Don't use this

      // Pixel variants
      // "sm": '15px',
      // "md": "18px",
      // "lg": "21px",
      // "xl": "26px",
      // "2xl": "31px",
      // "3xl": "37px",
      // "4xl": "46px",
      // "5xl": "56px"
    },
    fontWeight: {
      thin: "300",
      light: "400",
      normal: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      animation: {
        "spin-once": "spin 1.5s ease-in-out 1",
      },
    },
  },
  plugins: [],
} satisfies Config;

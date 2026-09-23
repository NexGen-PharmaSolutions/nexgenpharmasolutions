/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm off-white: the screens use bg-white for cards and panels, and a
        // cold pure white reads wrong against the cream page.
        white: "#FFF7EF",

        cream: { DEFAULT: "#F5EAD8", light: "#F9F4ED", dark: "#EBDDC5" },
        sand: "#EBDDC5",
        peach: { DEFAULT: "#F6A06B", card: "#FFF2EB" },
        terracotta: {
          DEFAULT: "#C67139",
          dark: "#B2622D",
          deep: "#8C491A",
          light: "#F6A06B",
        },
        sage: {
          DEFAULT: "#728157",
          dark: "#56633F",
          light: "#AEBF92",
          pale: "#F0FAE1",
        },
        ink: { DEFAULT: "#201E1D", soft: "#2E2B25", mid: "#3D372E" },

        // The screens lean on Tailwind's blue and gray scales throughout.
        // Re-pointing them here re-themes every usage without touching markup.
        blue: {
          50: "#FFF2EB",
          100: "#FBE3D3",
          200: "#F4CDB2",
          300: "#F6A06B",
          400: "#DF8A4F",
          500: "#C67139",
          600: "#B2622D",
          700: "#8C491A",
          800: "#703A14",
          900: "#402310",
        },
        gray: {
          50: "#F9F4ED",
          100: "#F2EADF",
          200: "#E6DACA",
          300: "#D3C4AE",
          400: "#C4B6A1",
          500: "#6B6153",
          600: "#5A5146",
          700: "#453E35",
          800: "#332F28",
          900: "#201E1D",
        },
        slate: {
          50: "#F9F4ED",
          100: "#F2EADF",
          200: "#E6DACA",
          300: "#D3C4AE",
          400: "#C4B6A1",
          500: "#6B6153",
          600: "#5A5146",
          700: "#453E35",
          800: "#332F28",
          900: "#201E1D",
        },
        // Decorative icon badges reach for these; point them at the warm palette
        // so nothing cold survives. Red is left alone: it carries form errors.
        purple: { 100: "#E1EECC", 200: "#CFE0B4", 500: "#728157", 600: "#5F6D48" },
        indigo: { 100: "#FBE3D3", 200: "#F4CDB2", 500: "#C67139", 600: "#B2622D" },
        orange: { 100: "#FFF2EB", 200: "#F4CDB2", 500: "#F6A06B", 600: "#DF8A4F" },

        green: {
          50: "#F0FAE1",
          100: "#E1EECC",
          200: "#CFE0B4",
          300: "#AEBF92",
          400: "#8D9D70",
          500: "#728157",
          600: "#5F6D48",
          700: "#56633F",
          800: "#3D472B",
          900: "#272E1B",
        },

        // Kept so any existing reference keeps resolving.
        graphite: { DEFAULT: "#201E1D", light: "#2E2B25" },
        "electric-blue": {
          DEFAULT: "#C67139",
          dark: "#B2622D",
          light: "#F6A06B",
        },
      },
      fontFamily: {
        display: ['"Caprasimo"', "Georgia", "serif"],
        sans: ['"Figtree"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

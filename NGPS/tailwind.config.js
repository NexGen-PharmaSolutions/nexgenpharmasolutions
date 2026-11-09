/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2.5rem" } },
    extend: {
      colors: {
        // Obsidian: warm near-black surfaces, lightest last.
        obsidian: {
          950: "#0B0907",
          900: "#110E0B",
          800: "#18140F",
          700: "#221C16",
          600: "#2E261E",
          500: "#3B3127",
        },
        // Copper: the brand accent, drawn from the logo's orange gradient.
        copper: {
          100: "#FBE6D4",
          200: "#F8D2B2",
          300: "#F6BC8F",
          400: "#F6A06B",
          500: "#E3864D",
          600: "#C67139",
          700: "#9E5527",
          800: "#6E3A1A",
        },
        // Champagne: text on dark.
        champagne: {
          DEFAULT: "#F4EADB",
          soft: "#D9CCB8",
          muted: "#B3A691",
          faint: "#7D7263",
        },
        sage: { DEFAULT: "#9DB07A", deep: "#5F6D48", glow: "#C9DBA6" },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7.2vw, 7rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 5.2vw, 4.75rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 3.6vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2.1rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(246,160,107,.18), 0 20px 60px -20px rgba(227,134,77,.45)",
        "glow-lg": "0 0 0 1px rgba(246,160,107,.25), 0 40px 120px -30px rgba(227,134,77,.55)",
        deep: "0 30px 80px -30px rgba(0,0,0,.8)",
      },
      backgroundImage: {
        "copper-sheen": "linear-gradient(135deg,#F8D2B2 0%,#F6A06B 35%,#C67139 70%,#9E5527 100%)",
        "radial-fade": "radial-gradient(ellipse at center, rgba(227,134,77,.18), transparent 60%)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        shimmer: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
        pulseRing: {
          "0%": { transform: "scale(.9)", opacity: ".7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(.2,.6,.3,1) infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
      transitionTimingFunction: { expo: "cubic-bezier(.16,1,.3,1)" },
    },
  },
  plugins: [],
};

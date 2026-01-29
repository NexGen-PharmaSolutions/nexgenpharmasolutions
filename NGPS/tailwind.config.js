/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Option 10: Graphite + Electric Blue Theme
        graphite: {
          DEFAULT: '#111827',
          light: '#1F2937',
        },
        'electric-blue': {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          light: '#93C5FD',
        },
      },
    },
  },
  plugins: [],
}


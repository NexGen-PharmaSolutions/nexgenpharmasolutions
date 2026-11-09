import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Keep the heavy 3D stack out of the main bundle; it loads after first paint.
        manualChunks: {
          three: ["three"],
          r3f: ["@react-three/fiber", "@react-three/drei"],
          motion: ["framer-motion", "lenis"],
          react: ["react", "react-dom", "react-router-dom", "react-helmet-async"],
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
});

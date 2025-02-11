import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: true, // Permet d'écouter sur toutes les interfaces réseau
    port: 5173, // Tu peux changer le port si besoin
  },
});

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const PORT = process.env.VITE_SERVER_PORT
  ? Number(process.env.VITE_SERVER_PORT)
  : 8080;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_SERVER_URL ?? `http://localhost:${PORT}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: `/react-mini-projects/home/`,
  build: { outDir: "../dist" },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-mini-projects/grocery-list/",
  build: {
    outDir: "../../dist/grocery-list",
    emptyOutDir: false,
  },
});

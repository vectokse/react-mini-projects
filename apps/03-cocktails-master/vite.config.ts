import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: "/react-mini-projects/cocktails-master/",
    build: {
    outDir: "../../dist/cocktails-master",
    emptyOutDir: false,
  },
})

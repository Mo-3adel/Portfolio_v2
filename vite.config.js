import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/guide/features.html

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api": {
        target: "https://zenquotes.io", // or https://api.quotable.io
        changeOrigin: true,
        secure: false, // ignore SSL issues if any
      },
    },
  },
  
})

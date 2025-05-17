import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/CivicSpark',
  build: {
    rollupOptions: {
      context: 'globalThis'
    }
  }
})
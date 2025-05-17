import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'https://zeal72.github.io/CivicSpark/',
  build: {
    rollupOptions: {
      context: 'globalThis'
    }
  }
})
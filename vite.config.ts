import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  base: '/portfolio/',
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
  },
  build: {
    target: "es2020", 
  },
})

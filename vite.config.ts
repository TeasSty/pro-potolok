import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://TeasSty.github.io/pro-potolok/
export default defineConfig({
  plugins: [react()],
  base: '/pro-potolok/',
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Jiking',
  //base: process.env.NODE_ENV === 'production' ? '/Jiking/' : '/',
  plugins: [react()],
})

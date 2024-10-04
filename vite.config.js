import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Ya koi aur fixed port jo aapko pasand ho
    strictPort: true, // Isse ensure hoga ke woh sirf isi port py chale
  }
})

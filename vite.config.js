import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // The 'server' configuration block is not needed and has been removed.
});
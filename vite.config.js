import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss(),],
  server: {
    allowedHosts: [
      // Add the Render URL of your deployed frontend
      'nasa-project-6byr.onrender.com' 
    ],
  },
});

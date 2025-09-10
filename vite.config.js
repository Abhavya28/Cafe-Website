import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: '/Cafe-Website/', // <-- this is required for GitHub Pages
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects', 
          dest: ''            
        }
      ]
    })
  ]
})

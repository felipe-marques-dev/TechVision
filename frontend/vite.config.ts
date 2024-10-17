import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    proxy: {
      '/api': {
        target: 'https://api.correios.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/accounts': {
        target: 'http://localhost:8000', // Backend Django
        changeOrigin: true,
        secure: false, // Defina como false se estiver usando HTTP
      },
      '/produtos/itens/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/categories': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/categories-filter': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  
});

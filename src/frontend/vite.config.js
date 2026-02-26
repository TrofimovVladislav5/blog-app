import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['frontend', 'localhost'],
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      host: 'localhost',
      clientPort: 8000
    }
  }
})

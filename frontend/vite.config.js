import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5050',
      changeOrigin: true,
    },
  },
}
});

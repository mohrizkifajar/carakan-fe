import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  vue(),
  basicSsl({
      name: 'test',
      domains: ['localhost'],
      certDir: '/Users/RIZKI/.devServer/cert'
    })
  ],
})

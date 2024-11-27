import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Cho phép các thiết bị khác trong mạng truy cập
    port: 5173, // Có thể thay đổi nếu cần
  },
})

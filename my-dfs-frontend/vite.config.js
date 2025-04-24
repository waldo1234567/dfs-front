import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      // whenever someone imports 'tailwindcss/version.js', use our stub
      'tailwindcss/version.js': path.resolve(__dirname, 'src/tailwind-version-stub.js')
    }
  }
})

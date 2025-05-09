import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({

  server: {
    port: 5174
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', //e.g converts `landing-container` to `landingContainer`
    },
  },
})

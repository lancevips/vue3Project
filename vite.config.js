import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    // proxy: {
    //   '/api': {
    //     target:,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         'element-plus': ['element-plus'],
  //       }
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@assets': '/src/assets',
      '@components': '/src/components',
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})

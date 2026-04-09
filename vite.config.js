import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({ mode }) => ({
  define: mode === 'production'
    ? { 'process.env.NODE_ENV': JSON.stringify('production') }
    : {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'HandsfreeCooking',
      fileName: 'handsfree-cooking',
      formats: ['es', 'iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
}))

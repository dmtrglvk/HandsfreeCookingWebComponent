import { defineConfig } from 'vite'
import path from 'path'

/**
 * App build for the root index.html demo (same experience as `npm run dev`).
 * Set BASE_URL for GitHub Pages project sites, e.g. BASE_URL=/MyRepo/
 */
export default defineConfig(({ mode }) => ({
  define:
    mode === 'production'
      ? { 'process.env.NODE_ENV': JSON.stringify('production') }
      : {},
  base: process.env.BASE_URL || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist-demo',
    emptyOutDir: true
  }
}))

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

/**
 * Vite Build Config — @jagota/ui
 *
 * Build mode: "library"
 * - สร้าง ESM (.js) + CJS (.cjs) พร้อมกัน
 * - สร้าง TypeScript declarations (.d.ts)
 * - ไม่ bundle peer deps (React, MUI) — project ปลายทางเอา install เอง
 */
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      outDir: 'dist',
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JagotaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs',
    },

    rollupOptions: {
      // ไม่ bundle dependencies เหล่านี้ — ให้ project ปลายทาง install เอง
      // ใช้ regex เพื่อครอบ sub-imports ทั้งหมด เช่น @mui/material/Box, @mui/material/styles
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@mui\//,       // @mui/material, @mui/material/*, @mui/system, @mui/icons-material, ...
        /^@emotion\//,   // @emotion/react, @emotion/styled, @emotion/cache, ...
      ],
      output: {
        // แยก CSS ออกเป็นไฟล์เดียว
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles/foundation.css'
          return assetInfo.name ?? 'asset'
        },
      },
    },

    // ไม่ minify เพื่อให้ Vibe Coder อ่าน source ได้
    minify: false,
    sourcemap: true,
  },

  resolve: {
    alias: {
      '@jagota/ui': resolve(__dirname, 'src/index.ts'),
    },
  },
})

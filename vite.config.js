import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */ }) },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  server: { // <-- TAMBAHKAN BAGIAN INI
    // Opsi ini membuat server bisa diakses dari network, bukan hanya localhost
    host: true,

    // Izinkan semua host yang berakhiran .trycloudflare.com
    allowedHosts: ['.trycloudflare.com']
  }
})

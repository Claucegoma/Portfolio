import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteAliases } from 'vite-aliases'

export default defineConfig({
  plugins: [
    VitePWA(),
    ViteAliases(),
  ],
})

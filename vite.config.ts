import react from '@vitejs/plugin-react'
import { presetAttributify, presetUno } from 'unocss'
import Unocss from 'unocss/vite' // 关键插件引入
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno(), presetAttributify()],
      // 也可以指定配置文件（如果使用独立配置）
      configFile: 'unocss.config.ts'
    })
  ]
})

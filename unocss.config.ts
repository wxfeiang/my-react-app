// unocss.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons({ scale: 1.2 }), presetTypography()],
  transformers: [
    transformerDirectives(), // 启用 @apply 指令
    transformerVariantGroup() // 支持 hover:(bg-blue-400 text-white)
  ],
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
    ],
    ['flex-center', 'flex justify-center items-center']
  ]
})

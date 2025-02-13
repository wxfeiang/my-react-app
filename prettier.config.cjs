// prettier.config.cjs
module.exports = {
    semi: false,
    singleQuote: true,
    trailingComma: 'none',
    plugins: [
        'prettier-plugin-organize-imports', // 自动排序import
        '@ianvs/prettier-plugin-sort-imports' // 分组排序
    ],
    importOrder: [
        '^(react|vue|svelte)',
        '^@?\\w',
        '^[./]'
    ]
}

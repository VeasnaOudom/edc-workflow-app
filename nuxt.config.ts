import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineNuxtConfig({
    ssr: false,
    vue: {
        customElement: true, // This is the critical missing piece
    },
    vite: {
        plugins: [
            cssInjectedByJsPlugin()
        ],
        build: {
            rollupOptions: {
                output: {
                    manualChunks: undefined,
                    inlineDynamicImports: true,
                    entryFileNames: 'khalibre-nudge-app.js',
                    assetFileNames: '[name].[ext]'
                }
            }
        }
    }
})